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

  addPlayers() {
    //ajouter un joueur pour qu ele tableau player ne soit pas undfined
  }

  pickedTile() {
    if (this.currentTile != undefined) { return }
    else {
      this.currentTile = this.deck.pickTile()
      if (this.totalTile === 0) { return }
      else {
        this.totalTile -= 1
        this.currentState = this.STATE_CLICK_TILE
      } 
    } 

    // console.log("taille du tableau après pioche :")
    // console.log(tilesDeck.length)
  }


  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    return this.currentTile.rotation
  }


  onTileClick(i, j) {

    if (this.map.cases[i][j] != null) {
      
     }
    else {
      this.map.cases[i][j] = this.currentTile
      this.currentState = this.STATE_ASK_THIEF
    }
  }

  //game State machine

  players: number = 1;
  nbPlayer: number = 5;

  nextPlayer() {
    this.players += 1
    if (this.players >= this.nbPlayer) {
      this.players = 1
    }
    this.currentState = this.STATE_PICK_TILE
    return this.players
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE


  nextState() {
    this.currentState += 1
    return this.currentState
  }



}

