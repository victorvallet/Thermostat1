class Thermostat {
  constructor() {
    this.degrees = 20
    this.max = null
    this.min = 10
  }

  increase(num) {
    this.degrees += num;
  }

  decrease(num) {
    if ((this.degrees - num) < this.min) {
      this.degrees = this.min
      throw new Error('you reached the minimum temperature')
    }
    this.degrees -= num;
  }

  isSavingMode(boolean) {
    if (boolean) {
      this.max = 25;
    }
    else {
      this.max = 32;
    }

  }
};
