import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {


    public startID: any;
   
    constructor(private route: ActivatedRoute, private gs: GameService)  { }
   
    ngOnInit() {

    
      
      // USE THIS
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.startID = parseInt(params.get('startID'));
        
      });
   
      // NEVER USE THIS /!\
      this.startID = this.route.snapshot.paramMap.get('startID');
    }
   }
   
  
  


