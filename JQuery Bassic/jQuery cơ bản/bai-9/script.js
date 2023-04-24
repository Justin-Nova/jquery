var pvidu1;
    $("#button1").click(function () {
        if ( pvidu1 ) {
            pvidu1.appendTo( "#container1" );
            pvidu1 = null;
        } else {
            pvidu1 = $( "#container1 p" ).detach();
        }
    });