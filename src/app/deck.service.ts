import { Injectable } from '@angular/core';
import { tilesDeck } from './tuilesData';

@Injectable({
  providedIn: 'root'
})
export class DeckService {


  constructor() { }

  pickTile() {
    let numTile = Math.floor( Math.random() * tilesDeck.length )
    let keepNumTile = tilesDeck[numTile]
    const removedTiles = tilesDeck.splice(numTile, 1)
     console.log("tuile retiré du jeu :")
    console.log(removedTiles)
    console.log("tableau après pioche :")
   console.log(tilesDeck)
    return keepNumTile
  }
}
