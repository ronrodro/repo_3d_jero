export class scene {
  constructor() {
    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color(0xFA8072);
    this.scene.background = new THREE.Color('skyblue');
    console.log("init scene")
  }
  GetScene() {
    return this.scene;
  }
}