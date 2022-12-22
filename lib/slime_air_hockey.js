import Game from './game';
import GameView from './game_view';


document.addEventListener('DOMContentLoaded', () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  let ctx = canvasEl.getContext('2d');
  const game = new Game(ctx);
  new GameView(game, ctx).menu();
});
