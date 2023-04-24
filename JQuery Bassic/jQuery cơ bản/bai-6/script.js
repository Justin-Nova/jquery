function addClass() {
    $("div.pclass").addClass("classexam1");
    showhtml();
}

function removeClass() {
    $("div.pclass").removeClass("classexam1");
    showhtml();
}

function toggleClass() {
    $("div.pclass").toggleClass("classexam1");
    showhtml();
}

function hasClass() {
   if ($("div.pclass").hasClass("classexam1"))
       alert("Phần tử có class: classexam1");
   else
       alert("Phần tử không có class: classexam1");

}

function showhtml() {
    $("#inforhtml").text($("div.pclass")[0].outerHTML);
}

showhtml();