import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck, Tuile } from './tuilesData';
import { MapService } from './map.service';


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
    this.currentTile = this.deck.pickTile()
    if (this.totalTile === 0) { return }
    else {
      this.totalTile -= 1
    }
    // console.log(`rotation : ${this.currentTile.rotation}`)
    // console.log(`top : ${this.currentTile.top}`)
    // console.log(`right : ${this.currentTile.right}`)
    // console.log(`bottom : ${this.currentTile.bottom}`)
    // console.log(`left : ${this.currentTile.left}`)
    // console.log(`---------------------------------`)
    // console.log("taille du tableau après pioche :")
    // console.log(tilesDeck.length)
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
    this.map.cases[i][j] = this.currentTile

    let sideTopDynamic = Tuile.prototype.getSideKeys('top', this.currentRotation, this.currentTile)
    let sideRightDynamic = Tuile.prototype.getSideKeys('right', this.currentRotation, this.currentTile)
    let sideBottomDynamic = Tuile.prototype.getSideKeys('bottom', this.currentRotation, this.currentTile)
    let sideLeftDynamic = Tuile.prototype.getSideKeys('left', this.currentRotation, this.currentTile)
    let tileDectection = this.map.cases[iPos - 1][jPos] || this.map.cases[iPos][jPos + 1] || this.map.cases[iPos + 1][jPos] || this.map.cases[iPos][jPos - 1]

    if (!tileDectection) {
      console.log("aucune tuile autour")
    }
    
    if (this.map.cases[iPos+1][jPos].bottom === sideTopDynamic) {
      console.log("true")
    } 

    if (this.map.cases[iPos-1][jPos].top === sideBottomDynamic) {
      console.log("true")
    } 

    if (this.map.cases[iPos][jPos+1].right === sideLeftDynamic) {
      console.log("true")
    } 

    if (this.map.cases[iPos][jPos-1].left === sideRightDynamic) {
      console.log("true")
    } 
  }


  // onTileClick(i, j) {
  //   this.map.cases[i][j] = this.currentTile  
  //   let iPos = i
  //   let jPos = j
  //   console.log(iPos)
  //   console.log(jPos)
  //   // console.log(`top start : ${this.map.cases[72][72].top}`)
  //   // console.log(`right start : ${this.map.cases[72][72].right}`)
  //   // console.log(`bottom start : ${this.map.cases[72][72].bottom}`)
  //   // console.log(`left start : ${this.map.cases[72][72].left}`)
  //   let sideTopDynamic = Tuile.prototype.getSideKeys('top', this.currentRotation, this.currentTile)
  //   let sideRightDynamic = Tuile.prototype.getSideKeys('right', this.currentRotation, this.currentTile)
  //   let sideBottomDynamic = Tuile.prototype.getSideKeys('bottom', this.currentRotation, this.currentTile)
  //   let sideLeftDynamic = Tuile.prototype.getSideKeys('left', this.currentRotation, this.currentTile)

  //   if(this.map.cases[72][72].top === sideBottomDynamic) {
  //       console.log(`top de la startTile : ${this.map.cases[72][72].top} VS bottom de la currentTile : ${sideBottomDynamic}`);
  //       console.log(true);
  //       return
  //      }
  //       else if (this.map.cases[72][72].right === sideLeftDynamic) {
  //        console.log(`top de la startTile : ${this.map.cases[72][72].right} VS bottom de la currentTile : ${sideLeftDynamic}`);
  //        console.log(true)
  //         return
  //       }
  //       else if (this.map.cases[72][72].bottom === sideTopDynamic) {
  //        console.log(`top de la startTile : ${this.map.cases[72][72].bottom} VS bottom de la currentTile : ${sideTopDynamic}`);
  //        console.log(true)
  //         return
  //       }
  //       else if (this.map.cases[72][72].left === sideRightDynamic) {
  //        console.log(`top de la startTile : ${this.map.cases[72][72].left} VS bottom de la currentTile : ${sideRightDynamic}`);
  //        console.log(true)
  //        return
  //       }
  //       else {
  //        console.log(false)
  //        return
  //       }
  //   }


}

