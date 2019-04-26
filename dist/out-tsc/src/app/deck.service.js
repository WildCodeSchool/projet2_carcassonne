import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { tilesDeck } from './tuilesData';
var DeckService = /** @class */ (function () {
    function DeckService() {
    }
    DeckService.prototype.pickTile = function () {
        var numTile = Math.floor(Math.random() * tilesDeck.length);
        var keepNumTile = tilesDeck[numTile];
        var removedTiles = tilesDeck.splice(numTile, 1);
        //  console.log("tuile retiré du jeu :")
        //  console.log(removedTiles)
        //  console.log("tableau après pioche :")
        //  console.log(tilesDeck)
        // console.log("keepNumTile")
        // console.log(keepNumTile)
        return keepNumTile;
    };
    DeckService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DeckService);
    return DeckService;
}());
export { DeckService };
//# sourceMappingURL=deck.service.js.map