class Thermostat {
  constructor() {
    this.degrees = 20
  }

  increase(num) {
    this.degrees += num;
  }

  decrease(num) {
    if ((this.degrees - num) < 10) {
      this.degrees = 10
      throw new Error('you reached the minimum temperature')
    }
    this.degrees -= num;
  }
};
