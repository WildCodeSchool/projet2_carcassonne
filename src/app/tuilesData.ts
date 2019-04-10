
export class Tuile {

    constructor (
    private name: string,
    private img: string,
    private top: string,
    private right: string,
    private bottom: string,
    private left: string,
    private shield: boolean
    ) {}
  }

 let pppp_1 = new Tuile('pppp_1','../assets/Tiles/pppp-1.png','prairie', 'prairie', 'prairie', 'prairie', false);
 let pppp_2 = new Tuile('pppp_2','../assets/Tiles/pppp-1.png','prairie', 'prairie', 'prairie', 'prairie', false);
 // pppp_3 = new Tuile('pppp_3','pppp_3.png','prairie', 'prairie', 'prairie', 'prairie', false);
 // pppp_4 = new Tuile('pppp_4','pppp_4.png','prairie', 'prairie', 'prairie', 'prairie', false);
 // pprp_1 = new Tuile('pprp_1','pprp_1.png','prairie', 'prairie', 'route', 'prairie', false);
 // pprp_2 = new Tuile('pprp_2','pprp_2.png','prairie', 'prairie', 'route', 'prairie', false);
 // pprr_1 = new Tuile('pprr_1','pprr_1.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_2 = new Tuile('pprr_2','pprr_2.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_3 = new Tuile('pprr_3','pprr_3.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_4 = new Tuile('pprr_4','pprr_4.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_5 = new Tuile('pprr_5','pprr_5.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_6 = new Tuile('pprr_6','pprr_6.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_7 = new Tuile('pprr_7','pprr_7.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_8 = new Tuile('pprr_8','pprr_8.png','prairie', 'prairie', 'route', 'route', false);
 // pprr_9 = new Tuile('pprr_9','pprr_9.png','prairie', 'prairie', 'route', 'route', false);
 // prrr_1 = new Tuile('prrr_1','prrr_1.png','prairie', 'route', 'route', 'route', false);
 // prrr_2 = new Tuile('prrr_2','prrr_2.png','prairie', 'route', 'route', 'route', false);
 // prrr_3 = new Tuile('prrr_3','prrr_3.png','prairie', 'route', 'route', 'route', false);
 // prrr_4 = new Tuile('prrr_4','prrr_4.png','prairie', 'route', 'route', 'route', false);
 // pvpv_1 = new Tuile('pvpv_1','pvpv_1.png','prairie', 'ville', 'prairie', 'ville', false);
 // pvpv_2 = new Tuile('pvpv_2','pvpv_2.png','prairie', 'ville', 'prairie', 'ville', false);
 // pvpv_b = new Tuile('pvpv_b','pvpv_b.png','prairie', 'ville', 'prairie', 'ville', true);
 // rprp_1 = new Tuile('rprp_1','rprp_1.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_2 = new Tuile('rprp_2','rprp_2.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_3 = new Tuile('rprp_3','rprp_3.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_4 = new Tuile('rprp_4','rprp_4.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_5 = new Tuile('rprp_5','rprp_5.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_6 = new Tuile('rprp_6','rprp_6.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_7 = new Tuile('rprp_7','rprp_7.png','route', 'prairie', 'route', 'prairie', false);
 // rprp_8 = new Tuile('rprp_8','rprp_8.png','route', 'prairie', 'route', 'prairie', false);
 // rrrr = new Tuile('rrrr','rrrr.png','route', 'route', 'route', 'route', false);
 // start = new Tuile('start','start.png','ville', 'route', 'prairie', 'route', false);
 // vppp_1 = new Tuile('vppp_1','vppp_1.png','ville', 'prairie', 'prairie', 'prairie', false);
 // vppp_2 = new Tuile('vppp_2','vppp_2.png','ville', 'prairie', 'prairie', 'prairie', false);
 // vppp_3 = new Tuile('vppp_3','vppp_3.png','ville', 'prairie', 'prairie', 'prairie', false);
 // vppp_4 = new Tuile('vppp_4','vppp_4.png','ville', 'prairie', 'prairie', 'prairie', false);
 // vppp_5 = new Tuile('vppp_5','vppp_5.png','ville', 'prairie', 'prairie', 'prairie', false);
 // vvvv_b = new Tuile('vvvv_b','vvvv_b.png','ville', 'ville', 'ville', 'ville', true);
 // vvrv_b_1 = new Tuile('vvrv_b_2','vvrv_b_2.png','ville', 'ville', 'route', 'ville', true);
 // vvrv_b_2 = new Tuile('vvrv_b_1','vvrv_b_1.png','ville', 'ville', 'route', 'ville', true);
 // vvrv_1 = new Tuile('vvrv_1','vvrv_1.png','ville', 'ville', 'route', 'ville', false);
 // vvpv_b = new Tuile('vvpv_b','vvpv_b.png','ville', 'ville', 'prairie', 'ville', true);
 // vvpv_1 = new Tuile('vvpv_1','vvpv_1.png','ville', 'ville', 'prairie', 'ville', false);
 // vvpv_2 = new Tuile('vvpv_2','vvpv_2.png','ville', 'ville', 'prairie', 'ville', false);
 // vvpv_3 = new Tuile('vvpv_3','vvpv_3.png','ville', 'ville', 'prairie', 'ville', false);
 // vvpp_small = new Tuile('vvpp_small','vvpp_small.png','ville', 'ville', 'prairie', 'prairie', false);
 // vvpp_b_1 = new Tuile('vvpp_b_1','vvpp_b_1.png','ville', 'ville', 'prairie', 'prairie', true);
 // vvpp_b_2 = new Tuile('vvpp_b_2','vvpp_b_2.png','ville', 'ville', 'prairie', 'prairie', true);
 // vvpp_1 = new Tuile('vvpp_1','vvpp_1.png','ville', 'ville', 'prairie', 'prairie', false);
 // vvpp_2 = new Tuile('vvpp_2','vvpp_2.png','ville', 'ville', 'prairie', 'prairie', false);
 // vvpp_3 = new Tuile('vvpp_3','vvpp_3.png','ville', 'ville', 'prairie', 'prairie', false);
 // vrrv_b_1 = new Tuile('vrrv_b_1','vrrv_b_1.png','ville', 'route', 'route', 'ville', true);
 // vrrv_b_2 = new Tuile('vrrv_b_2','vrrv_b_2.png','ville', 'route', 'route', 'ville', true);
 // vrrv_1 = new Tuile('vrrv_1','vrrv_1.png','ville', 'route', 'route', 'ville', false);
 // vrrv_2 = new Tuile('vrrv_2','vrrv_2.png','ville', 'route', 'route', 'ville', false);
 // vrrv_3 = new Tuile('vrrv_3','vrrv_3.png','ville', 'route', 'route', 'ville', false);
 // vrrr_1 = new Tuile('vrrv_1','vrrv_1.png','ville', 'route', 'route', 'route', false);
 // vrrr_2 = new Tuile('vrrv_2','vrrv_2.png','ville', 'route', 'route', 'route', false);
 // vrrr_3 = new Tuile('vrrv_3','vrrv_3.png','ville', 'route', 'route', 'route', false);
 // vrrp_1 = new Tuile('vrrp_1','vrrp_1.png','ville', 'route', 'route', 'prairie', false);
 // vrrp_2 = new Tuile('vrrp_2','vrrp_2.png','ville', 'route', 'route', 'prairie', false);
 // vrrp_3 = new Tuile('vrrp_3','vrrp_3.png','ville', 'route', 'route', 'prairie', false);
 // vrpr_1 = new Tuile('vrpr_1','vrpr_1.png','ville', 'route', 'prairie', 'route', false);
 // vrpr_2 = new Tuile('vrpr_2','vrpr_2.png','ville', 'route', 'prairie', 'route', false);
 // vrpr_3 = new Tuile('vrpr_3','vrpr_3.png','ville', 'route', 'prairie', 'route', false);
 // vpvp_1 = new Tuile('vpvp_1','vpvp_1.png','ville', 'prairie', 'ville', 'prairie', false);
 // vpvp_2 = new Tuile('vpvp_2','vpvp_2.png','ville', 'prairie', 'ville', 'prairie', false);
 // vpvp_3 = new Tuile('vpvp_3','vpvp_3.png','ville', 'prairie', 'ville', 'prairie', false);
 // vprr_1 = new Tuile('vprr_1','vprr_1.png','ville', 'prairie', 'route', 'route', false);
 // vprr_2 = new Tuile('vprr_2','vprr_2.png','ville', 'prairie', 'route', 'route', false);
 // vprr_3 = new Tuile('vprr_3','vprr_3.png','ville', 'prairie', 'route', 'route', false);
 // vppv_small = new Tuile('vppv_small','vppv_small.png','ville', 'prairie', 'prairie', 'ville', false);

 export const deck = [ pppp_1, pppp_2 ]