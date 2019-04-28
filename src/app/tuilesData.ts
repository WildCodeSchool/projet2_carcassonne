
export class Tuile {

  static readonly SideKeys: string[] = ["top", "left", "bottom", "right"]
  static readonly RotationKeys: number[] = [0, 90, 180, 270]

    constructor (
      
    public name: string,
    public img: any,
    public top: string,
    public right: string,
    public bottom: string,
    public left: string,
    public shield: boolean,
    public rotation = 0,
    public iPos:number = 0,
    public jPos:number = 0,
    public position:string = "Aucun"
    
    ) {}

     getSideKeys(side:string, rotation:number, currentTile) {
      // console.log(`côté à tester : ${side}`)
      let sidePos = Tuile.SideKeys.indexOf(side)
      // console.log(`position du côté à tester : ${sidePos}`)
      let rotationPos = Tuile.RotationKeys.indexOf(rotation)
      // console.log(`valeur de la rotation : ${rotation}`)
      // console.log(`position dans le tableau rotation : ${rotationPos}`)
      let newKeys = Tuile.SideKeys[(sidePos + rotationPos) % Tuile.SideKeys.length]
      // console.log(`newKeys : ${newKeys}`)
      // console.log(`valeur du nouveau côté : ${currentTile[newKeys]}`)
      // console.log(`-----------------------`)
      return currentTile[newKeys]
    }
  }


 let pppp_1 = new Tuile('pppp_1','../assets/Tiles/pppp-1.png','prairie', 'prairie', 'prairie', 'prairie', false);
 let pppp_2 = new Tuile('pppp_2','../assets/Tiles/pppp-2.png','prairie', 'prairie', 'prairie', 'prairie', false);
 let pppp_3 = new Tuile('pppp_3','../assets/Tiles/pppp-3.png','prairie', 'prairie', 'prairie', 'prairie', false);
 let pppp_4 = new Tuile('pppp_4','../assets/Tiles/pppp-4.png','prairie', 'prairie', 'prairie', 'prairie', false);
 let pprp_1 = new Tuile('pprp_1','../assets/Tiles/pprp-1.png','prairie', 'prairie', 'route', 'prairie', false);
 let pprp_2 = new Tuile('pprp_2','../assets/Tiles/pprp-2.png','prairie', 'prairie', 'route', 'prairie', false);
 let pprr_1 = new Tuile('pprr_1','../assets/Tiles/pprr-1.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_2 = new Tuile('pprr_2','../assets/Tiles/pprr-2.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_3 = new Tuile('pprr_3','../assets/Tiles/pprr-3.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_4 = new Tuile('pprr_4','../assets/Tiles/pprr-4.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_5 = new Tuile('pprr_5','../assets/Tiles/pprr-5.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_6 = new Tuile('pprr_6','../assets/Tiles/pprr-6.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_7 = new Tuile('pprr_7','../assets/Tiles/pprr-7.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_8 = new Tuile('pprr_8','../assets/Tiles/pprr-8.png','prairie', 'prairie', 'route', 'route', false);
 let pprr_9 = new Tuile('pprr_9','../assets/Tiles/pprr-9.png','prairie', 'prairie', 'route', 'route', false);
 let prrr_1 = new Tuile('prrr_1','../assets/Tiles/prrr-1.png','prairie', 'route', 'route', 'route', false);
 let prrr_2 = new Tuile('prrr_2','../assets/Tiles/prrr-2.png','prairie', 'route', 'route', 'route', false);
 let prrr_3 = new Tuile('prrr_3','../assets/Tiles/prrr-3.png','prairie', 'route', 'route', 'route', false);
 let prrr_4 = new Tuile('prrr_4','../assets/Tiles/prrr-4.png','prairie', 'route', 'route', 'route', false);
 let pvpv_1 = new Tuile('pvpv_1','../assets/Tiles/pvpv-1.png','prairie', 'ville', 'prairie', 'ville', false);
 let pvpv_2 = new Tuile('pvpv_2','../assets/Tiles/pvpv-2.png','prairie', 'ville', 'prairie', 'ville', false);
 let pvpv_b = new Tuile('pvpv_b','../assets/Tiles/pvpv-b.png','prairie', 'ville', 'prairie', 'ville', true);
 let rprp_1 = new Tuile('rprp_1','../assets/Tiles/rprp-1.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_2 = new Tuile('rprp_2','../assets/Tiles/rprp-2.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_3 = new Tuile('rprp_3','../assets/Tiles/rprp-3.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_4 = new Tuile('rprp_4','../assets/Tiles/rprp-4.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_5 = new Tuile('rprp_5','../assets/Tiles/rprp-5.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_6 = new Tuile('rprp_6','../assets/Tiles/rprp-6.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_7 = new Tuile('rprp_7','../assets/Tiles/rprp-7.png','route', 'prairie', 'route', 'prairie', false);
 let rprp_8 = new Tuile('rprp_8','../assets/Tiles/rprp-8.png','route', 'prairie', 'route', 'prairie', false);
 let rrrr = new Tuile('rrrr','../assets/Tiles/rrrr.png','route', 'route', 'route', 'route', false);
 let vppp_1 = new Tuile('vppp_1','../assets/Tiles/vppp-1.png','ville', 'prairie', 'prairie', 'prairie', false);
 let vppp_2 = new Tuile('vppp_2','../assets/Tiles/vppp-2.png','ville', 'prairie', 'prairie', 'prairie', false);
 let vppp_3 = new Tuile('vppp_3','../assets/Tiles/vppp-3.png','ville', 'prairie', 'prairie', 'prairie', false);
 let vppp_4 = new Tuile('vppp_4','../assets/Tiles/vppp-4.png','ville', 'prairie', 'prairie', 'prairie', false);
 let vppp_5 = new Tuile('vppp_5','../assets/Tiles/vppp-5.png','ville', 'prairie', 'prairie', 'prairie', false);
 let vvvv_b = new Tuile('vvvv_b','../assets/Tiles/vvvv-b.png','ville', 'ville', 'ville', 'ville', true);
 let vvrv_b_1 = new Tuile('vvrv_b_2','../assets/Tiles/vvrv-b-2.png','ville', 'ville', 'route', 'ville', true);
 let vvrv_b_2 = new Tuile('vvrv_b_1','../assets/Tiles/vvrv-b-1.png','ville', 'ville', 'route', 'ville', true);
 let vvrv_1 = new Tuile('vvrv_1','../assets/Tiles/vvrv-1.png','ville', 'ville', 'route', 'ville', false);
 let vvpv_b = new Tuile('vvpv_b','../assets/Tiles/vvpv-b.png','ville', 'ville', 'prairie', 'ville', true);
 let vvpv_1 = new Tuile('vvpv_1','../assets/Tiles/vvpv-1.png','ville', 'ville', 'prairie', 'ville', false);
 let vvpv_2 = new Tuile('vvpv_2','../assets/Tiles/vvpv-2.png','ville', 'ville', 'prairie', 'ville', false);
 let vvpv_3 = new Tuile('vvpv_3','../assets/Tiles/vvpv-3.png','ville', 'ville', 'prairie', 'ville', false);
 let vvpp_small = new Tuile('vvpp_small','../assets/Tiles/vvpp-small.png','ville', 'ville', 'prairie', 'prairie', false);
 let vvpp_b_1 = new Tuile('vvpp_b_1','../assets/Tiles/vvpp-b-1.png','ville', 'ville', 'prairie', 'prairie', true);
 let vvpp_b_2 = new Tuile('vvpp_b_2','../assets/Tiles/vvpp-b-2.png','ville', 'ville', 'prairie', 'prairie', true);
 let vvpp_1 = new Tuile('vvpp_1','../assets/Tiles/vvpp-1.png','ville', 'ville', 'prairie', 'prairie', false);
 let vvpp_2 = new Tuile('vvpp_2','../assets/Tiles/vvpp-2.png','ville', 'ville', 'prairie', 'prairie', false);
 let vvpp_3 = new Tuile('vvpp_3','../assets/Tiles/vvpp-3.png','ville', 'ville', 'prairie', 'prairie', false);
 let vrrv_b_1 = new Tuile('vrrv_b_1','../assets/Tiles/vrrv-b-1.png','ville', 'route', 'route', 'ville', true);
 let vrrv_b_2 = new Tuile('vrrv_b_2','../assets/Tiles/vrrv-b-2.png','ville', 'route', 'route', 'ville', true);
 let vrrv_1 = new Tuile('vrrv_1','../assets/Tiles/vrrv-1.png','ville', 'route', 'route', 'ville', false);
 let vrrv_2 = new Tuile('vrrv_2','../assets/Tiles/vrrv-2.png','ville', 'route', 'route', 'ville', false);
 let vrrv_3 = new Tuile('vrrv_3','../assets/Tiles/vrrv-3.png','ville', 'route', 'route', 'ville', false);
 let vrrr_1 = new Tuile('vrrr_1','../assets/Tiles/vrrr-1.png','ville', 'route', 'route', 'route', false);
 let vrrr_2 = new Tuile('vrrr_2','../assets/Tiles/vrrr-2.png','ville', 'route', 'route', 'route', false);
 let vrrr_3 = new Tuile('vrrr_3','../assets/Tiles/vrrr-3.png','ville', 'route', 'route', 'route', false);
 let vrrp_1 = new Tuile('vrrp_1','../assets/Tiles/vrrp-1.png','ville', 'route', 'route', 'prairie', false);
 let vrrp_2 = new Tuile('vrrp_2','../assets/Tiles/vrrp-2.png','ville', 'route', 'route', 'prairie', false);
 let vrrp_3 = new Tuile('vrrp_3','../assets/Tiles/vrrp-3.png','ville', 'route', 'route', 'prairie', false);
 let vrpr_1 = new Tuile('vrpr_1','../assets/Tiles/vrpr-1.png','ville', 'route', 'prairie', 'route', false);
 let vrpr_2 = new Tuile('vrpr_2','../assets/Tiles/vrpr-2.png','ville', 'route', 'prairie', 'route', false);
 let vrpr_3 = new Tuile('vrpr_3','../assets/Tiles/vrpr-3.png','ville', 'route', 'prairie', 'route', false);
 let vpvp_1 = new Tuile('vpvp_1','../assets/Tiles/vpvp-1.png','ville', 'prairie', 'ville', 'prairie', false);
 let vpvp_2 = new Tuile('vpvp_2','../assets/Tiles/vpvp-2.png','ville', 'prairie', 'ville', 'prairie', false);
 let vpvp_3 = new Tuile('vpvp_3','../assets/Tiles/vpvp-3.png','ville', 'prairie', 'ville', 'prairie', false);
 let vprr_1 = new Tuile('vprr_1','../assets/Tiles/vprr-1.png','ville', 'prairie', 'route', 'route', false);
 let vprr_2 = new Tuile('vprr_2','../assets/Tiles/vprr-2.png','ville', 'prairie', 'route', 'route', false);
 let vprr_3 = new Tuile('vprr_3','../assets/Tiles/vprr-3.png','ville', 'prairie', 'route', 'route', false);
 let vppv_small = new Tuile('vppv_small','../assets/Tiles/vppv-small.png','ville', 'prairie', 'prairie', 'ville', false);
 let start = new Tuile('start','../assets/Tiles/start.png','ville', 'route', 'prairie', 'route', false);

 export const tilesDeck = [ 
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
  vppv_small,
]

export const startTile = [ 
  start
]