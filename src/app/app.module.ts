import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameService } from './game.service';
import { DeckService } from './deck.service';
import { PiocheComponent } from './pioche/pioche.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PiocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameService, DeckService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
