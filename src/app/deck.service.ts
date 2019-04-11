import { Injectable } from '@angular/core';
import { deck } from './tuilesData';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }

  pickTile() {
    return deck[0]
  }
}
