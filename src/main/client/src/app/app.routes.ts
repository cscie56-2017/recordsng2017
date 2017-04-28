import {Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ArtistComponent} from "./artist/artist.component";
import {ArtistsComponent} from "./artist/artists.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'artists', component: ArtistsComponent}

];

