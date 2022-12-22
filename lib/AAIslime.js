import Slime from './slime';

class AAISlime extends Slime {
  constructor(options){
    super(options);
  }

  move(timeDelta){
    const NORMAL_FRAME_TIME_DELTA = 1000/this.game.frames;
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel['x'] * velocityScale,
      offsetY = this.vel['y'] * velocityScale;
    this.pos = {'x': this.pos['x'] + offsetX, 'y': this.pos['y'] + offsetY};
    this.checkMoves();
  }

  drawLeftEye(ctx){
    ctx.moveTo(this.pos['x'] + 2*this.radius/3, this.pos['y'] - this.radius/3);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.pos['x'] + 2*this.radius/3, this.pos['y'] - this.radius/2, 6, 0, 2 * Math.PI, true
    );
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(
      3 * Math.cos(this.angletoPuck()) + (this.pos['x'] + 2*this.radius/3),
      3 * Math.sin(this.angletoPuck()) + (this.pos['y'] - this.radius/2),
      3, 0, 2 * Math.PI, false
    );
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(this.pos['x'] + this.radius/3, this.pos['y'] - this.radius );
    ctx.strokeStyle ="black";
    ctx.lineWidth = 3;
    ctx.lineTo(this.pos['x'] + this.radius, this.pos['y'] - this.radius/3);
    ctx.stroke();
  }

  drawRightEye(ctx) {
    ctx.moveTo(this.pos['x'] - 2*this.radius/3, this.pos['y'] - this.radius/2);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.pos['x'] - 2*this.radius/3, this.pos['y'] - this.radius/2, 6, 0, 2 * Math.PI, true
    );
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(
      3 * Math.cos(this.angletoPuck()) + (this.pos['x'] - 2*this.radius/3),
      3 * Math.sin(this.angletoPuck()) + (this.pos['y'] - this.radius/2),
      3, 0, 2 * Math.PI, true
    );
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(this.pos['x'] - this.radius/3, this.pos['y'] - this.radius );
    ctx.strokeStyle ="black";
    ctx.lineWidth = 3;
    ctx.lineTo(this.pos['x'] - this.radius, this.pos['y'] - this.radius/3);
    ctx.stroke();
  }


  checkMoves() {
    const angle = this.angletoPuck();
    this.vel['x'] += Math.cos(angle)/2;
    this.vel['y'] += Math.sin(angle)/2;
  }
}

export default AAISlime;
