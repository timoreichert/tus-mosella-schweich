import { Observable } from 'rxjs';

export interface News {
    id: number;
    date: Date;
    featured_media: number;
    featured_media_source_url: string;
    title: {
        rendered: string
    };
    content: {
        rendered: string
    };
    excerpt: {
        rendered: string
    };
}
