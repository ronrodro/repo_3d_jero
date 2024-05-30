export class render
{
  constructor(container)
  {
    console.log('init render');
    this.render = new THREE.WebGLRenderer({
                                           antialias: true, 
                                           //alpha: true, 
                                           canvas: container

                                         });
    this.render.shadowMap.enabled = true;
    //this.render.setSize(container.clientWidth, container.clientHeight);
    this.render.setSize(window.innerWidth, window.innerHeight);
  }

  GetRender()
  {
    return this.render;
  }
}