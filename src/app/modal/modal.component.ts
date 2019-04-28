import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../game.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  @Input()
  turnState:string;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private game: GameService,) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  //faire une methode ngOnChange avec l'input turnState + <app-modal [turnState]="gameService.f"></app-modal> dans le app component
  
  @ViewChild('content') content: ElementRef;

  ngOnChanges(changes: SimpleChanges){
    if (this.turnState === this.game.STATE_ASK_THIEF && this.game.checkSideState === true){
      setTimeout(()=> this.modalService.open(this.content), 1000);
      console.log(`état de la fonction checkSide : ${this.game.checkSideState}`)
      console.log(changes)
    }
  }

  submitVoleur(){
    this.game.voleurPosition()
  }



}

