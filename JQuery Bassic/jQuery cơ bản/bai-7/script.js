$('#vidu1').click(function ()
{
    alert($(this).css("background-color"));
    $(this).css("background-color", "#FF5722");

});

$('#vidu2').click(function () {
    $(this).css({
        "background-color" :"#FF5722",
        "font-size": "200%",
        "color": "whitesmoke"
        });

});

$(function() {
    var txt = "";
    txt += "width: " + $("#vidu3").width() + " ";
    txt += "height: " + $("#vidu3").height() + "<br/>";
    txt += "innerWidth: " + $("#vidu3").innerWidth() + " ";
    txt += "innerHeight: " + $("#vidu3").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("#vidu3").outerWidth() + " ";
    txt += "outerHeight: " + $("#vidu3").outerHeight();

    $("#vidu3").html(txt);
});