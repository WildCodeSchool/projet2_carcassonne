import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { tilesDeck, Tuile } from './tuilesData';
import { MapService } from './map.service';
var GameService = /** @class */ (function () {
    function GameService(deck, map) {
        this.deck = deck;
        this.map = map;
        this.removeStartTile = tilesDeck.splice(31, 1);
        this.currentTile = undefined;
        this.totalTile = tilesDeck.length;
        this.currentRotation = 0;
        this.currentTileIndex = [];
        // poser un voleur
        //   poseThief(){
        //     switch(playerArray){
        // case (this.currentTile.bottom):
        //   }
        // }
        //game State machine
        this.nbPlayer = 5;
        this.playerReal = {};
        this.playersArray = [];
        this.players = 1;
        this.STATE_PICK_TILE = 'Piocher une carte';
        this.STATE_CLICK_TILE = 'Poser une carte';
        this.STATE_ASK_THIEF = 'Demander poser voleur';
        this.STATE_CLICK_THIEF = 'Poser voleur';
        this.currentState = this.STATE_PICK_TILE;
    }
    GameService.prototype.pickedTile = function () {
        if (this.totalTile <= 0) {
            this.currentTile = undefined;
            alert('End of the game');
            console.log("Changement d'état vers le comptage des points");
            return;
        }
        if (this.currentTile === undefined) {
            this.currentRotation = 0;
            this.currentTile = this.deck.pickTile();
            // console.log(`rotation : ${this.currentTile.rotation}`)
            // console.log(`top : ${this.currentTile.top}`)
            // console.log(`right : ${this.currentTile.right}`)
            // console.log(`bottom : ${this.currentTile.bottom}`)
            // console.log(`left : ${this.currentTile.left}`)
            // console.log(`---------------------------------`)
            // console.log("taille du tableau après pioche :")
            // console.log(tilesDeck.length)
            this.totalTile -= 1;
            this.currentState = this.STATE_CLICK_TILE;
            console.log("Changement d'état vers la pose de la tuile piochée");
            return;
        }
        if (this.currentTile !== undefined) {
            this.currentTile = undefined;
            return;
        }
    };
    GameService.prototype.rotationTile = function () {
        this.currentTile.rotation = (this.currentTile.rotation + 90) % 360;
        this.currentRotation = this.currentTile.rotation;
        return this.currentRotation;
    };
    GameService.prototype.checkSide = function (i, j) {
        var iPos = i;
        var jPos = j;
        this.currentTile.iPos = iPos;
        this.currentTile.jPos = jPos;
        var sideTopDynamic = Tuile.prototype.getSideKeys('top', this.currentRotation, this.currentTile);
        var sideRightDynamic = Tuile.prototype.getSideKeys('right', this.currentRotation, this.currentTile);
        var sideBottomDynamic = Tuile.prototype.getSideKeys('bottom', this.currentRotation, this.currentTile);
        var sideLeftDynamic = Tuile.prototype.getSideKeys('left', this.currentRotation, this.currentTile);
        this.currentTile.top = sideTopDynamic;
        this.currentTile.right = sideRightDynamic;
        this.currentTile.bottom = sideBottomDynamic;
        this.currentTile.left = sideLeftDynamic;
        console.log("new top : " + sideTopDynamic);
        console.log("new right : " + sideRightDynamic);
        console.log("new bottom : " + sideBottomDynamic);
        console.log("new left : " + sideLeftDynamic);
        console.log(this.currentTile);
        var tileDectection = this.map.cases[iPos - 1][jPos] || this.map.cases[iPos][jPos + 1] || this.map.cases[iPos + 1][jPos] || this.map.cases[iPos][jPos - 1];
        if (!tileDectection) {
            console.error("Aucune tuile autour");
            alert("Impossible de placer la tuile ici");
            return false;
        }
        if (this.map.cases[iPos - 1][jPos] !== undefined) {
            if (this.map.cases[iPos - 1][jPos].bottom === sideTopDynamic) {
                console.log("Bords valid\u00E9s : tuile pos\u00E9e, son bord haut \"" + sideTopDynamic + "\" et tuile au dessus, son bord bas \"" + this.map.cases[iPos - 1][jPos].bottom + "\"");
            }
            else {
                console.error("Erreur bords : tuile pos\u00E9e, son bord haut \"" + sideTopDynamic + "\" et tuile au dessus, son bord bas \"" + this.map.cases[iPos - 1][jPos].bottom + "\"");
                alert("Error : sides not matching (" + sideTopDynamic + " and " + this.map.cases[iPos - 1][jPos].bottom + ")");
                return false;
            }
        }
        if (this.map.cases[iPos + 1][jPos] !== undefined) {
            if (this.map.cases[iPos + 1][jPos].top === sideBottomDynamic) {
                console.log("Bords valid\u00E9s : tuile pos\u00E9e, son bord bas \"" + sideBottomDynamic + "\" et tuile en dessous, son bord haut \"" + this.map.cases[iPos + 1][jPos].top + "\"");
            }
            else {
                console.error("Erreur bords : tuile pos\u00E9e, son bord bas \"" + sideBottomDynamic + "\" et tuile en dessous, son bord haut \"" + this.map.cases[iPos + 1][jPos].top + "\"");
                alert("Error : sides not matching (" + sideBottomDynamic + " and " + this.map.cases[iPos + 1][jPos].top + ")");
                return false;
            }
        }
        if (this.map.cases[iPos][jPos + 1] !== undefined) {
            if (this.map.cases[iPos][jPos + 1].left === sideRightDynamic) {
                console.log("Bords valid\u00E9s : tuile pos\u00E9e, son bord droit \"" + sideRightDynamic + "\" et tuile \u00E0 droite, son bord gauche \"" + this.map.cases[iPos][jPos + 1].left + "\"");
            }
            else {
                console.error("Erreur bords : tuile pos\u00E9e, son bord droit \"" + sideRightDynamic + "\" et tuile \u00E0 droite, son bord gauche \"" + this.map.cases[iPos][jPos + 1].left + "\"");
                alert("Error : sides not matching (" + sideRightDynamic + " and " + this.map.cases[iPos][jPos + 1].left + ")");
                return false;
            }
        }
        if (this.map.cases[iPos][jPos - 1] !== undefined) {
            if (this.map.cases[iPos][jPos - 1].right === sideLeftDynamic) {
                console.log("Bords valid\u00E9s : tuile pos\u00E9e, son bord gauche \"" + sideLeftDynamic + "\" et tuile \u00E0 gauche, son bord droit \"" + this.map.cases[iPos][jPos - 1].right + "\"");
            }
            else {
                console.error("Erreur bords : tuile pos\u00E9e, son bord gauche \"" + sideLeftDynamic + "\" et tuile \u00E0 gauche, son bord droit \"" + this.map.cases[iPos][jPos - 1].right + "\"");
                alert("Error : sides not matching (" + sideLeftDynamic + " and " + this.map.cases[iPos][jPos - 1].right + ")");
                return false;
            }
        }
        console.log("Tuile posable");
        return true;
    };
    GameService.prototype.onTileClick = function (i, j) {
        // ligne pour ne poser qu'une seule fois
        if (this.map.cases[i][j] != null) {
            return;
        }
        else {
            this.checkSide(i, j) ? this.map.cases[i][j] = this.currentTile : undefined;
            this.currentState = this.STATE_ASK_THIEF;
            console.log("Changement d'état vers la demande de poser un voleur");
        }
    };
    GameService.prototype.nextPlayer = function () {
        this.players += 1;
        if (this.players >= this.nbPlayer) {
            this.players = 1;
        }
        this.currentState = this.STATE_PICK_TILE;
        console.log("Changement d'état vers la pioche d'une tuile");
        return this.players;
    };
    GameService.prototype.playersGame = function () {
        console.log();
        switch (this.family) {
            case ('arryn'):
                this.playerReal = { name: this.name, image: "../assets/family/arryn.png", token: 7, score: 0 };
                this.playersArray.push(this.playerReal);
                console.log(this.playersArray);
                break;
            case ('greyjoy'):
                this.playerReal = { name: this.name, image: "../assets/family/greyjoy.png", token: 7, score: 0 };
                this.playersArray.push(this.playerReal);
                console.log(this.playersArray);
                break;
            case ('lannister'):
                this.playerReal = { name: this.name, image: "../assets/family/lannister.png", token: 7, score: 0 };
                this.playersArray.push(this.playerReal);
                console.log(this.playersArray);
                break;
            case ('stark'):
                this.playerReal = { name: this.name, image: "../assets/family/stark.png", token: 7, score: 0 };
                this.playersArray.push(this.playerReal);
                console.log(this.playersArray);
                break;
            case ('targa'):
                this.playerReal = { name: this.name, image: "../assets/family/targa.png", token: 7, score: 0 };
                this.playersArray.push(this.playerReal);
                console.log(this.playersArray);
                break;
            default:
                console.log('erreur');
        }
    };
    GameService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DeckService, MapService])
    ], GameService);
    return GameService;
}());
export { GameService };
//# sourceMappingURL=game.service.js.map