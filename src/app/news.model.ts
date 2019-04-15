export interface News {
    id: number;
    date: Date;
    featured_media: number;
    featured_media_source_url: any;
    title: {
        rendered: string
    };
    excerpt: {
        rendered: string
    };
}
