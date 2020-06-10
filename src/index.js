
$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#up").click(function (event) {       
    thermostat.increase(5);
    console.log(thermostat.degrees);
    event.preventDefault();
  });

  $("#down").click(function (event) {       
    thermostat.decrease(5);
    console.log(thermostat.degrees);
    event.preventDefault();
  });

  $("#reset").click(function (event) {       
    thermostat.resetDegrees();
    console.log(thermostat.degrees);
    event.preventDefault();
  });

  $("#saving_mode_on").click(function (event) {       
    thermostat.savingModeOn();
    console.log(thermostat.max);
    event.preventDefault();
  });

  $("#saving_mode_off").click(function (event) {       
    thermostat.savingModeOff();
    console.log(thermostat.max);
    event.preventDefault();
  });

});

