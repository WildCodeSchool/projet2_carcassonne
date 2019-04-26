import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DeckService } from '../deck.service';
import { GameService } from '../game.service';
import { MapService } from '../map.service';
import { PanZoomConfig } from 'ng2-panzoom';
var MapComponent = /** @class */ (function () {
    function MapComponent(deck, game, map) {
        this.deck = deck;
        this.game = game;
        this.map = map;
        this.cases = undefined;
        this.panZoomConfig = new PanZoomConfig({
            zoomLevels: 5,
            scalePerZoomLevel: 1.5,
            initialPanX: -10800,
            initialPanY: -10800,
            freeMouseWheelFactor: 0.01,
            zoomToFitZoomLevelFactor: 0.9,
            dragMouseButton: 'left',
            panOnClickDrag: true
        });
    }
    MapComponent.prototype.ngOnInit = function () {
        this.cases = this.map.generateMap();
    };
    MapComponent.prototype.rotateTile = function () {
        this.tileRotation = this.game.rotationTile();
    };
    MapComponent = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DeckService, GameService, MapService])
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=map.component.js.map