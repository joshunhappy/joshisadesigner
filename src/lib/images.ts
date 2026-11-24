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
