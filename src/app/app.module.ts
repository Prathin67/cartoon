import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MediaComponent } from './media/media.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FavComponent } from './fav/fav.component';
import { YoutbeComponent } from './youtbe/youtbe.component';
import { FulldtaComponent } from './fulldta/fulldta.component';
import { DatfulComponent } from './datful/datful.component';
import {MatButtonModule} from '@angular/material/button';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CrtoonworldComponent } from './crtoonworld/crtoonworld.component';
import { MatInputModule  }  from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MediaComponent,
    FavComponent,
    FulldtaComponent,
    DatfulComponent,
    YoutbeComponent,
    CrtoonworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    YouTubePlayerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
