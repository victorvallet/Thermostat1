class Thermostat {
  constructor() {
    this.degrees = 20
    this.max = 25
    this.min = 10
    this.savingMode = true;
  }

  increase(num) {
    if ((this.degrees + num) > this.max) {
      this.degrees = this.max
      alert("You reached the maximum temperature, turn off the power saving mode !")
      throw new Error('you reached the maximum temperature')
    }
    this.degrees += num;
  }

  decrease(num) {
    if ((this.degrees - num) < this.min) {
      this.degrees = this.min
      alert("You reached the minimum temperature !")
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

  savingModeOn() {
    this.max = 25;
    this.savingMode = true;
  }

  savingModeOff() {
    this.max = 32;
    this.savingMode = false;
  }


  // _isSavingMode(boolean = true) {
  //   if (boolean) {
  //     this.max = 25;
  //   }
  //   else {
  //     this.max = 32;
  //   }
  // }

};


// _isSavingMode()
// if this.sAVI