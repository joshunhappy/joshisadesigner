import { gsap } from './gsap';

export function leave(el: Element): Promise<void> {
	return new Promise((resolve) => {
		gsap.to(el, {
			opacity: 0,
			y: -12,
			duration: 0.3,
			ease: 'power2.in',
			onComplete: resolve
		});
	});
}

export function enter(el: Element): Promise<void> {
	return new Promise((resolve) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: 12 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power2.out',
				onComplete: resolve
			}
		);
	});
}
