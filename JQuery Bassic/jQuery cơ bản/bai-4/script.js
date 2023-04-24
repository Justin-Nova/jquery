$(".example1").click(function () {

    //lấy phần tử bấm chuột - chính là  $(".example1")
    var ele_example1 = $(this);

    //lấy nội dung
    var htmlmarkup =  ele_example1.html();
    var htmlcontent = ele_example1.text();

    alert("HTML Markup:\n" + htmlmarkup);
    alert("HTML Content:\n" + htmlcontent);

});

$(".example2").click(function ()
{
    var ele_example2 = $(this);

     var htmlmarkup =  ele_example2.html();

     ele_example2.html(htmlmarkup + htmlmarkup);
});