var Tuile = /** @class */ (function () {
    function Tuile(name, img, top, right, bottom, left, shield, rotation, iPos, jPos) {
        if (rotation === void 0) { rotation = 0; }
        if (iPos === void 0) { iPos = 0; }
        if (jPos === void 0) { jPos = 0; }
        this.name = name;
        this.img = img;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.shield = shield;
        this.rotation = rotation;
        this.iPos = iPos;
        this.jPos = jPos;
    }
    Tuile.prototype.getSideKeys = function (side, rotation, currentTile) {
        // console.log(`côté à tester : ${side}`)
        var sidePos = Tuile.SideKeys.indexOf(side);
        // console.log(`position du côté à tester : ${sidePos}`)
        var rotationPos = Tuile.RotationKeys.indexOf(rotation);
        // console.log(`valeur de la rotation : ${rotation}`)
        // console.log(`position dans le tableau rotation : ${rotationPos}`)
        var newKeys = Tuile.SideKeys[(sidePos + rotationPos) % Tuile.SideKeys.length];
        // console.log(`newKeys : ${newKeys}`)
        // console.log(`valeur du nouveau côté : ${currentTile[newKeys]}`)
        // console.log(`-----------------------`)
        return currentTile[newKeys];
    };
    Tuile.SideKeys = ["top", "left", "bottom", "right"];
    Tuile.RotationKeys = [0, 90, 180, 270];
    return Tuile;
}());
export { Tuile };
var pppp_1 = new Tuile('pppp_1', '../assets/Tiles/pppp-1.png', 'prairie', 'prairie', 'prairie', 'prairie', false);
var pppp_2 = new Tuile('pppp_2', '../assets/Tiles/pppp-2.png', 'prairie', 'prairie', 'prairie', 'prairie', false);
var pppp_3 = new Tuile('pppp_3', '../assets/Tiles/pppp-3.png', 'prairie', 'prairie', 'prairie', 'prairie', false);
var pppp_4 = new Tuile('pppp_4', '../assets/Tiles/pppp-4.png', 'prairie', 'prairie', 'prairie', 'prairie', false);
var pprp_1 = new Tuile('pprp_1', '../assets/Tiles/pprp-1.png', 'prairie', 'prairie', 'route', 'prairie', false);
var pprp_2 = new Tuile('pprp_2', '../assets/Tiles/pprp-2.png', 'prairie', 'prairie', 'route', 'prairie', false);
var pprr_1 = new Tuile('pprr_1', '../assets/Tiles/pprr-1.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_2 = new Tuile('pprr_2', '../assets/Tiles/pprr-2.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_3 = new Tuile('pprr_3', '../assets/Tiles/pprr-3.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_4 = new Tuile('pprr_4', '../assets/Tiles/pprr-4.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_5 = new Tuile('pprr_5', '../assets/Tiles/pprr-5.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_6 = new Tuile('pprr_6', '../assets/Tiles/pprr-6.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_7 = new Tuile('pprr_7', '../assets/Tiles/pprr-7.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_8 = new Tuile('pprr_8', '../assets/Tiles/pprr-8.png', 'prairie', 'prairie', 'route', 'route', false);
var pprr_9 = new Tuile('pprr_9', '../assets/Tiles/pprr-9.png', 'prairie', 'prairie', 'route', 'route', false);
var prrr_1 = new Tuile('prrr_1', '../assets/Tiles/prrr-1.png', 'prairie', 'route', 'route', 'route', false);
var prrr_2 = new Tuile('prrr_2', '../assets/Tiles/prrr-2.png', 'prairie', 'route', 'route', 'route', false);
var prrr_3 = new Tuile('prrr_3', '../assets/Tiles/prrr-3.png', 'prairie', 'route', 'route', 'route', false);
var prrr_4 = new Tuile('prrr_4', '../assets/Tiles/prrr-4.png', 'prairie', 'route', 'route', 'route', false);
var pvpv_1 = new Tuile('pvpv_1', '../assets/Tiles/pvpv-1.png', 'prairie', 'ville', 'prairie', 'ville', false);
var pvpv_2 = new Tuile('pvpv_2', '../assets/Tiles/pvpv-2.png', 'prairie', 'ville', 'prairie', 'ville', false);
var pvpv_b = new Tuile('pvpv_b', '../assets/Tiles/pvpv-b.png', 'prairie', 'ville', 'prairie', 'ville', true);
var rprp_1 = new Tuile('rprp_1', '../assets/Tiles/rprp-1.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_2 = new Tuile('rprp_2', '../assets/Tiles/rprp-2.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_3 = new Tuile('rprp_3', '../assets/Tiles/rprp-3.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_4 = new Tuile('rprp_4', '../assets/Tiles/rprp-4.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_5 = new Tuile('rprp_5', '../assets/Tiles/rprp-5.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_6 = new Tuile('rprp_6', '../assets/Tiles/rprp-6.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_7 = new Tuile('rprp_7', '../assets/Tiles/rprp-7.png', 'route', 'prairie', 'route', 'prairie', false);
var rprp_8 = new Tuile('rprp_8', '../assets/Tiles/rprp-8.png', 'route', 'prairie', 'route', 'prairie', false);
var rrrr = new Tuile('rrrr', '../assets/Tiles/rrrr.png', 'route', 'route', 'route', 'route', false);
var start = new Tuile('start', '../assets/Tiles/start.png', 'ville', 'route', 'prairie', 'route', false);
var vppp_1 = new Tuile('vppp_1', '../assets/Tiles/vppp-1.png', 'ville', 'prairie', 'prairie', 'prairie', false);
var vppp_2 = new Tuile('vppp_2', '../assets/Tiles/vppp-2.png', 'ville', 'prairie', 'prairie', 'prairie', false);
var vppp_3 = new Tuile('vppp_3', '../assets/Tiles/vppp-3.png', 'ville', 'prairie', 'prairie', 'prairie', false);
var vppp_4 = new Tuile('vppp_4', '../assets/Tiles/vppp-4.png', 'ville', 'prairie', 'prairie', 'prairie', false);
var vppp_5 = new Tuile('vppp_5', '../assets/Tiles/vppp-5.png', 'ville', 'prairie', 'prairie', 'prairie', false);
var vvvv_b = new Tuile('vvvv_b', '../assets/Tiles/vvvv-b.png', 'ville', 'ville', 'ville', 'ville', true);
var vvrv_b_1 = new Tuile('vvrv_b_2', '../assets/Tiles/vvrv-b-2.png', 'ville', 'ville', 'route', 'ville', true);
var vvrv_b_2 = new Tuile('vvrv_b_1', '../assets/Tiles/vvrv-b-1.png', 'ville', 'ville', 'route', 'ville', true);
var vvrv_1 = new Tuile('vvrv_1', '../assets/Tiles/vvrv-1.png', 'ville', 'ville', 'route', 'ville', false);
var vvpv_b = new Tuile('vvpv_b', '../assets/Tiles/vvpv-b.png', 'ville', 'ville', 'prairie', 'ville', true);
var vvpv_1 = new Tuile('vvpv_1', '../assets/Tiles/vvpv-1.png', 'ville', 'ville', 'prairie', 'ville', false);
var vvpv_2 = new Tuile('vvpv_2', '../assets/Tiles/vvpv-2.png', 'ville', 'ville', 'prairie', 'ville', false);
var vvpv_3 = new Tuile('vvpv_3', '../assets/Tiles/vvpv-3.png', 'ville', 'ville', 'prairie', 'ville', false);
var vvpp_small = new Tuile('vvpp_small', '../assets/Tiles/vvpp-small.png', 'ville', 'ville', 'prairie', 'prairie', false);
var vvpp_b_1 = new Tuile('vvpp_b_1', '../assets/Tiles/vvpp-b-1.png', 'ville', 'ville', 'prairie', 'prairie', true);
var vvpp_b_2 = new Tuile('vvpp_b_2', '../assets/Tiles/vvpp-b-2.png', 'ville', 'ville', 'prairie', 'prairie', true);
var vvpp_1 = new Tuile('vvpp_1', '../assets/Tiles/vvpp-1.png', 'ville', 'ville', 'prairie', 'prairie', false);
var vvpp_2 = new Tuile('vvpp_2', '../assets/Tiles/vvpp-2.png', 'ville', 'ville', 'prairie', 'prairie', false);
var vvpp_3 = new Tuile('vvpp_3', '../assets/Tiles/vvpp-3.png', 'ville', 'ville', 'prairie', 'prairie', false);
var vrrv_b_1 = new Tuile('vrrv_b_1', '../assets/Tiles/vrrv-b-1.png', 'ville', 'route', 'route', 'ville', true);
var vrrv_b_2 = new Tuile('vrrv_b_2', '../assets/Tiles/vrrv-b-2.png', 'ville', 'route', 'route', 'ville', true);
var vrrv_1 = new Tuile('vrrv_1', '../assets/Tiles/vrrv-1.png', 'ville', 'route', 'route', 'ville', false);
var vrrv_2 = new Tuile('vrrv_2', '../assets/Tiles/vrrv-2.png', 'ville', 'route', 'route', 'ville', false);
var vrrv_3 = new Tuile('vrrv_3', '../assets/Tiles/vrrv-3.png', 'ville', 'route', 'route', 'ville', false);
var vrrr_1 = new Tuile('vrrr_1', '../assets/Tiles/vrrr-1.png', 'ville', 'route', 'route', 'route', false);
var vrrr_2 = new Tuile('vrrr_2', '../assets/Tiles/vrrr-2.png', 'ville', 'route', 'route', 'route', false);
var vrrr_3 = new Tuile('vrrr_3', '../assets/Tiles/vrrr-3.png', 'ville', 'route', 'route', 'route', false);
var vrrp_1 = new Tuile('vrrp_1', '../assets/Tiles/vrrp-1.png', 'ville', 'route', 'route', 'prairie', false);
var vrrp_2 = new Tuile('vrrp_2', '../assets/Tiles/vrrp-2.png', 'ville', 'route', 'route', 'prairie', false);
var vrrp_3 = new Tuile('vrrp_3', '../assets/Tiles/vrrp-3.png', 'ville', 'route', 'route', 'prairie', false);
var vrpr_1 = new Tuile('vrpr_1', '../assets/Tiles/vrpr-1.png', 'ville', 'route', 'prairie', 'route', false);
var vrpr_2 = new Tuile('vrpr_2', '../assets/Tiles/vrpr-2.png', 'ville', 'route', 'prairie', 'route', false);
var vrpr_3 = new Tuile('vrpr_3', '../assets/Tiles/vrpr-3.png', 'ville', 'route', 'prairie', 'route', false);
var vpvp_1 = new Tuile('vpvp_1', '../assets/Tiles/vpvp-1.png', 'ville', 'prairie', 'ville', 'prairie', false);
var vpvp_2 = new Tuile('vpvp_2', '../assets/Tiles/vpvp-2.png', 'ville', 'prairie', 'ville', 'prairie', false);
var vpvp_3 = new Tuile('vpvp_3', '../assets/Tiles/vpvp-3.png', 'ville', 'prairie', 'ville', 'prairie', false);
var vprr_1 = new Tuile('vprr_1', '../assets/Tiles/vprr-1.png', 'ville', 'prairie', 'route', 'route', false);
var vprr_2 = new Tuile('vprr_2', '../assets/Tiles/vprr-2.png', 'ville', 'prairie', 'route', 'route', false);
var vprr_3 = new Tuile('vprr_3', '../assets/Tiles/vprr-3.png', 'ville', 'prairie', 'route', 'route', false);
var vppv_small = new Tuile('vppv_small', '../assets/Tiles/vppv-small.png', 'ville', 'prairie', 'prairie', 'ville', false);
export var tilesDeck = [
    pppp_1,
    pppp_2,
    pppp_3,
    pppp_4,
    pprp_1,
    pprp_2,
    pprr_1,
    pprr_2,
    pprr_3,
    pprr_4,
    pprr_5,
    pprr_6,
    pprr_7,
    pprr_8,
    pprr_9,
    prrr_1,
    prrr_2,
    prrr_3,
    prrr_4,
    pvpv_1,
    pvpv_2,
    pvpv_b,
    rprp_1,
    rprp_2,
    rprp_3,
    rprp_4,
    rprp_5,
    rprp_6,
    rprp_7,
    rprp_8,
    rrrr,
    start,
    vppp_1,
    vppp_2,
    vppp_3,
    vppp_4,
    vppp_5,
    vvvv_b,
    vvrv_b_1,
    vvrv_b_2,
    vvrv_1,
    vvpv_b,
    vvpv_1,
    vvpv_2,
    vvpv_3,
    vvpp_small,
    vvpp_b_1,
    vvpp_b_2,
    vvpp_1,
    vvpp_2,
    vvpp_3,
    vrrv_b_1,
    vrrv_b_2,
    vrrv_1,
    vrrv_2,
    vrrv_3,
    vrrr_1,
    vrrr_2,
    vrrr_3,
    vrrp_1,
    vrrp_2,
    vrrp_3,
    vrpr_1,
    vrpr_2,
    vrpr_3,
    vpvp_1,
    vpvp_2,
    vpvp_3,
    vprr_1,
    vprr_2,
    vprr_3,
    vppv_small
];
//# sourceMappingURL=tuilesData.js.map