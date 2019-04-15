export interface Media {
    id: number;
    date: Date;
    description: string;
    alt_text: string;
    media_type: string;
    mime_type: string;
    source_url: string;
    title: {
        rendered: string
    };
}
