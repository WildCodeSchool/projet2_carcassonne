import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
var GameStartComponent = /** @class */ (function () {
    function GameStartComponent(route, gs) {
        this.route = route;
        this.gs = gs;
    }
    GameStartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // USE THIS
        this.route.paramMap.subscribe(function (params) {
            _this.startID = parseInt(params.get('startID'));
        });
        // NEVER USE THIS /!\
        this.startID = this.route.snapshot.paramMap.get('startID');
    };
    GameStartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-game-start',
            templateUrl: './game-start.component.html',
            styleUrls: ['./game-start.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, GameService])
    ], GameStartComponent);
    return GameStartComponent;
}());
export { GameStartComponent };
//# sourceMappingURL=game-start.component.js.map