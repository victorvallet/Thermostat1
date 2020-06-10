
$(document).ready(function () {

    $("#up").click(function (event) {

        $(this).hide("slow");
        console.log(event)

        event.preventDefault();

    });

    $("p").removeClass("thermostat-color");

    $("h1").addClass("thermostat-color");

});

