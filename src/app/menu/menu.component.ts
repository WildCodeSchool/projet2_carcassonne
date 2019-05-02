import { Component, OnInit, Input, Output } from '@angular/core';
import { GameService } from '../game.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip, tada, zoomIn, bounceInDown } from 'ng-animate';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ],
})
export class MenuComponent implements OnInit {
 

  constructor(public game: GameService) { }
  
  ngOnInit() {
    
  }

}
