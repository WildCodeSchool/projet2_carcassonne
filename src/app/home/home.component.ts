import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableLength = 5
  tileSound: any;
  

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

