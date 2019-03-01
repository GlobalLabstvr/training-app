import { Playlist } from './playlist';
import { Slide } from './slide';

export interface Topic {
    id: string;
    name: string;
    description: string;
    playlist: Playlist[];
    slides: Slide[];
}