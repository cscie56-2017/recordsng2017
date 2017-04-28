import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artist/artists.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    ArtistComponent,
    ArtistsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
