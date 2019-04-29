import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck, Tuile } from './tuilesData';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentTile = undefined
  totalTile: number = tilesDeck.length
  currentRotation = 0
  currentTileIndex = []
  checkSideState: boolean = undefined
  playersLeft: number;

  constructor(private deck: DeckService, private map: MapService) { }

  pickedTile() {
    if (this.totalTile <= 0) {
      this.currentTile = undefined
      alert('End of the game')
      console.log("Changement d'état vers le comptage des points")
      return
    }

    if (this.currentTile === undefined) {
      this.currentRotation = 0
      this.currentTile = this.deck.pickTile()
      console.log(`rotation : ${this.currentTile.rotation}`)
      console.log(`top : ${this.currentTile.top}`)
      console.log(`right : ${this.currentTile.right}`)
      console.log(`bottom : ${this.currentTile.bottom}`)
      console.log(`left : ${this.currentTile.left}`)
      console.log(`---------------------------------`)
      // console.log("taille du tableau après pioche :")
      // console.log(tilesDeck.length)
      this.totalTile -= 1
      this.currentState = this.STATE_CLICK_TILE
      console.log("Changement d'état vers la pose de la tuile piochée")
      return
    }

    if (this.currentTile !== undefined) {
      this.currentTile = undefined
      return
    }
  }


  rotationTile() {
    this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
    this.currentRotation = this.currentTile.rotation
    return this.currentRotation
  }

  checkSide(i, j) {
    let iPos = i
    let jPos = j
    this.currentTile.iPos = iPos
    this.currentTile.jPos = jPos

    let sideTopDynamic = Tuile.prototype.getSideKeys('top', this.currentRotation, this.currentTile)
    let sideRightDynamic = Tuile.prototype.getSideKeys('right', this.currentRotation, this.currentTile)
    let sideBottomDynamic = Tuile.prototype.getSideKeys('bottom', this.currentRotation, this.currentTile)
    let sideLeftDynamic = Tuile.prototype.getSideKeys('left', this.currentRotation, this.currentTile)

    this.currentTile.top = sideTopDynamic
    this.currentTile.right = sideRightDynamic
    this.currentTile.bottom = sideBottomDynamic
    this.currentTile.left = sideLeftDynamic
    console.log(`new top : ${sideTopDynamic}`)
    console.log(`new right : ${sideRightDynamic}`)
    console.log(`new bottom : ${sideBottomDynamic}`)
    console.log(`new left : ${sideLeftDynamic}`)
    console.log(this.currentTile)

    let tileDectection = this.map.cases[iPos - 1][jPos] || this.map.cases[iPos][jPos + 1] || this.map.cases[iPos + 1][jPos] || this.map.cases[iPos][jPos - 1]
    if (!tileDectection) {
      console.error("Aucune tuile autour")
      alert("Impossible de placer la tuile ici")
      return this.checkSideState = false
    }

    if (this.map.cases[iPos - 1][jPos] !== undefined) {
      if (this.map.cases[iPos - 1][jPos].bottom === sideTopDynamic) {
        console.log(`Bords validés : tuile posée, son bord haut "${sideTopDynamic}" et tuile au dessus, son bord bas "${this.map.cases[iPos - 1][jPos].bottom}"`)
      } else {
        console.error(`Erreur bords : tuile posée, son bord haut "${sideTopDynamic}" et tuile au dessus, son bord bas "${this.map.cases[iPos - 1][jPos].bottom}"`)
        alert(`Error : sides not matching (${sideTopDynamic} and ${this.map.cases[iPos - 1][jPos].bottom})`)
        return this.checkSideState = false
      }
    }

    if (this.map.cases[iPos + 1][jPos] !== undefined) {
      if (this.map.cases[iPos + 1][jPos].top === sideBottomDynamic) {
        console.log(`Bords validés : tuile posée, son bord bas "${sideBottomDynamic}" et tuile en dessous, son bord haut "${this.map.cases[iPos + 1][jPos].top}"`)
      } else {
        console.error(`Erreur bords : tuile posée, son bord bas "${sideBottomDynamic}" et tuile en dessous, son bord haut "${this.map.cases[iPos + 1][jPos].top}"`)
        alert(`Error : sides not matching (${sideBottomDynamic} and ${this.map.cases[iPos + 1][jPos].top})`)
        return this.checkSideState = false
      }
    }

    if (this.map.cases[iPos][jPos + 1] !== undefined) {
      if (this.map.cases[iPos][jPos + 1].left === sideRightDynamic) {
        console.log(`Bords validés : tuile posée, son bord droit "${sideRightDynamic}" et tuile à droite, son bord gauche "${this.map.cases[iPos][jPos + 1].left}"`)
      } else {
        console.error(`Erreur bords : tuile posée, son bord droit "${sideRightDynamic}" et tuile à droite, son bord gauche "${this.map.cases[iPos][jPos + 1].left}"`)
        alert(`Error : sides not matching (${sideRightDynamic} and ${this.map.cases[iPos][jPos + 1].left})`)
        return this.checkSideState = false
      }
    }

    if (this.map.cases[iPos][jPos - 1] !== undefined) {
      if (this.map.cases[iPos][jPos - 1].right === sideLeftDynamic) {
        console.log(`Bords validés : tuile posée, son bord gauche "${sideLeftDynamic}" et tuile à gauche, son bord droit "${this.map.cases[iPos][jPos - 1].right}"`)
      } else {
        console.error(`Erreur bords : tuile posée, son bord gauche "${sideLeftDynamic}" et tuile à gauche, son bord droit "${this.map.cases[iPos][jPos - 1].right}"`)
        alert(`Error : sides not matching (${sideLeftDynamic} and ${this.map.cases[iPos][jPos - 1].right})`)
        return this.checkSideState = false
      }
    }
    console.log("Tuile posable")
    return this.checkSideState = true
  }


  onTileClick(i, j) {
    // ligne pour ne poser qu'une seule fois
    if (this.map.cases[i][j] != null) { return; }
    else {
      this.checkSide(i, j)
      if (this.checkSideState) {
        this.map.cases[i][j] = this.currentTile
        this.currentState = this.STATE_ASK_THIEF
        console.log("Changement d'état vers la demande de poser un voleur")
      } else {
        undefined
      }

    } return this.currentTile
  }


  name: string;
  family: string
  playerReal: any = {};
  playersArray = [];


  playersGame() {
    console.log()
    switch (this.family) {
      case ('arryn'):
        this.playerReal = { name: this.name, image: "../assets/family/arryn.png", token: 7, score: 0 }
        this.playersArray.push(this.playerReal)
        console.log(this.playersArray)
        break
      case ('greyjoy'):
        this.playerReal = { name: this.name, image: "../assets/family/greyjoy.png", token: 7, score: 0 }
        this.playersArray.push(this.playerReal)
        console.log(this.playersArray)
        break
      case ('lannister'):
        this.playerReal = { name: this.name, image: "../assets/family/lannister.png", token: 7, score: 0 }
        this.playersArray.push(this.playerReal)
        console.log(this.playersArray)
        break
      case ('stark'):
        this.playerReal = { name: this.name, image: "../assets/family/stark.png", token: 7, score: 0 }
        this.playersArray.push(this.playerReal)
        console.log(this.playersArray)
        break
      case ('targa'):
        this.playerReal = { name: this.name, image: "../assets/family/targa.png", token: 7, score: 0 }
        this.playersArray.push(this.playerReal)
        console.log(this.playersArray)
        break
      default:
        console.log('erreur')
    }
    this.playersLeft = 5 -(this.playersArray.length)
  }

  position: string

  voleurPosition() {
    switch (this.position) {
      case ('Haut'):
        return this.currentTile.position = "Haut"
      case ('Bas'):
        return this.currentTile.position = "Bas"
      case ('Droite'):
        return this.currentTile.position = "Droite"
      case ('Gauche'):
        return this.currentTile.position = "Gauche"
      case ('Centre'):
        return this.currentTile.position = "Centre"
      case ('Aucun'):
        return this.currentTile.position = "Aucun"
    }
  }

  //game State machine

  nbPlayer: number = 5;
  players: number = 1;

  nextPlayer() {
    this.players += 1
    if (this.players >= this.nbPlayer) {
      this.players = 1
    }
    this.currentState = this.STATE_PICK_TILE
    console.log("Changement d'état vers la pioche d'une tuile")
    return this.players
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE

}