import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  family: string;
  player: any = {};
  playersArray = [];
  ngModel: string;
  players: number = 1;

  constructor(private game: GameService, private deck: DeckService) { }

  onSubmit() {
    console.log()
    switch (this.family) {
      case ('arryn'):
        this.player = { name: this.name, image: "../../assets/family/arryn.png", token :7, score:0}
        this.playersArray.push(this.player)
        console.log(this.playersArray)
        break
      case ('greyjoy'):
        this.player = { name: this.name, image: "../../assets/family/greyjoy.png",token :7, score:0 }
        this.playersArray.push(this.player)
        console.log(this.playersArray)
        break
      case ('lannister'):
        this.player = { name: this.name, image: "../../assets/family/lannister.png",token :7, score:0 }
        this.playersArray.push(this.player)
        console.log(this.playersArray)
        break
      case ('stark'):
        this.player = { name: this.name, image: "../../assets/family/stark.png",token :7, score:0 }
        this.playersArray.push(this.player)
        console.log(this.playersArray)
        break
      case ('targa'):
        this.player = { name: this.name, image: "../../assets/family/targa.png",token :7 , score:0}
        this.playersArray.push(this.player)
        console.log(this.playersArray)
        break
      default:
        console.log('erreur')
    }
  }

  ngOnInit() {
  }

  public readonly STATE_PICK_TILE = 'Piocher une carte'
  public readonly STATE_CLICK_TILE = 'Poser une carte'
  public readonly STATE_ASK_THIEF = 'Demander poser voleur'
  public readonly STATE_CLICK_THIEF = 'Poser voleur'
  public currentState = this.STATE_PICK_TILE
}
