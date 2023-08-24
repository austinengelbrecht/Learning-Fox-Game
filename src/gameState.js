const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("Awoken");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {},
  cleanUpPoop() {},
  feed() {},
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);

export default gameState;
