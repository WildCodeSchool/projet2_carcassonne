import { Component, OnInit, Input, Output } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name: string;
  familyImages: string[] = [
    "../../assets/family/arryn.png",
    "../../assets/family/greyjoy.png",
    "../../assets/family/lannister.png",
    "../../assets/family/stark.png",
    "../../assets/family/targa.png"
  ]
  player: any = {};
  playersArray = []

  players: number = 1;


  constructor(private game: GameService, private deck: DeckService) { }
  pickArryn() {return this.familyImages[0]}
  pickGreyjoy() {return this.familyImages[1]}
  pickLannister() {return this.familyImages[2]}
  pickStark() {return this.familyImages[3]}
  pickTarga() {return this.familyImages[4]}

  validatePlayer() {
    if (this.pickGreyjoy()) {
      this.player = { name: this.name, image: this.pickGreyjoy() }
      this.playersArray.push(this.player)
      console.log(this.playersArray)
    }
    else if (this.pickArryn()) {
      this.player = { name: this.name, image: this.pickArryn() }
      this.playersArray.push(this.player)
      console.log(this.playersArray)
    }

  }

  ngOnInit() {
  }

  nextTurnPlayer() {
    this.players = this.game.nextPlayer()
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE

}
