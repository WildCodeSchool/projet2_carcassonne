import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges){
    if (this.turnState == this.game.STATE_ASK_THIEF){
      console.log(changes)
    }
  }

  open(content) {
    this.modalService.open(content);
  }

}

