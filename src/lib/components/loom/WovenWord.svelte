<script lang="ts">
	/**
	 * Sets words as brocade: each lit cell of a 5x7 grid is a weft float, and
	 * consecutive cells in a row merge into one long float, the way supplementary
	 * weft actually runs across the warp. The warp shows through the gaps.
	 *
	 * Decorative only: the real text is rendered separately for assistive tech.
	 */
	import { onMount } from 'svelte';

	let {
		lines,
		colors = ['var(--color-on-indigo)'],
		beat = true,
		class: className = ''
	}: { lines: string[]; colors?: string[]; beat?: boolean; class?: string } = $props();

	const GLYPHS: Record<string, string[]> = {
		A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
		C: ['.####', '#....', '#....', '#....', '#....', '#....', '.####'],
		D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
		E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
		H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
		J: ['..###', '...#.', '...#.', '...#.', '...#.', '#..#.', '.##..'],
		K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
		L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
		O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
		R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'],
		S: ['.####', '#....', '#....', '.###.', '....#', '....#', '####.'],
		U: ['#...#', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
		W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '##.##', '#...#'],
		Z: ['#####', '....#', '...#.', '..#..', '.#...', '#....', '#####'],
		' ': ['..', '..', '..', '..', '..', '..', '..']
	};

	const ROWS = 7;
	const LINE_GAP = 2;
	const FLOAT_H = 0.9;

	type Float = { x: number; w: number };
	type Row = { y: number; floats: Float[]; index: number };

	function layout(text: string, yOffset: number, rowStart: number): { rows: Row[]; width: number } {
		const glyphs = [...text.toUpperCase()].map((ch) => GLYPHS[ch] ?? GLYPHS[' ']);
		const rows: Row[] = [];
		let width = 0;
		for (let r = 0; r < ROWS; r++) {
			const cells: boolean[] = [];
			glyphs.forEach((g, gi) => {
				for (const c of g[r]) cells.push(c === '#');
				if (gi < glyphs.length - 1) cells.push(false);
			});
			width = Math.max(width, cells.length);
			const floats: Float[] = [];
			let start = -1;
			cells.forEach((on, i) => {
				if (on && start < 0) start = i;
				if ((!on || i === cells.length - 1) && start >= 0) {
					const end = on ? i + 1 : i;
					floats.push({ x: start, w: end - start });
					start = -1;
				}
			});
			rows.push({ y: yOffset + r, floats, index: rowStart + r });
		}
		return { rows, width };
	}

	const laid = $derived.by(() => {
		const all: Row[] = [];
		let width = 0;
		lines.forEach((line, li) => {
			const { rows, width: w } = layout(line, li * (ROWS + LINE_GAP), li * ROWS);
			all.push(...rows);
			width = Math.max(width, w);
		});
		return { rows: all, width, height: lines.length * ROWS + (lines.length - 1) * LINE_GAP };
	});

	const uid = $props.id();

	let loose = $state(false);

	onMount(() => {
		if (!beat || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		loose = true;
		// Two frames so the loose state paints before the beat packs it.
		requestAnimationFrame(() => requestAnimationFrame(() => (loose = false)));
	});
</script>

<svg
	viewBox="0 -0.5 {laid.width} {laid.height + 0.5}"
	class="block w-full h-auto overflow-visible {className}"
	class:loose
	aria-hidden="true"
	focusable="false"
	preserveAspectRatio="xMinYMin meet"
>
	{#each laid.rows as row (row.index)}
		<g class="pick" style:--i={row.index} fill={colors[row.index % colors.length]}>
			{#each row.floats as f (f.x)}
				<rect
					x={f.x + 0.02}
					y={row.y + (1 - FLOAT_H) / 2}
					width={f.w - 0.04}
					height={FLOAT_H}
					rx="0.06"
				/>
			{/each}
		</g>
	{/each}
	<!-- Warp over weft: every other thread passes over the float. -->
	<rect
		x="0"
		y="-0.5"
		width={laid.width}
		height={laid.height + 0.5}
		fill="url(#warp-over-{uid})"
	/>
	<defs>
		<pattern id="warp-over-{uid}" width="1" height="2" patternUnits="userSpaceOnUse">
			<rect x="0.46" y="0" width="0.08" height="1" fill="var(--color-indigo-900)" opacity="0.9" />
		</pattern>
	</defs>
</svg>

<style>
	.pick {
		transform: translateY(0);
	}
	.loose .pick {
		transform: translateY(calc((var(--i) - 7) * 0.45px));
		opacity: 0.55;
	}
	@media (prefers-reduced-motion: no-preference) {
		.pick {
			transition:
				transform 1.1s var(--ease-beat),
				opacity 0.6s ease-out;
			transition-delay: calc(var(--i) * 18ms);
		}
	}
</style>
