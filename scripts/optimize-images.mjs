/**
 * Responsive image pipeline.
 *
 * Source of truth: assets/images/** (originals, committed, never deployed).
 * Output: static/images/** as <name>-<width>.jpg (mozjpeg, progressive; any
 * transparency flattened onto the canvas, #f8f8f8) at up to three widths, plus
 * src/lib/data/image-manifest.json keyed by the original public path
 * (/images/...), so content data keeps referring to images by that path.
 *
 * Each output carries its provenance as a JPEG comment segment in the
 * `impeccable:prompt` format, so `impeccable embed-prompt --scan` can verify it.
 * Run: bun run images
 */
import { readdir, mkdir, stat, writeFile, readFile, rm } from 'node:fs/promises';
import { join, relative, dirname, extname, basename } from 'node:path';
import sharp from 'sharp';

const SRC = 'assets/images';
const OUT = 'static/images';
const WIDTHS = [640, 1280, 1920];
const KEEP = new Set(['og-image.jpg']); // hand-made files that live in static/images directly

/** Insert a COM segment right after SOI: "impeccable:prompt\0<text>". */
async function embedOrigin(path, text) {
	const jpeg = await readFile(path);
	const body = Buffer.concat([Buffer.from('impeccable:prompt\0', 'utf8'), Buffer.from(text, 'utf8')]);
	const header = Buffer.from([0xff, 0xfe, 0, 0]);
	header.writeUInt16BE(body.length + 2, 2);
	await writeFile(path, Buffer.concat([jpeg.subarray(0, 2), header, body, jpeg.subarray(2)]));
}

async function walk(dir) {
	const out = [];
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...(await walk(p)));
		else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(p);
	}
	return out;
}

async function clean(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) await rm(p, { recursive: true, force: true });
		else if (!KEEP.has(entry.name)) await rm(p, { force: true });
	}
}

const files = (await walk(SRC)).sort();
await clean(OUT);

const manifest = {};
let before = 0;
let after = 0;

for (const file of files) {
	const rel = relative(SRC, file);
	const key = '/images/' + rel.split('\\').join('/');
	const raw = await sharp(file).metadata();
	// Width/height as displayed, after EXIF rotation.
	const meta = { ...raw, ...(raw.autoOrient ?? {}) };
	// Transparent originals are flattened onto the page canvas (#f8f8f8).
	const ext = '.jpg';
	// Output names are URL-safe (srcset splits on whitespace); the manifest key keeps the original name.
	const safeName = basename(rel, extname(rel)).replace(/[^A-Za-z0-9._-]+/g, '-');
	const base = join(OUT, dirname(rel), safeName);
	await mkdir(dirname(base), { recursive: true });
	before += (await stat(file)).size;

	const widths = WIDTHS.filter((w) => w < meta.width);
	if (!widths.length || widths.at(-1) < meta.width) widths.push(Math.min(meta.width, 2400));
	const unique = [...new Set(widths)].filter((w) => w <= 2400);

	const srcs = [];
	for (const w of unique) {
		const outPath = `${base}-${w}${ext}`;
		let img = sharp(file).rotate().resize({ width: w, withoutEnlargement: true });
		img = img.flatten({ background: '#f8f8f8' }).jpeg({ quality: 78, mozjpeg: true, progressive: true });
		await img.toFile(outPath);
		await embedOrigin(
			outPath,
			`origin: Josh De La Cruz project artwork (original ${key}, from assets/images); resized to ${w}px by scripts/optimize-images.mjs. Not AI-generated.`
		);
		after += (await stat(outPath)).size;
		srcs.push({ w, src: '/' + relative('static', outPath).split('\\').join('/') });
	}

	manifest[key] = {
		width: meta.width,
		height: meta.height,
		srcs
	};
}

await writeFile('src/lib/data/image-manifest.json', JSON.stringify(manifest, null, '\t') + '\n');
console.log(
	`${files.length} originals → ${Object.values(manifest).reduce((n, m) => n + m.srcs.length, 0)} files; ` +
		`${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB`
);
