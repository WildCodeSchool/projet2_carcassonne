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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GameStartComponent } from './game-start/game-start.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
 {
    path: 'game-start',
    component: GameStartComponent
  }
,
 
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
 
 
 ];



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PiocheComponent,
    MenuComponent,
    ModalComponent
    HomeComponent,
    GameStartComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),


  ],
  providers: [GameService, DeckService, MapService, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }


 