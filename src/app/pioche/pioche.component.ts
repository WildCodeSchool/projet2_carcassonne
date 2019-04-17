import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-pioche',
  templateUrl: './pioche.component.html',
  styleUrls: ['./pioche.component.scss']
})
export class PiocheComponent implements OnInit {

  tileRotation = 0
  flipped = true

  constructor(private game: GameService, private deck: DeckService) { }


  ngOnInit() {

  }
  
  rotateTile() {
    this.tileRotation = this.game.rotationTile()
    // console.log(`tile Rotation ${this.tileRotation}`);
  }

  flipIt() {
    this.flipped = !this.flipped;
  }

}
