import { Playlist } from './playlist';
import { Slide } from './slide';
import { Program } from './model/program';
import { Site } from './model/site';

export interface Topic {
    id: string;
    name: string;
    description: string;
    playlist: Playlist[];
    slides: Slide[];
    programs: Program[];
    sites: Site[];
}