
import {Album} from "../album/album";

export class Artist {
    id: number;
    firstName: string;
    lastName: string;
    countryOfOrigin: string;
    albums: Album[] = [];
}