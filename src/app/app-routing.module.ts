import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { CrtoonworldComponent } from './crtoonworld/crtoonworld.component';
import { FavComponent } from './fav/fav.component';
import { FulldtaComponent } from './fulldta/fulldta.component';
import { HeaderComponent } from './header/header.component';
import { MediaComponent } from './media/media.component';
import { YoutbeComponent } from './youtbe/youtbe.component';

const routes: Routes = [
  {path:'headrer',component:HeaderComponent},
  {path:'media',component:MediaComponent},
  // {path:'fav',component:FavComponent},
  {path:'fulldta/:id',component:FulldtaComponent},
  {path:'youtbe',component:YoutbeComponent},
  {path:'',component:CrtoonworldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
