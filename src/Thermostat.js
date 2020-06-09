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

  resetDegrees() {
    this.degrees = 20
  }

  currentUsage() {
    if (this.degrees < 18) {
      return "low-usage"
    }
    else if (this.degrees < 25) {
      return "medium-usage"
    }
    else {
      return "high-usage"
    }
  }

  _isSavingMode(boolean = true) {
    if (boolean) {
      this.max = 25;
    }
    else {
      this.max = 32;
    }
  }


};
