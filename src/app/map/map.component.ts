import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { GameService } from '../game.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  cases = undefined
  tileRotation: number;

  constructor(private deck: DeckService, private game: GameService, private map: MapService) { }

  ngOnInit() {
    this.cases = this.map.generateMap()
  }

  rotateTile() {
    this.tileRotation = this.game.rotationTile()
    // console.log(`tile Rotation ${this.tileRotation}`);

}}





