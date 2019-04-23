import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { DeckService } from './deck.service';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})

export class GameStateService {

  // public STATE1: any
  // public STATE2: any
  // public STATE3: any

  // public State = [this.STATE1, this.STATE2, this.STATE3]

  // constructor(private state: any,
  //   private deck: DeckService,
  //   private game: GameService,
  //   private map: MapService) {
  //   this.state = this.STATE1
  // }

  // public event1() {
  //   switch (this.state) {
  //     case this.STATE1:
  //       this.game.pickedTile()
  //       this.state = this.STATE2;
  //       break;
  //     default:
  //       //Nothing
  //       break;
  //   }
  // }

  // public event2() {
  //   switch (this.state) {
  //     case this.STATE2:
  //       this.game.onTileClick(i,j)
  //       this.state = this.STATE3;
  //       break;
  //     default:
  //       //Nothing
  //       break;
  //   }
  // }

  //   public event3() {
  //     switch(this.state) {
  //     case STATE1:
  //       //Action
  //       this.state = State.STATE1;
  //       break;
  //     case STATE3:
  //       //Action
  //       this.state = State.STATE1;
  //       break;
  //     default:
  //       //Nothing
  //       break;
  //     }
  //   }
  // }

}
