/**
 * Beat-in: an element below the fold starts loose and packs tight when it
 * enters view. Anything already visible, or any visitor who prefers reduced
 * motion, keeps the default packed state, so content never depends on JS.
 */
export function beat(node: HTMLElement) {
	if (typeof window === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight) return;

	node.dataset.loose = '';
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					// data-beating carries the slow release timing only while it runs,
					// so hover feedback keeps its own fast timing afterwards.
					node.dataset.beating = '';
					delete node.dataset.loose;
					window.setTimeout(() => delete node.dataset.beating, 1000);
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -15% 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
