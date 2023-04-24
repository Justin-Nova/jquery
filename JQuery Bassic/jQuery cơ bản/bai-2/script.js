$("p")

$(document).ready(
    function () {

        //Chọn các phần tử button và gán sự kiện click cho nó
        $("button").click(function () {
            //Chọn các phần tử p và thi hành ẩn các phần tử đó
            $("p").hide();
        });
    }
);

$("#test")

$(document).ready(
    function () {

        //Chọn các phần tử button và gán sự kiện click cho nó
        $("button").click(function () {

            //Chọn phần tử có id là test và thi hành ẩn các phần tử đó
            $("#test").hide();

        });
    }
);