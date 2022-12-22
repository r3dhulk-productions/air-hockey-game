import Slime from "./slime";

class BAISlime extends Slime {
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
    ctx.fillStyle = 'red';
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.pos['x'] + 2*this.radius/3, this.pos['y'] - this.radius/2, 6, 0, 2 * Math.PI, true
    );
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(this.pos['x'] + this.radius/3, this.pos['y'] - this.radius );
    ctx.strokeStyle ="black";
    ctx.lineWidth = 3;
    ctx.lineTo(this.pos['x'] + this.radius, this.pos['y'] - this.radius/3);
    ctx.stroke();
  }

  drawRightEye(ctx) {
    ctx.moveTo(this.pos['x'] - 2*this.radius/3, this.pos['y'] - this.radius/2);
    ctx.fillStyle = 'red';
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      this.pos['x'] - 2*this.radius/3, this.pos['y'] - this.radius/2, 6, 0, 2 * Math.PI, true
    );
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(this.pos['x'] - this.radius/3, this.pos['y'] - this.radius );
    ctx.strokeStyle ="black";
    ctx.lineWidth = 3;
    ctx.lineTo(this.pos['x'] - this.radius, this.pos['y'] - this.radius/3);
    ctx.stroke();
  }

  checkMoves() {
    const angle = this.angletoSlime();
    this.vel['x'] += Math.cos(angle)/2;
    this.vel['y'] += Math.sin(angle)/2;
    if (this.isCollidedWith(this.otherSlime)){
      this.otherSlime.vel['x'] *= 1.2;
      this.otherSlime.vel['y'] *= 1.2;
    }
  }

  angletoSlime() {
    this.otherSlime = this.game.slimes.filter((slime) => slime.startPos !== this.startPos)[0];
    const xdiff = this.otherSlime.pos['x'] - this.pos['x'];
    const ydiff = this.otherSlime.pos['y'] - this.pos['y'];
    const angle = Math.atan2(ydiff, xdiff);
    return angle;
  }


}

export default BAISlime;
