import Box from './Box';
import {BoxGeometry, Mesh, MeshLambertMaterial, MeshStandardMaterial, TextureLoader} from "three";
import {recreateCubeUV, LEFT, TOP, BEHIND} from '../util/MapUtil';
import express from '../res/express.png';
import express_dis from '../res/express_dis.png';
import express_bump from '../res/express_bump.png';
import express1 from '../res/express1.png';
import images from '../res/images.png';

export default class ExpressBox extends Box {
  constructor(prev) {
    super(prev)
  }

  initBox() {
    const geometry = new BoxGeometry(25, this.height, 25);

    // const material = new MeshStandardMaterial({
    //   map: new TextureLoader().load(express),
    //   bumpMap: new TextureLoader().load(express_bump),
    //   bumpScale: 5,
    //   displacementMap: new TextureLoader().load(express_dis),
    //   displacementScale: 0.1,
    // });

    const material = new MeshLambertMaterial({
      map: new TextureLoader().load(images),
    });

    geometry.translate(0, this.height/2, 0);

    // 裁剪贴图
    recreateCubeUV(428, 428, geometry, LEFT, 0, 0, 280, 148);
    recreateCubeUV(428, 428, geometry, TOP, 0, 428, 280, 148);
    recreateCubeUV(428, 428, geometry, BEHIND, 280, 148, 428, 428);

    // 生成网格
    this.mesh = new Mesh(geometry, material);
  }

}
