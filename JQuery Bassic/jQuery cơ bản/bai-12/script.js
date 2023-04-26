//  vidu 1
$("#button1").click(function () {

    $("#example1").css({"width": "10px",
        "height": "10px",
        "background":"orangered"});

    $("#example1").animate(
        {"width": "100%", "height": "50px"}, 2000);
});

$("#example1").animate({
    width: '+=250px',
    height: '+=250px'
  }, 1000);

//   vidu 2

function animate_examp() {

    var mr = $("#example2").css("margin-left");
    if (mr == '0px')
        $("#example2").animate({"margin-left": "320px"}, 2000, "linear", function () {
            animate_examp();
        });
    else
        $("#example2").animate({"margin-left": "0px"}, 2000, "linear", function () {
            animate_examp();
        });

  }


$("#button2").click(function () {
    animate_examp();
    $(this).hide();
});

$("#button3").click(function () {

    $("#example2").stop();
    $("#button2").show();

});