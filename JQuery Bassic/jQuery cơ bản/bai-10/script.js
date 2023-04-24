var x = document.getElementById("demo");
    x.onclick = function () {
        alert(Date());
    }

    $("#demo").click(function() {
        alert(Date());
    });

    $("#ele1").mouseover(function () {
        $(this).html("Chuột trên phần tử : " + Date());
    });
    $("#ele1").mouseleave(function () {
        $(this).html("Ra khỏi phần tử: " + Date());
    });

    $(function() {
        $("#add").on("click", function() {
            var val = $("input").val();
            if(val !== '') {
                var elem = $("<li></li>").text(val);
                $(elem).append("<button class='rem'>X</button>");
                $("#mylist").append(elem);
                $("input").val("");
                $(".rem").on("click", function() {
                    $(this).parent().remove();
                });
            }
        });
    });