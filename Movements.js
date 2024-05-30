export class Movements
{
  constructor()
  {
    console.log(`Movements Init `);    
  }

  MoveObject(direction, distance, control) 
  {
    const start = {
      x: control.position.x,
      y: control.position.y,
      z: control.position.z
    };

    const end = Object.assign({}, start);

    switch (direction) 
    {
      case 'up':
        end.z += distance;
        break;
      case 'down':
        end.z -= distance;
        break;
      case 'left':
        end.x -= distance;
        break;
      case 'right':
        end.x += distance;
        break;
      case "space":
        end.y += distance;
        break;
    }

    const tween = new TWEEN.Tween(start)
    .to(end, 700) // Mueve el cubo en 1000 milisegundos
    .onUpdate(() => {
      control.position.set(start.x, start.y, start.z);
    })
    .easing(TWEEN.Easing.Quadratic.Out) // Easing para suavizar el movimiento
    .start();
  }
}