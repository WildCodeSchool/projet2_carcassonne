import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck } from './tuilesData';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined
  totalTile: number = tilesDeck.length


  constructor(private deck: DeckService, private map: MapService) { }


  pickedTile() {
    if (this.currentTile != undefined || this.totalTile === 0) { return }

    this.currentTile = this.deck.pickTile()
    if (this.currentTile == undefined){
      return;
    }
    this.totalTile -= 1
    this.currentState = this.STATE_CLICK_TILE
    console.log('Changement d etat vers la pose d une tuile')
  }


  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    return this.currentTile.rotation
  }


  onTileClick(i, j) {

    if (this.map.cases[i][j] != null) {return;}
    this.map.cases[i][j] = this.currentTile
    this.currentState = this.STATE_ASK_THIEF
    console.log('Changement d etat vers la demande poser voleur')

  }
  // poser un voleur
//   poseThief(){
//     switch(playerArray){
// case (this.currentTile.bottom):

  //   }
  // }

  //game State machine

  players: number = 1;
  nbPlayer: number = 5;

  nextPlayer() {
    this.players += 1
    if (this.players >= this.nbPlayer) {
      this.players = 1
    }
    this.currentState = this.STATE_PICK_TILE
    console.log('Changement d etat vers la pioche d une tuile')
    return this.players
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE






}



