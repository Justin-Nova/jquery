//Hàm đọc và hiện thị thông tin
function displayVals() {
    var singleValues =   $( "#single" ).val();
    var multipleValues = $( "#multiple" ).val() || [];

    $( "p#info1" ).html( "<b>Single:</b> " + singleValues +
        " <b>Multiple:</b> " + multipleValues.join( ", " ) );
}

//Bắt sự kiện thi thay đổi giá trị
$( "#single, #multiple" ).change( displayVals );

displayVals();