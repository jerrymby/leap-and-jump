import Box from './Box';
import {BoxGeometry, Mesh, MeshPhongMaterial, TextureLoader} from "three";
import {recreateCubeUV, LEFT, TOP, BEHIND} from '../util/MapUtil';
import express1 from '../res/images.png';

export default class ExpressBox extends Box {
  constructor(prev) {
    super(prev)
  }

  initBox() {
    const geometry = new BoxGeometry(25, this.height, 25);
    const material = new MeshPhongMaterial({
      map: new TextureLoader().load(express1),
      //color: 0xffffff,  // 基础颜色
      specular: 0xeeeeee,  // 高光部分的颜色
      shininess: 100,  // 高光的亮度，数值越高高光越亮
      reflectivity: 0.5  // 反射率
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
