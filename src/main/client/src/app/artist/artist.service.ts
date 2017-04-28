
import {Injectable} from "@angular/core";
import {Artist} from "./artist";
import {Headers, Http} from "@angular/http";

@Injectable()
export class ArtistService {

    baseUrl: String = 'http://localhost:8080/artist';

    constructor(private http: Http) {}

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return headers;
    }

    getArtists() {
        return this.http.get(`${this.baseUrl}`)
            .map(response => <Artist[]>response.json());
    }

    getArtistDetail(id: number){
        return this.http.get(`${this.baseUrl}/${id}`)
            .map(response => <Artist>response.json());
    }

    addArtist(artist: Artist){
        return this.http.post(`${this.baseUrl}`, JSON.stringify(artist), {headers: this.getHeaders()} )
            .map(response => <Artist>response.json());
    }

    updateArtists(artist: Artist) {
        return this.http.put(`${this.baseUrl}/${artist.id}`, JSON.stringify(artist), {headers: this.getHeaders()} )
            .map(response => <Artist>response.json());
    }

    deleteArtist(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

}