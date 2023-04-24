$("#vidu1").click(function() {
    $("#pvidu1").toggle();
 });

 $("#vidu2").click(function() {
    $("#pvidu2").toggle(1000);
});

$("#vidu3").click(function() {
    $("#pvidu3").toggle(500, function() {
        $("#pvidu3").toggle(500);
    });
});

$("#vidu4").click(function() {
    $("#pvidu4").fadeToggle(1000, function() {
        $("#pvidu4").fadeToggle(1000);
    });
});

$("#vidu5").click(function() {
    $("#pvidu5").slideToggle(1000, function() {
        //... code in callback
    });
});