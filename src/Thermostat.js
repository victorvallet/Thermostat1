class Thermostat {
  constructor() {
    this.degrees = 20
  }

  increase(num) {
    this.degrees += num;
  }

  decrease(num) {
    this.degrees -= num;
  }
};
