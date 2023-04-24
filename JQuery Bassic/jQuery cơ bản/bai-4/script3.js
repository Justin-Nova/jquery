//Hàm đọc giá trị và hiện thị thông tin
    function textthaydoi() {
        var value = $( this ).val();
        $( "p#giatriinputtext" ).text( value );
    }

    //Bắt sự kiện keyup của textbox
    $( "#inputtext" ).keyup(textthaydoi);

    //Cho #inputext phát sinh một sự kiện keyup ban đầu
    $( "#inputtext" ).keyup();
