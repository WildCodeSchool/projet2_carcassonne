import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  cases = undefined
  startTile = '../assets/Tiles/start.png'
 
  constructor() { }
 
  ngOnInit() {
    this.cases = []
    for (let i = 0; i < 144; i++) {
      this.cases[i] = []
      for (let j = 0; j < 144; j++) {
        this.cases[i][j] = undefined
      }
    }
    this.cases[72][72] = this.startTile
  }
 }





 