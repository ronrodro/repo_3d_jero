export class light2 {

  constructor() {
    console.log("Init Light");
  }
  AmbientalLight() {
    const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
    return light;
  }

  DirectionalLight(x = 20, y = 30, z = 12) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(x, y, z);// X - Z - Y

    return directionalLight;
  }

  PointLight(x = 20, y = 30, z = 12) 
  {
    const directionalLight = new THREE.PointLight(0xffffff, 1, 100);
    directionalLight.position.set(x, y, z);// X - Z - Y

    return directionalLight;
  }
}