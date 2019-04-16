import { Observable } from 'rxjs';

export interface News {
    id: number;
    date: Date;
    featured_media: number;
    featured_media_source_url$: Observable<string>;
    title: {
        rendered: string
    };
    excerpt: {
        rendered: string
    };
}
