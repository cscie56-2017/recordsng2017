/**
 * Created by extension on 4/27/17.
 */
import { Component, OnInit } from '@angular/core';
import {ArtistService} from "./artist.service";
import {Artist} from "./artist";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css'],
    providers: [ArtistService]
})
export class ArtistsComponent implements OnInit {

    constructor(private artistService: ArtistService,
                private route: ActivatedRoute) { }

    newArtist: Artist = new Artist();
    selectedArtist: Artist;
    artists: Artist[] = [];

    ngOnInit() {
       this.artistService.getArtists()
           .subscribe(
               artists => this.artists = artists,
               error => console.log('Error: could not load books -> '+ error)
           );
    }


}

