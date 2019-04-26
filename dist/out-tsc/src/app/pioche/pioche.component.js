import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
import { GameStateService } from '../game-state.service';
var PiocheComponent = /** @class */ (function () {
    function PiocheComponent(game, deck, gameState) {
        this.game = game;
        this.deck = deck;
        this.gameState = gameState;
        this.flipped = true;
    }
    PiocheComponent.prototype.ngOnInit = function () {
    };
    PiocheComponent.prototype.rotateTile = function () {
        this.game.rotationTile();
    };
    PiocheComponent.prototype.flipIt = function () {
        this.flipped = !this.flipped;
    };
    PiocheComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pioche',
            templateUrl: './pioche.component.html',
            styleUrls: ['./pioche.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GameService,
            DeckService,
            GameStateService])
    ], PiocheComponent);
    return PiocheComponent;
}());
export { PiocheComponent };
//# sourceMappingURL=pioche.component.js.map