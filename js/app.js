//app.js


$(document).ready(function () {

    $("#mission, #firm, #leadership, #work, #investor").click(function () {
        $("body").css({
            "background-image": "url('img/background-w-overlay.jpg')"
        });
    });

    $("#portfolio, #funds, #privacy, #terms").click(function () {
        $("body").css({
            "background-image": "url('img/ffg-bg-logo.png')"
        });
        //    $("#funds a").css({"color": "red"});
    });

    $("#contact").click(function () {
        //    $("#contact a").css({"color": "red"});
        //    $(this).addClass('active').siblings().removeClass('active');
        $("body").css({
            "background-image": "url('img/FFG_FIELD_AND_STREAM_BLUE.jpg')"
        });
    });

    $(function () {
        $('#menu li').on('click', function () {
            //$(this).addClass('active').removeClass('off').siblings().addClass('off').removeClass('active'); // no need to add .off
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    
    //BLANK DIVS....
//    $("#menu").scroll(function () {
//        $("#blank1").css("opacity", 1 - $("#menu").scrollTop() / 10);
//    });
//    $("#menu").scroll(function () {
//        $("#blank2").css("opacity", 1 - $("#menu").scrollTop() / 20);
//    });
//    $("#menu").scroll(function () {
//        $("#blank3").css("opacity", 1 - $("#menu").scrollTop() / 30);
//    });
//    $("#menu").scroll(function () {
//        $("#blank4").css("opacity", 1 - $("#menu").scrollTop() / 40);
//    });
//    $("#menu").scroll(function () {
//        $("#blank").css("opacity", 1 - $("#menu").scrollTop() / 50);
//    });

    //10 MENU ITEM SCROLL FADES
    $("#menu").scroll(function () {
        $("#mission").css("opacity", 1 - $("#menu").scrollTop() / 60);
    });

    $("#menu").scroll(function () {
        $("#firm").css("opacity", 1 - $("#menu").scrollTop() / 100);
    });

    $("#menu").scroll(function () {
        $("#leadership").css("opacity", 1 - $("#menu").scrollTop() / 150);
    });

    $("#menu").scroll(function () {
        $("#portfolio").css("opacity", 1 - $("#menu").scrollTop() / 180);
    });

    $("#menu").scroll(function () {
        $("#funds").css("opacity", 1 - $("#menu").scrollTop() / 210);
    });

    $("#menu").scroll(function () {
        $("#work").css("opacity", 1 - $("#menu").scrollTop() / 240);
    });

    $("#menu").scroll(function () {
        $("#contact").css("opacity", 1 - $("#menu").scrollTop() / 300);
    });

    $("#menu").scroll(function () {
        $("#investor").css("opacity", 1 - $("#menu").scrollTop() / 340);
    });

    $("#menu").scroll(function () {
        $("#privacy").css("opacity", 1 - $("#menu").scrollTop() / 370);
    });

    $("#menu").scroll(function () {
        $("#terms").css("opacity", 1 - $("#menu").scrollTop() / 400);
    });



    // scroll bottom experiment      
    //  $("#menu").scroll(function(){
    //    $("#contact").css("opacity", 1 + $("#menu").scrollBottom() / 10);
    //  });     



    //color text white at scroll / page location experiment
    //$("#leadership").scroll(function(){
    //    $("#terms").css({"color", "red").scrollTop() / 40);
    //  });        



});
