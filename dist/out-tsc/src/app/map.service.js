import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { tilesDeck } from './tuilesData';
var MapService = /** @class */ (function () {
    function MapService() {
        this.cases = undefined;
    }
    MapService.prototype.generateMap = function () {
        this.cases = [];
        for (var i = 0; i < 144; i++) {
            this.cases[i] = [];
            for (var j = 0; j < 144; j++) {
                this.cases[i][j] = undefined;
            }
        }
        this.cases[72][72] = tilesDeck[31];
        return this.cases;
    };
    MapService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());
export { MapService };
//# sourceMappingURL=map.service.js.map