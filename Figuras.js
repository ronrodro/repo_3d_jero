export class Figuras {
  constructor() {
    console.log("int figuras")
  }
  

  Sphera(radio, color) {
    const radius = radio; // Radio del círculo
    const segments = 64;
    // Crear geometría de círculo
    const geometry_c = new THREE.CircleGeometry(radius, segments);// Crear material (por ejemplo, un material básico de color rojo)
    const material_c = new THREE.MeshBasicMaterial({ color: color });
    const circle = new THREE.Mesh(geometry_c, material_c);

    circle.name = "sphera_jero";
    return circle;
  }

  Sphere_real(radio, w, h, color)
  {
    // Creación de la esfera
    const geometry = new THREE.SphereGeometry(radio, w, h); // Radio, segmentos horizontales, segmentos verticales
    const material = new THREE.MeshBasicMaterial({ color: color }); // Color rojo
    const esfera = new THREE.Mesh(geometry, material);

    return esfera;
  }

  Cubo(sizeW, sizeY, sizeZ, color, standard = false) {
    const geometry = new THREE.BoxBufferGeometry(sizeW, sizeY, sizeZ); //W H Z
    let material;
    if (!standard) {
      material = new THREE.MeshBasicMaterial({ color: color, isde: THREE.DoubleSide });
      material.receiveShadow = true;
      material.castShadow = true;
    }
    else {
      material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color).convertSRGBToLinear(),
        flatShading: true,
        roughness: .5
      });
    }
    const cube = new THREE.Mesh(geometry, material);
    cube.name = "box_jero";
    return cube;
  }

  Plane(size, color) {
    const geometry = new THREE.PlaneGeometry(size, size);  // W H
    const material = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;
    return plane
  }
  Cylinder(sizeX, sizeY, sizeZ, caras, color, standard = false) {
    const geometry = new THREE.CylinderGeometry(sizeX, sizeY, sizeZ, caras);
    let material;
    if (!standard) {
      material = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
    }
    else {
      material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color).convertSRGBToLinear(),
        flatShading: true,
        roughness: .5
      });
    }
    const cylinder = new THREE.Mesh(geometry, material);
    return cylinder
  }
}