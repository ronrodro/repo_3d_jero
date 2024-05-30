export class Camara {
  constructor(container) {
    console.log('init camara');
    this.camera = new THREE.PerspectiveCamera(35, container.clientWidth /     
    container.clientHeight, 0.1, 10000);
    this.camera.position.set(0, 0, 40);
  }

  GetCamara()
  {
    return this.camera;    
  }
}



