import {Artist} from "../artist/artist";
export class Album {
    id: number;
    title: string;
    artist: Artist;
    genre: string;
    lengthInMinutes: number;
    releaseYear: number;
}