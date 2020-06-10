
$(document).ready(function () {
    var thermostat = new Thermostat();


    function CurrentTemp() {
        $("#output").text(thermostat.degrees)
    };

    function CurrentUsage() {
        $("#usage").text(thermostat.currentUsage());
        $("#output").attr('class', thermostat.currentUsage())
        console.log(thermostat.currentUsage())
    };

    CurrentTemp();
    CurrentUsage();

    $("#up").click(function (event) {
        thermostat.increase(5);
        console.log(thermostat.degrees);
        event.preventDefault();
        CurrentTemp();
        CurrentUsage();

    });

    $("#down").click(function (event) {
        thermostat.decrease(5);
        console.log(thermostat.degrees);
        event.preventDefault();
        CurrentTemp();
        CurrentUsage();

    });

    $("#reset").click(function (event) {
        thermostat.resetDegrees();
        console.log(thermostat.degrees);
        event.preventDefault();
        CurrentTemp();
        CurrentUsage();

    });

    $("#saving_mode_on").click(function (event) {
        thermostat.savingModeOn();
        console.log(thermostat.max);
        event.preventDefault();
        CurrentTemp();
        CurrentUsage();

    });

    $("#saving_mode_off").click(function (event) {
        thermostat.savingModeOff();
        console.log(thermostat.max);
        event.preventDefault();
        CurrentTemp();
        CurrentUsage();

    });


    function getWeather() {
        $.ajax({

            url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=19a17be383b02e5fa272e0b4a6b29f5a",
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (result) {
                console.log(result)
            }

        });
    }

    getWeather();





});



