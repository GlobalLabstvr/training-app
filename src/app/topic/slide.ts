import { Discussion } from './discussion';

export interface Slide {
    id: string;
    name: string;
    description: string;
    master: Discussion;
    student: Discussion;
} 