import gameState from "./gameState";
import initButtons from "./buttons";
import { TICKRATE } from "./constants";

async function init() {
  console.log("Starting Game");
  initButtons(gameState.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICKRATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
