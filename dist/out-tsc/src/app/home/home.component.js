import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(game, deck) {
        this.game = game;
        this.deck = deck;
        this.STATE_PICK_TILE = 'Piocher une carte';
        this.STATE_CLICK_TILE = 'Poser une carte';
        this.STATE_ASK_THIEF = 'Demander poser voleur';
        this.STATE_CLICK_THIEF = 'Poser voleur';
        this.currentState = this.STATE_PICK_TILE;
    }
    HomeComponent.prototype.onSubmit = function () {
        this.game.playersGame();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GameService, DeckService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map