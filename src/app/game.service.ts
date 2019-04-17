import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined
  totalTile: number = tilesDeck.length

  constructor(private deck: DeckService, private map: MapService) { }

  pickedTile() {
    this.currentTile = this.deck.pickTile()
    if (this.totalTile === 0) { return }
      else { 
        this.totalTile -= 1 
      }
      // console.log("taille du tableau après pioche :")
       //console.log(tilesDeck.length)
  }

    
  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    return this.currentTile.rotation
  }
  //-----------------------------fin partie mehdi rotation 90° carte--------------------------

  onTileClick(i, j) {
    this.map.cases[i][j] = this.currentTile
  }

}
