import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameService } from './game.service';
import { DeckService } from './deck.service';
import { PiocheComponent } from './pioche/pioche.component';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PiocheComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameService, DeckService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
