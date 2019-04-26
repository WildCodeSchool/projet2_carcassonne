import { Component, OnInit, Input, Output } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor() { }


  ngOnInit() {
  }

 }
