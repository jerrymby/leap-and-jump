/*
import Box from './Box';
import {BoxBufferGeometry, Mesh, MeshLambertMaterial, MeshStandardMaterial, MeshPhongMaterial} from "three/src/Three";

export default class CubeBox extends Box {
  constructor(prev) {
    super(prev)
  }

  // 生成盒子
  initBox() {
    const geometry = new BoxBufferGeometry(this.size, this.height, this.size);
    const material = new MeshPhongMaterial({color: this.color,});

    geometry.translate(0, this.height/2, 0);
    this.mesh = new Mesh(geometry, material);
  }
}
*/
import Box from './Box';
import {BoxGeometry, Mesh, MeshLambertMaterial, TextureLoader} from "three";
import {recreateCubeUV, LEFT, TOP, BEHIND} from '../util/MapUtil';
import express1 from '../res/rock.png';

export default class ExpressBox extends Box {
  constructor(prev) {
    super(prev)
  }

  initBox() {
    const geometry = new BoxGeometry(25, this.height, 25);
    const material = new MeshLambertMaterial({
      map: new TextureLoader().load(express1),
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
