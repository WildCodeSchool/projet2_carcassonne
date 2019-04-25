import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck, Tuile } from './tuilesData';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined
  totalTile: number = tilesDeck.length
  currentRotation = 0
  currentTileIndex = []


  constructor(private deck: DeckService, private map: MapService) { }

  pickedTile() {
    // if (this.currentTile != undefined || this.totalTile === 0) { return }

    this.currentTile = this.deck.pickTile()
    // console.log(`rotation : ${this.currentTile.rotation}`)
    // console.log(`top : ${this.currentTile.top}`)
    // console.log(`right : ${this.currentTile.right}`)
    // console.log(`bottom : ${this.currentTile.bottom}`)
    // console.log(`left : ${this.currentTile.left}`)
    // console.log(`---------------------------------`)
    // console.log("taille du tableau après pioche :")
    // console.log(tilesDeck.length)

    if (this.currentTile == undefined) {
      return;
    }

    this.totalTile -= 1
    this.currentState = this.STATE_CLICK_TILE
    console.log('Changement d etat vers la pose d une tuile')
  }


  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    this.currentRotation = this.currentTile.rotation
    return this.currentRotation
  }

  onTileClick(i, j) {
    let iPos = i
    let jPos = j
    this.currentTile.iPos = iPos
    this.currentTile.jPos = jPos
    // if (this.map.cases[i][j] != null) {return;}
    this.map.cases[i][j] = this.currentTile

    let sideTopDynamic = Tuile.prototype.getSideKeys('top', this.currentRotation, this.currentTile)
    let sideRightDynamic = Tuile.prototype.getSideKeys('right', this.currentRotation, this.currentTile)
    let sideBottomDynamic = Tuile.prototype.getSideKeys('bottom', this.currentRotation, this.currentTile)
    let sideLeftDynamic = Tuile.prototype.getSideKeys('left', this.currentRotation, this.currentTile)

    this.currentTile.top = sideTopDynamic
    this.currentTile.right = sideRightDynamic
    this.currentTile.bottom = sideBottomDynamic
    this.currentTile.left = sideLeftDynamic
    console.log(`top : ${sideTopDynamic}`)
    console.log(`right : ${sideRightDynamic}`)
    console.log(`bottom : ${sideBottomDynamic}`)
    console.log(`left : ${sideLeftDynamic}`)
    console.log(this.currentTile)

    let tileDectection = this.map.cases[iPos - 1][jPos] || this.map.cases[iPos][jPos + 1] || this.map.cases[iPos + 1][jPos] || this.map.cases[iPos][jPos - 1]
    if (!tileDectection) {
      console.log("aucune tuile autour")
    }

    if (this.map.cases[iPos - 1][jPos] === undefined) {
      return
    } else if (this.map.cases[iPos - 1][jPos].bottom === sideTopDynamic) {
      console.log(`tuile posée - bord haut = ${sideTopDynamic}`)
      console.log(`tuile au dessus - bord bas = ${this.map.cases[iPos - 1][jPos].bottom}`)
      console.log("les bords comparés sont égaux")
    }

    if (this.map.cases[iPos + 1][jPos] === undefined) {
      return
    } else if (this.map.cases[iPos + 1][jPos].top === sideBottomDynamic) {
      console.log(`tuile posé - bord bas = ${sideBottomDynamic}`)
      console.log(`tuile en dessous - bord haut = ${this.map.cases[iPos + 1][jPos].top}`)
      console.log("les bords comparés sont égaux")
    }

    if (this.map.cases[iPos][jPos + 1] === undefined) {
      return
    } else if (this.map.cases[iPos][jPos + 1].left === sideRightDynamic) {
      console.log(`tuile posé - bord droit = ${sideRightDynamic}`)
      console.log(`tuile à droite - bord gauche = ${this.map.cases[iPos][jPos + 1].left}`)
      console.log("les bords comparés sont égaux")
    }

    if (this.map.cases[iPos][jPos - 1] === undefined) {
      return
    } else if (this.map.cases[iPos][jPos - 1].right === sideLeftDynamic) {
      console.log(`tuile posé - bord gauche = ${sideLeftDynamic}`)
      console.log(`tuile à gauche - bord droit = ${this.map.cases[iPos][jPos - 1].right}`)
      console.log("les bords comparés sont égaux")
    } 
    
    else {
      console.log("aucun bord ne correspond")
    }
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


