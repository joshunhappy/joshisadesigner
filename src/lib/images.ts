import manifest from '$lib/data/image-manifest.json';

export type ImageVariant = { w: number; src: string };
export type ImageEntry = { width: number; height: number; srcs: ImageVariant[] };

const images = manifest as Record<string, ImageEntry>;

/** Every original image path known to the pipeline (/images/...). */
export const imagePaths = Object.keys(images);

/** Look up the responsive variants for an original /images/... path. */
export function image(path: string): ImageEntry | undefined {
	return images[path];
}

/** srcset string, fallback src (largest variant), and intrinsic size. */
export function responsive(path: string) {
	const entry = images[path];
	if (!entry) return { src: path, srcset: undefined, width: undefined, height: undefined };
	const largest = entry.srcs[entry.srcs.length - 1];
	return {
		src: largest.src,
		srcset: entry.srcs.map((v) => `${v.src} ${v.w}w`).join(', '),
		width: entry.width,
		height: entry.height
	};
}

export type DeviceKind = 'mobile' | 'desktop';

/** Mobile screens are captured at phone widths (375–430px); everything wider is desktop. */
export function deviceOf(path: string): DeviceKind {
	const entry = images[path];
	return entry && entry.width <= 600 ? 'mobile' : 'desktop';
}

/**
 * Human name for a screen from its file name: "0400-user-info.jpg" → "User info".
 * Files named only by number ("03.jpg") get "Screen <n>" from their position.
 */
export function screenName(path: string, index?: number): string {
	const file = path.split('/').pop() ?? path;
	const words = file
		.replace(/\.[a-z]+$/i, '')
		.replace(/^[0-9]+[.\-_ ]*/, '')
		.replace(/\bmobile\b/i, '')
		.replace(/[.\-_]+/g, ' ')
		.trim();
	if (words) return words[0].toUpperCase() + words.slice(1);
	return index === undefined ? 'Screen' : `Screen ${index + 1}`;
}
