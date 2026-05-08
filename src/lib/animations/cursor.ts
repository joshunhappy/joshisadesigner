import { gsap } from './gsap';

export function initCursor(ring: HTMLElement, dot: HTMLElement) {
	const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
	const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });
	const dotX = gsap.quickTo(dot, 'x', { duration: 0.08 });
	const dotY = gsap.quickTo(dot, 'y', { duration: 0.08 });

	let hovering = false;

	function onMove(e: MouseEvent) {
		ringX(e.clientX);
		ringY(e.clientY);
		dotX(e.clientX);
		dotY(e.clientY);
	}

	function onOver(e: MouseEvent) {
		if ((e.target as HTMLElement).closest('a, button') && !hovering) {
			hovering = true;
			gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
		}
	}

	function onOut(e: MouseEvent) {
		if ((e.target as HTMLElement).closest('a, button') && hovering) {
			hovering = false;
			gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
		}
	}

	window.addEventListener('mousemove', onMove);
	document.addEventListener('mouseover', onOver);
	document.addEventListener('mouseout', onOut);

	return () => {
		window.removeEventListener('mousemove', onMove);
		document.removeEventListener('mouseover', onOver);
		document.removeEventListener('mouseout', onOut);
	};
}
