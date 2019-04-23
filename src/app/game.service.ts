import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  players = [];
  nbPlayer : number = this.players.length;
  currentTile = undefined
  totalTile: number = tilesDeck.length

  constructor(private deck: DeckService, private map: MapService) { }
addPlayers (){
  //ajouter un joueur pour qu ele tableau player ne soit pas undfined

}
  pickedTile() {
    this.currentTile = this.deck.pickTile()
    if (this.totalTile === 0) { return }
      else { 
        this.totalTile -= 1 
      }
      // console.log("taille du tableau après pioche :")
      // console.log(tilesDeck.length)
  }

    
  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    return this.currentTile.rotation
  }


  onTileClick(i, j) {
    
    if (this.map.cases[i][j]!=null){}
    else{this.map.cases[i][j] = this.currentTile}
  }

  //game State machine

  nextTurn (){
    this.players +=1
    if (this.players>= this.nbPlayer){
      this.players = 1
    }
   
  }
 
}

