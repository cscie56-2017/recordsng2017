import { Component, OnInit } from '@angular/core';
import {ArtistService} from "./artist.service";
import {Artist} from "./artist";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {

  constructor(private artistService: ArtistService,
              private route: ActivatedRoute) { }

  id: number;
  artist: Artist = new Artist();
  private sub: any;
  view: boolean;

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
          if (params['id']) {
              this.id = +params['id'];
              this.view = params['view'];
              this.artistService.getArtistDetail(this.id).subscribe(
                  artist => {
                    this.artist = artist;
                    this.view = true;
                  },
                  error => console.log('Error getting Artist with id = '+ this.id + ': '+ error)

              );
          } else {
              this.artist = new Artist();
          }
        }
    );
  }

}
