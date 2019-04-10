import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  cases = undefined
  startTile = '../../assets/img/start.png'
  startTilePosition = [0][0]

  constructor() { }

  ngOnInit() {
    this.cases = []
    for (let i = -72; i < 72; i++) {
      this.cases[i] = []
      for (let j = -72; j < 72; j++) {
        this.cases[i][j] = undefined
      }
    }

  }
}