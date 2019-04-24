import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
import { GameStateService } from '../game-state.service'
import { tilesDeck, Tuile } from '../tuilesData';

@Component({
  selector: 'app-pioche',
  templateUrl: './pioche.component.html',
  styleUrls: ['./pioche.component.scss']
})
export class PiocheComponent implements OnInit {

  tileRotation = 0
  flipped = true

  constructor(private game: GameService,
    private deck: DeckService,
    private gameState: GameStateService) { }


  ngOnInit() {

  }

  rotateTile() {
    this.tileRotation = this.game.rotationTile()
  }

  
  flipIt() {
    this.flipped = !this.flipped;
  }

}
