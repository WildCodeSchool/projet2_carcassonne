import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../game.service';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(config, modalService, game) {
        this.modalService = modalService;
        this.game = game;
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ModalComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.turnState == this.game.STATE_ASK_THIEF) {
            setTimeout(function () { return _this.modalService.open(_this.content); }, 1000);
            console.log(changes);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalComponent.prototype, "turnState", void 0);
    tslib_1.__decorate([
        ViewChild('content'),
        tslib_1.__metadata("design:type", ElementRef)
    ], ModalComponent.prototype, "content", void 0);
    ModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModalConfig, NgbModal, GameService])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map