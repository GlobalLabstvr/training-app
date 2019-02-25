import { Playlist } from './Playlist';
import { Chapter } from './Chapter';

export interface Topic {
    id: string;
    name: string;
    description: string;
    playlist: Playlist[];
    chapters: Chapter[];
}