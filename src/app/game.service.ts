import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined

  constructor(private service: DeckService) { }

  pickedTile() {
    
    this.currentTile = this.service.pickTile()
  }
}
