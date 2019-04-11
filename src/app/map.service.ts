import { Injectable } from '@angular/core';
import { Tuile, tilesDeck } from './tuilesData';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  public cases : Tuile[][] = undefined

  constructor() { }

  generateMap() {
    this.cases = []
    for (let i = 0; i < 144; i++) {
      this.cases[i] = []
      for (let j = 0; j < 144; j++) {
        this.cases[i][j] = undefined
      }
    }
    this.cases[72][72] = tilesDeck[0]
    return this.cases
  }

}
