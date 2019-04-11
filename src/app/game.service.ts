import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined
  totalTile:number = tilesDeck.length

  constructor(private deck: DeckService) { }

  pickedTile() {
    this.currentTile = this.deck.pickTile()
    if (this.totalTile === 0) { return }
      else { 
        this.totalTile -= 1 
      }
       console.log("taille du tableau après pioche :")
       console.log(tilesDeck.length)
  }
}
