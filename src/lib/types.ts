export interface WorkItem {
	slug: string;
	title: string;
	category: string;
	year: number;
	cover: string;
	images: string[];
	description: string;
	tags: string[];
	client?: string;
	role?: string;
	timeline?: string;
	bgColor: string;
	summary?: string;
	responsibilities?: string[];
	tools?: string[];
}

export interface NavLink {
	label: string;
	href: string;
}
