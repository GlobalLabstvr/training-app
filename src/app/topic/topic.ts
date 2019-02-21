import { Playlist } from './Playlist';

export interface Topic {
    id: string;
    name: string;
    description: string;
    playlist: [Playlist];
}