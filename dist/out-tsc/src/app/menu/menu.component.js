import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GameService } from '../game.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(game) {
        this.game = game;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GameService])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map