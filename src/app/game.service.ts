import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTileRotation = 0
  currentTile = undefined
  totalTile: number = tilesDeck.length

  constructor(private deck: DeckService) { }

  pickedTile() {
    this.currentTile = this.deck.pickTile()
    if (this.totalTile === 0) { return }

      else { 
        this.totalTile -= 1 
      }
      // console.log("taille du tableau après pioche :")
       //console.log(tilesDeck.length)
  }

    
  //-----------------------------debut partie mehdi rotation 90° carte-------------------------
  rotationTile() {

    this.currentTileRotation = (this.currentTileRotation + 90) % 360;
    return this.currentTileRotation


  }
  //-----------------------------fin partie mehdi rotation 90° carte--------------------------


}
