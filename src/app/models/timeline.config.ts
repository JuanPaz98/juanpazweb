export interface TimelineConfig {
    mainTitle: string;
    elements : TimelineElement[];
}

export interface TimelineElement {
    title: string;
    company?: string;
    initialDate: string;
    finalDate: string;
    description: string;
}