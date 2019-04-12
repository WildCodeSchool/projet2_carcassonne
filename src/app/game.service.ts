import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTileRotation = 0
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
    this.currentTileRotation = (this.currentTileRotation + 90) % 360;
    return this.currentTileRotation
  }
  //-----------------------------fin partie mehdi rotation 90° carte--------------------------

  onTileClick(i, j) {
    this.map.cases[i][j] = this.currentTile
  }

}
