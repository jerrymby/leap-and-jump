import Box from './Box';
import { CylinderGeometry, Mesh, MeshLambertMaterial, TextureLoader } from "three";
import cylinderTexture from '../res/express1.png'; // 假设你有一个圆柱体纹理图像

export default class CylinderBox extends Box {
  constructor(prev) {
    super(prev)
  }

  initBox() {
    const geometry = new CylinderGeometry(this.size/2, this.size/2, this.height, 50);
    const material = new MeshLambertMaterial({
      map: new TextureLoader().load(cylinderTexture),
    });

    geometry.translate(0, this.height/2, 0);

    this.mesh = new Mesh(geometry, material);
  }
}

