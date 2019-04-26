import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private game: GameService, private deck: DeckService) { }

  onSubmit() {
    this.game.playersGame()
  }

  ngOnInit() {
 
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE
}
