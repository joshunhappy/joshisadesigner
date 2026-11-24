export interface WorkItem {
	slug: string;
	title: string;
	category: string;
	year: number;
	/** Listing cover: the first `00…` file, else the first image. */
	cover: string;
	/** Every image across the project's folders. */
	images: string[];
	/** Product screens only (covers excluded). */
	screens: string[];
	/** Up to three screens for listings, spread across a merged project's folders. */
	preview: string[];
	description: string;
	/** Two or three sentences on the problem, for projects without a case study. */
	problem?: string[];
	/** True while `problem` copy is an unreviewed draft. */
	draft?: boolean;
	/** Former slugs that redirect here (merged projects). */
	aliases?: string[];
	client?: string;
	role?: string;
	timeline?: string;
	bgColor: string;
	summary?: string;
	responsibilities?: string[];
	tools?: string[];
	caseStudy?: CaseStudy;
}

/* ---------------------------------------------------------------------------
 * Case study content model
 *
 * A project with a `caseStudy` renders the long-form template.
 * Everything else falls back to the horizontal image gallery.
 * ------------------------------------------------------------------------- */

export interface CaseStudy {
	/** Short lede under the title. Falls back to WorkItem.summary. */
	lede?: string;
	/** Key/value pairs rendered in the hero. Falls back to role/timeline/tools. */
	facts?: Fact[];
	/** Opening image, rendered full width directly under the hero. */
	hero?: ImageRef;
	sections: CaseStudySection[];
}

export interface Fact {
	label: string;
	value: string;
}

export interface CaseStudySection {
	/** Anchor id, also used by the section nav and scroll-spy. */
	id: string;
	/** Short label for the section nav. */
	label: string;
	/** Full heading. Falls back to `label`. */
	title?: string;
	blocks: CaseStudyBlock[];
}

export type CaseStudyBlock =
	| ProseBlock
	| FigureBlock
	| GalleryBlock
	| CompareBlock
	| FlowBlock
	| DecisionBlock
	| MetricsBlock
	| ListBlock
	| CalloutBlock
	| QuoteBlock;

export interface ProseBlock {
	type: 'prose';
	heading?: string;
	/** One string per paragraph. */
	body: string[];
	/** Renders larger. Use for a section's opening statement. */
	lead?: boolean;
}

export interface ImageRef {
	src: string;
	alt: string;
	/** Rendered under the image. */
	caption?: string;
	/** Longer note: the "why", not the "what". */
	annotation?: string;
	/** Controls max width: mobile screens are shown narrow. */
	device?: 'desktop' | 'mobile';
	/** Source frame name in Figma, shown as a small monospace tag. */
	frame?: string;
	/** Drops the grey plate and border. Use for mockups with transparent edges. */
	plain?: boolean;
}

export interface FigureBlock extends ImageRef {
	type: 'figure';
}

export interface GalleryBlock {
	type: 'gallery';
	heading?: string;
	/** `grid` for state exhibits, `row` for a scrollable sequence. */
	layout?: 'grid' | 'row';
	columns?: 2 | 3 | 4;
	items: ImageRef[];
	caption?: string;
}

export interface CompareBlock {
	type: 'compare';
	heading?: string;
	before: ImageRef;
	after: ImageRef;
	beforeLabel?: string;
	afterLabel?: string;
	caption?: string;
}

export interface FlowStep {
	label: string;
	detail?: string;
	/** Groups steps into parallel tracks, e.g. 'Top-up' / 'Gift card'. */
	track?: string;
	/** Marks where the flow forks or rejoins. */
	branch?: boolean;
}

export interface FlowBlock {
	type: 'flow';
	heading?: string;
	steps: FlowStep[];
	caption?: string;
}

export interface DecisionBlock {
	type: 'decision';
	/** Short name for the decision. */
	title: string;
	problem: string;
	options: DecisionOption[];
	rationale: string;
	tradeoff: string;
}

export interface DecisionOption {
	label: string;
	chosen?: boolean;
	note?: string;
}

export interface MetricsBlock {
	type: 'metrics';
	heading?: string;
	items: Metric[];
	/** Shown under the grid. Use it to state how numbers were measured. */
	note?: string;
}

export interface Metric {
	value: string;
	label: string;
	note?: string;
}

export interface ListBlock {
	type: 'list';
	heading?: string;
	style?: 'bullet' | 'number';
	items: string[];
}

export interface CalloutBlock {
	type: 'callout';
	/** Sets the default eyebrow when no `title` is given. Callouts render alike. */
	tone?: 'note' | 'constraint' | 'risk';
	title?: string;
	body: string;
}

export interface QuoteBlock {
	type: 'quote';
	text: string;
	attribution?: string;
}
