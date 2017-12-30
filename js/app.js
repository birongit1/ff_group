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

    
//    BLANK DIVS....
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

//    10 MENU ITEM SCROLL FADES
    
    //MISSION
    $("#menu").scroll(function () {
        $("#mission").css("opacity", 1 - $("#menu").scrollTop() / 100);
    });
    //FIRM
    $("#menu").scroll(function () {
        $("#firm").css("opacity", 1 - $("#menu").scrollTop() / 100);
    });
    //LEADERSHIP
    $("#menu").scroll(function () {
        $("#leadership").css("opacity", 1 - $("#menu").scrollTop());
    });
    //PORTFOLIO
    $("#menu").scroll(function () {
        $("#portfolio").css("opacity", 1 - $("#menu").scrollTop() / 180);
    });
    //FUNDS
    $("#menu").scroll(function () {
        $("#funds").css("opacity", 1 - $("#menu").scrollTop() / 210);
    });
    //WORK
    $("#menu").scroll(function () {
        $("#work").css("opacity", 1 - $("#menu").scrollTop() / 240);
    });
    //CONTACT
    $("#menu").scroll(function () {
        $("#contact").css("opacity", 1 - $("#menu").scrollTop() / 300);
    });
    //INVESTOR
    $("#menu").scroll(function () {
        $("#investor").css("opacity", 1 - $("#menu").scrollTop() / 340);
    });
    //PRIVACY
    $("#menu").scroll(function () {
        $("#privacy").css("opacity", 1 - $("#menu").scrollTop() / 370);
    });
    //TERMS
    $("#menu").scroll(function () {
        $("#terms").css("opacity", 1 - $("#menu").scrollTop() / 400);
    });    
    


    
//BEGIN METHOD 3
  
//$("#menu").scroll(function() {
////        $("#mission").css({"background": "transparent"})
//    if ($(this).scrollTop() == 150) { 
//        $("#mission").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 150){
//        $("#mission").css("display", "block").fadeIn("slow");
//    }
//});        
//    
//  
//$("#menu").scroll(function() {
////        $("#firm").css({"background": "transparent"})
//    if ($(this).scrollTop() == 150) { 
//        $("#firm").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 150){
//        $("#firm").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 150) { 
//        $("#leadership").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 150){
////        $("#leadership").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 100) { 
//        $("#portfolio").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 100){
//        $("#portfolio").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 100) { 
//        $("#funds").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 100){
//        $("#funds").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 100) { 
//        $("#work").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 100){
//        $("#work").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 50) { 
//        $("#contact").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 50){
//        $("#contact").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 50) { 
//        $("#investor").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 50){
//        $("#investor").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 50) { 
//        $("#privacy").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 50){
//        $("#privacy").css("display", "block").fadeIn("slow");
//    }
//});     
//    
//  
//$("#menu").scroll(function() {
////        $("#funds").css({"background": "transparent"})
//    if ($(this).scrollTop() >= 50) { 
//        $("#terms").css("display", "none").fadeOut("slow");
//    } else if ($(this).scrollTop() <= 50){
//        $("#terms").css("display", "block").fadeIn("slow");
//    }
//});     
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})