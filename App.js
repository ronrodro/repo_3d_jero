import { Camara } from './Camara.js';
import { render } from './render.js';
import { scene } from './scene.js';
import { Figuras } from './Figuras.js';
import { light2 } from './light.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { Movements } from './Movements.js';
var context;
var movements;
export class App {
  constructor(container) {
    //super();
    console.log(`init app`);
    context = this;
    movements = new Movements();
    this.container = container;
    this.camera = new Camara(this.container).GetCamara();
    this.renderer = new render(this.container).GetRender();
    this.renderer.shadowMap.enabled = true;
    this.scene = new scene().GetScene()
    this.figuras = new Figuras();
    this.light = new light2();
    let cubo = this.figuras.Cubo(12, 12, 12, 0xFF3131);
    let cubo1 = this.figuras.Cubo(2, 2, 2, 0xa6eaff);
    let cubo2 = this.figuras.Cubo(2, 2, 2, 0xa6eaff);
    let cubo3 = this.figuras.Cubo(2, 4, 2, 0x8B4513);
    let cubo4 = this.figuras.Cubo(2, 1, 12, 0x997025);
    let cubo13 = this.figuras.Cubo(7, 1, 12, 0x997025);
    let cubo14 = this.figuras.Cubo(12, 1, 12, 0xb8b8b8);
    let cubo5 = this.figuras.Cubo(105, 1, 10, 0x474745);
    let cubo6 = this.figuras.Cubo(100, 0.6, 16, 0xb8b8b8);
    let cilindro = this.figuras.Cylinder(0.3, 0.3, 0.3, 32, 0x828282);
    let cilindro1 = this.figuras.Cylinder(48, 48, 1, 100, 0x474745);
    let cilindro2 = this.figuras.Cylinder(51, 51, 0.6, 100, 0xb8b8b8);
    let cilindro3 = this.figuras.Cylinder(37, 37, 1.6, 100, 0xb8b8b8);
    let cilindro4 = this.figuras.Cylinder(33, 33, 2, 100, 0x2e942e);
    //LUCES
    let light_h = this.light.DirectionalLight();
    light_h.position.set(30, 20, 60);
    light_h.castShadow = true;
    light_h.shadow.camera.far = 60;
    light_h.shadow.camera.top = 20;
    
    let light_t = this.light.PointLight();
    light_t.position.set(-30, 20, -30);
    light_t.castShadow = true;
    // this.LightHerlperPosition(light_t);
    this.CameraHelper(light_t.shadow.camera);

    //llantas
    let cilindro5 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro6 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro7 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro8 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    //cuerpo del carro
    let cubo7 = this.figuras.Cubo(6, 2, 4, 0xFF3131);
    let cubo8 = this.figuras.Cubo(4, 2, 4, 0xFF3131);
    //ventanas del carro
    let cubo9 = this.figuras.Cubo(2, 1.5, 2, 0xa6eaff);
    let cubo10 = this.figuras.Cubo(2, 1.5, 2, 0xa6eaff);
    let cubo11 = this.figuras.Cubo(3.5, 2.5, 3.5, 0xe3de4b);
    let cubo12 = this.figuras.Cubo(3.5, 2.5, 3.5, 0xe3de4b);
    let sol = this.figuras.Sphere_real(1000,1000,1000,0xFFFF00)
    let triangulo = this.figuras.Cylinder(7, 7, 12, 3, 0x8B4513);
    //Garaje
    let cubo15 = this.figuras.Cubo(12,10,1, 0xFF3131);
    let cubo16 = this.figuras.Cubo(12,12,1, 0xFF3131);
    let cubo17 = this.figuras.Cubo(12,10,1, 0xFF3131);





    sol.position.set(0,5000,0)
    cubo5.position.set(0, -0.2, 26);
    cubo6.position.set(0, -0.2, 26);
    cubo3.position.set(0, 2, 5.05);
    cubo4.position.set(0, -0.2, 12);
    cubo13.position.set(12, -0.2, 12);
    cubo14.position.set(12, -0.2, 0);
    cubo7.position.set(2, 2, 26);
    cubo8.position.set(2, 4, 26);
    cubo9.position.set(1.5, 3.8, 27.05);
    cubo10.position.set(1.5, 3.8, 24.95);
    cubo11.position.set(2.3, 3.5, 26);
    cubo12.position.set(1.7, 3.5, 26);
    cubo15.position.set(12,5,-5.5)
    cubo16.position.set(12,10,0)
    cubo17.position.set(17.5,5,0)
    triangulo.position.set(0, 15.5, 0);
    cilindro.position.set(0.5, 2, 6);
    cilindro1.position.set(-100, -0.2, 26);
    cilindro2.position.set(-100, -0.2, 26);
    cilindro3.position.set(-100, -0.2, 26);
    cilindro4.position.set(-100, -0.2, 26);
    cubo2.position.set(-3, 6, 5.05);
    cubo1.position.set(3, 6, 5.05);
    cubo.position.set(0, 6, 0);
    let plane = this.figuras.Plane(1200, 0x39FF14);
    plane.rotateX(THREE.MathUtils.degToRad(90))
    plane.receiveShadow = true;
    cilindro.rotateX(THREE.MathUtils.degToRad(90))
    triangulo.rotateX(THREE.MathUtils.degToRad(270))
    cubo17.rotateY(THREE.MathUtils.degToRad(90))
    cubo16.rotateX(THREE.MathUtils.degToRad(90))
    //let arbol = this.Arbol(-12, 3, 6, directional_light_house);
    //let arbol_cuatro = this.Arbol(-16, 3, 2, directional_light_house);
    this.scene.add(cubo6);
    this.scene.add(cubo13);
    this.scene.add(cubo14);
    this.scene.add(cubo15);
    this.scene.add(cubo16);
    this.scene.add(cubo17);
    this.scene.add(cubo5);
    this.scene.add(plane); //TERRENO
    this.scene.add(this.Casa(
      { x: 0, y: 15.5, z: 0 }, 
      { x: 0, y: 6, z: 0 }, 
      { x: 3, y: 6, z: 5.05 }, 
      { x: -3, y: 6, z: 5.05 }, 
      { x: 0.5, y: 2, z: 6 }, 
      { x: 0, y: 2, z: 5.05 },
    )); 
    
    this.blue_car = this.Carro(
      { x: 4, y: 1.27, z: 28 }, 
      { x: 0, y: 1.27, z: 28 },
      { x: 4, y: 1.27, z: 24 }, 
      { x: 0, y: 1.27, z: 24 }, 
      { x: 2, y: 2, z: 26 }, 
      { x: 2, y: 4, z: 26 }, 
      { x: 1.5, y: 3.8, z: 27.05 },
      { x: 1.5, y: 3.8, z: 24.95 }, 
      { x: 2.3, y: 3.5, z: 26 }, 
      { x: 1.7, y: 3.5, z: 26 }, 
      0x00A6FF,  //COLOR DEL CARRO
      { x: -1.01, y: 2, z: 27.3 },
      { x: -1.01, y: 2, z: 24.8 },
      { x: 5.01, y: 2, z: 27.4 },
      { x: 5.01, y: 2, z: 24.6 },
      0xFFFFFF, //COLOR DE LAS LUCES DELANTERAS
      0xFFFF00 //COLOR DE LAS LUCES TRASERAS
    );
    
    this.blue_car.rotateY(THREE.MathUtils.degToRad(90));
    this.blue_car.position.set(-14, 0, 0)
    //this.scene.add(ambiental_light_house, directional_light_house);
    this.scene.add(cilindro1);
    this.scene.add(sol);
    this.scene.add(cilindro2);
    this.scene.add(cilindro3);
    this.scene.add(cilindro4);
    this.scene.add(this.blue_car);
    this.scene.add(cubo4);
    //this.scene.add(arbol);
    //this.scene.add(arbol_dos);
    //this.scene.add(arbol_tres);
    //this.scene.add(arbol_cuatro);
    this.scene.add(this.Cebra(-62, 0, 19.5, false));
    this.scene.add(this.Cebra(-62, 0, 32.5, false));
    this.scene.add(this.Cebra(-49, 0, 22, true));
    this.scene.add(light_h);
    this.Init();
  }
  onDocumentKeyDown(e) 
  {
    var keyCode = e.which;
    console.log(keyCode);
     switch (keyCode) {
     case 87: // W
       movements.MoveObject('up', 1, context.blue_car);
       break;
     case 83: // S
       movements.MoveObject('down', 1, context.blue_car);
       break;
     case 65: //A
       movements.MoveObject('right', 1, context.blue_car);
       context.blue_car.rotation.y += 0.005;
       break; 
       case 68: //D
       movements.MoveObject('left', 1, context.blue_car);
        
       context.blue_car.rotation.y -= 0.005;
         break;
         case 32: //SPACE
          movements.MoveObject("space",1,context.blue_car)
          break;
    }
    console.log(keyCode);
  }
  Init() {
    const control = new OrbitControls(this.camera, this.container)
    document.addEventListener('keydown', this.onDocumentKeyDown, false);
    control.update()
    const update = () => {
      this.renderer.render(this.scene, this.camera);
      this.renderer.setAnimationLoop(() => update());
      TWEEN.update();
    }
    update();
  }
  Tronco(x, y, z, light = false) {
    let tronco = this.figuras.Cylinder(1, 1, 6, 64, 0x8B4513, light);
    tronco.position.set(x, y, z); // X - Y - Z
    return tronco;
  }
  Arbusto(x, y, z, light = false) {
    let arbusto = this.figuras.Cylinder(0, 5, 8, 64, 0x008000, light);
    arbusto.position.set(x, y, z); // X - Y - Z
    return arbusto;
  }
  Linea(x, y, z, vertical) {
    let linea = this.figuras.Cubo(3, 1.6, 1, 0xd6d6d4);
    linea.position.set(x, y, z); // X - Y - Z
    if (vertical == false) {
      linea.rotateY(THREE.MathUtils.degToRad(90))
    }
    else {
      linea.rotateX(THREE.MathUtils.degToRad(180))
    }
    return linea;
  }
  Cebra(x, y, z, vertical) {
    let cebra = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      if (vertical == true) {
        let init = z;
        let count = 2 * i;
        cebra.add(this.Linea(x, y, init + count, vertical))
      }
      else {
        let init = x;
        let count = 2 * i;
        cebra.add(this.Linea(init + count, y, z, vertical))
      }
    }
    return cebra;
  }
  Arbol(x, y, z, light = false) {
    let arbol = new THREE.Group();
    let tronco = this.Tronco(x, y, z, light);
    let arbusto = this.Arbusto(x, y + 7, z, light);
    arbol.add(tronco);
    arbol.add(arbusto);
    arbol.castShadow = true;
    return arbol;
  }
  Techo(posicion, light = false) {
    let triangulo = this.figuras.Cylinder(7, 7, 12, 3, 0x8B4513, light);
    triangulo.position.set(posicion.x, posicion.y, posicion.z);
    triangulo.rotateX(THREE.MathUtils.degToRad(270))
    triangulo.castShadow = true;
    return triangulo;
  }
  CuerpoCasa(posicion, light = false) {
    let cubo = this.figuras.Cubo(12, 12, 12, 0xFF3131, light);
    cubo.position.set(posicion.x, posicion.y, posicion.z); //X - Y / Z;
    cubo.castShadow = true;
    return cubo;
  }
  Ventana(posicion) {
    let ventana = this.figuras.Cubo(2, 2, 2, 0xa6eaff);
    ventana.position.set(posicion.x, posicion.y, posicion.z);
    return ventana;
  }
  ManijaPuerta(posicion) {
    let manija = this.figuras.Cylinder(0.3, 0.3, 0.3, 32, 0x828282);
    manija.position.set(posicion.x, posicion.y, posicion.z);
    manija.rotateX(THREE.MathUtils.degToRad(90))
    return manija
  }
  Puerta(posicion) {
    let puerta = this.figuras.Cubo(2, 4, 2, 0x8B4513);
    puerta.position.set(posicion.x, posicion.y, posicion.z);
    return puerta
  }
  Casa(techo_posicion, cuerpo_posicion, ventana_posicion, ventana_dr_posicion, manija_posicion, puerta_posicion) {
    let techo = this.Techo(techo_posicion, true);
    let cuerpo = this.CuerpoCasa(cuerpo_posicion, true);
    let ventana_iz = this.Ventana(ventana_posicion);
    let ventana_dr = this.Ventana(ventana_dr_posicion);
    let manija = this.ManijaPuerta(manija_posicion);
    let puerta = this.Puerta(puerta_posicion);
    let casa = new THREE.Group();
    casa.add(techo, cuerpo, ventana_iz, ventana_dr, manija, puerta);
    return casa;
  }
  Carro(llanta_derecha_1, llanta_derecha_2, llanta_izq_1, llanta_izq_2, cuerpo_abajo, cuerpo_arriba
    , ven_izq, ven_der, ven_atr, ven_adel, color = 0xFF3131, luz_delantera, luz_delantera_2, luz_trasera, luz_trasera_2, color_delantera, color_trasera) {
    let cilindro5 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro6 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro7 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cilindro8 = this.figuras.Cylinder(1, 1, 1, 100, 0x363431);
    let cubo7 = this.figuras.Cubo(6, 2, 4, color);
    let cubo8 = this.figuras.Cubo(4, 2, 4, color);
    let cubo9 = this.figuras.Cubo(2, 1.5, 2, 0xa6eaff);
    let cubo10 = this.figuras.Cubo(2, 1.5, 2, 0xa6eaff);
    let cubo11 = this.figuras.Cubo(3.5, 2.5, 3.5, 0xa6eaff);
    let cubo12 = this.figuras.Cubo(3.5, 2.5, 3.5, 0xa6eaff);
    cilindro5.position.set(llanta_derecha_1.x, llanta_derecha_1.y, llanta_derecha_1.z); //x y z
    cilindro6.position.set(llanta_derecha_2.x, llanta_derecha_2.y, llanta_derecha_2.z);
    cilindro7.position.set(llanta_izq_1.x, llanta_izq_1.y, llanta_izq_1.z);
    cilindro8.position.set(llanta_izq_2.x, llanta_izq_2.y, llanta_izq_2.z);
    cilindro5.rotateX(THREE.MathUtils.degToRad(90))
    cilindro6.rotateX(THREE.MathUtils.degToRad(90))
    cilindro7.rotateX(THREE.MathUtils.degToRad(90))
    cilindro8.rotateX(THREE.MathUtils.degToRad(90))
    cubo7.position.set(cuerpo_abajo.x, cuerpo_abajo.y, cuerpo_abajo.z);
    cubo8.position.set(cuerpo_arriba.x, cuerpo_arriba.y, cuerpo_arriba.z);
    cubo9.position.set(ven_izq.x, ven_izq.y, ven_izq.z); 
    cubo10.position.set(ven_der.x, ven_der.y, ven_der.z); 
    cubo11.position.set(ven_atr.x, ven_atr.y, ven_atr.z);
    cubo12.position.set(ven_adel.x, ven_adel.y, ven_adel.z);
    let luz1 = this.figuras.Sphera(0.5, color_delantera);
    let luz2 = this.figuras.Sphera(0.5, color_delantera);
    let luz3 = this.figuras.Sphera(0.5, color_trasera);
    let luz4 = this.figuras.Sphera(0.5, color_trasera);
    luz1.position.set(luz_delantera.x, luz_delantera.y, luz_delantera.z); 
    luz2.position.set(luz_delantera_2.x, luz_delantera_2.y, luz_delantera_2.z); //{x: -1.01, y: 2, z: 24.8}
    luz3.position.set(luz_trasera.x, luz_trasera.y, luz_trasera.z);
    luz4.position.set(luz_trasera_2.x, luz_trasera_2.y, luz_trasera_2.z);
    luz1.rotateY(THREE.MathUtils.degToRad(270))
    luz2.rotateY(THREE.MathUtils.degToRad(270))
    luz3.rotateY(THREE.MathUtils.degToRad(90))
    luz4.rotateY(THREE.MathUtils.degToRad(90))
    let carro = new THREE.Group();
    carro.add(cilindro5, cilindro6, cilindro7, cilindro8, cubo7, cubo8, cubo9, cubo10, cubo11, cubo12, luz1, luz2, luz3, luz4)
    return carro;
  }
  LightHerlperPosition(directionalLigth) {
    const directionalLight = new THREE.DirectionalLightHelper(directionalLigth);
    this.scene.add(directionalLight);
  }
  CameraHelper(camera) {
    const c_helper = new THREE.CameraHelper(camera);
    this.scene.add(c_helper);
  }
}