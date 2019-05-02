import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInLeft, zoomIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
      params: { timing: 0.5 }
    }))])
  ],
})
export class HomeComponent implements OnInit {
  bounceInLeft: any
  tableLength = 5
  tileSound: any;
  zoomIn:any
  
  constructor(public game: GameService, private deck: DeckService) { }

  submitPlayer() {
    if (this.tableLength > 0) {
    this.game.playersGame()
    this.tableLength -= 1
    this.tileSound = new Audio()
    this.tileSound.src = "/assets/epeejoueur.mp3"
    this.tileSound.load()
    this.tileSound.play()
    
  }}

  
  ngOnInit() {
    
    this.game.getMusic()
    
  }
  

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE
}

