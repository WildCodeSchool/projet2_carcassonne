import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
import { GameStateService } from '../game-state.service'
import { tilesDeck, Tuile } from '../tuilesData';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip, fadeInRight, zoomIn, bounceInDown } from 'ng-animate';


@Component({
  selector: 'app-pioche',
  templateUrl: './pioche.component.html',
  styleUrls: ['./pioche.component.scss'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
  ],
})
export class PiocheComponent implements OnInit {

  

  constructor(private game: GameService,
    private deck: DeckService,
    private gameState: GameStateService) { }

  ngOnInit() {
    
  }

  rotateTile() {
    this.game.rotationTile()
  }

  


}
