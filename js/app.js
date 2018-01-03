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

    
    
//METHOD 1
    
//    //MISSION
//    $("#menu").scroll(function () {
//        $("#mission").css("opacity", 1 - $("#menu").scrollTop() / 100);
//    });
//    //FIRM
//    $("#menu").scroll(function () {
//        $("#firm").css("opacity", 1 - $("#menu").scrollTop() / 100);
//    });
//    //LEADERSHIP
//    $("#menu").scroll(function () {
//        $("#leadership").css("opacity", 1 - $("#menu").scrollTop());
//    });
//    //PORTFOLIO
//    $("#menu").scroll(function () {
//        $("#portfolio").css("opacity", 1 - $("#menu").scrollTop() / 180);
//    });
//    //FUNDS
//    $("#menu").scroll(function () {
//        $("#funds").css("opacity", 1 - $("#menu").scrollTop() / 210);
//    });
//    //WORK
//    $("#menu").scroll(function () {
//        $("#work").css("opacity", 1 - $("#menu").scrollTop() / 240);
//    });
//    //CONTACT
//    $("#menu").scroll(function () {
//        $("#contact").css("opacity", 1 - $("#menu").scrollTop() / 300);
//    });
//    //INVESTOR
//    $("#menu").scroll(function () {
//        $("#investor").css("opacity", 1 - $("#menu").scrollTop() / 340);
//    });
//    //PRIVACY
//    $("#menu").scroll(function () {
//        $("#privacy").css("opacity", 1 - $("#menu").scrollTop() / 370);
//    });
//    //TERMS
//    $("#menu").scroll(function () {
//        $("#terms").css("opacity", 1 - $("#menu").scrollTop() / 400);
//    });    
//    


    
//BEGIN METHOD 3
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 10) { 
        $("#mission").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 10){
        $("#mission").css("opacity", 1);
    }
});      
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 50) { 
        $("#firm").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 50){
        $("#firm").css("opacity", 1);
    }
});  
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 100) { 
        $("#leadership").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 100){
        $("#leadership").css("opacity", 1);
    }
});  
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 150) { 
        $("#portfolio").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 150){
        $("#portfolio").css("opacity", 1);
    }
});     
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 200) { 
        $("#funds").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 200){
        $("#funds").css("opacity", 1);
    }
});    
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 250) { 
        $("#work").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 250){
        $("#work").css("opacity", 1);
    }
}); 
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 300) { 
        $("#contact").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 300){
        $("#contact").css("opacity", 1);
    }
});     
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 350) { 
        $("#investor").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 350){
        $("#investor").css("opacity", 1);
    }
});       
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 400) { 
        $("#privacy").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 400){
        $("#privacy").css("opacity", 1);
    }
});       
    
  
$("#menu").scroll(function() {
//        $("#mission").css({"background": "transparent"})
    if ($(this).scrollTop() >= 450) { 
        $("#terms").css("opacity", 1 - $("#menu").scrollTop());
    } else if ($(this).scrollTop() <= 450){
        $("#terms").css("opacity", 1);
    }
});
  
    
    
/***** MOUSEOVER/MOUSEOUTS FOR MENU COLOR *****/    
  
//MISSION
$("#mission").mouseover(function() {
  $("#mission").next().css("color", "red");
});
  
$("#mission").mouseout(function() {
   $("#mission").next().css("color", "transparent");
});

/***********************************************/

//FIRM
$("#firm").mouseover(function() {
  $("#firm").prev().css("color", "red");
  $("#firm").next().css("color", "red");
});
  
$("#firm").mouseout(function() {
   $("#firm").prev().css("color", "transparent");
   $("#firm").next().css("color", "transparent");
});

/***********************************************/

//LEADERSHIP
$("#leadership").mouseover(function() {
  $("#leadership").prev().css("color", "red");
  $("#leadership").next().css("color", "red");
});
  
$("#leadership").mouseout(function() {
   $("#leadership").prev().css("color", "transparent");
   $("#leadership").next().css("color", "transparent");
});

/***********************************************/

//PORTFOLIO
$("#portfolio").mouseover(function() {
  $("#portfolio").prev().css("color", "red");
  $("#portfolio").next().css("color", "red");
});
  
$("#portfolio").mouseout(function() {
   $("#portfolio").prev().css("color", "transparent");
   $("#portfolio").next().css("color", "transparent");
});

/***********************************************/

//FUNDS
$("#funds").mouseover(function() {
  $("#funds").prev().css("color", "red");
  $("#funds").next().css("color", "red");
});
  
$("#funds").mouseout(function() {
   $("#funds").prev().css("color", "transparent");
   $("#funds").next().css("color", "transparent");
});

/***********************************************/

//WORK
$("#work").mouseover(function() {
  $("#work").prev().css("color", "red");
  $("#work").next().css("color", "red");
});
  
$("#work").mouseout(function() {
   $("#work").prev().css("color", "transparent");
   $("#work").next().css("color", "transparent");
});

/***********************************************/

//CONTACT
$("#contact").mouseover(function() {
  $("#contact").prev().css("color", "red");
  $("#contact").next().css("color", "red");

});
  
$("#contact").mouseout(function() {
   $("#contact").prev().css("color", "transparent");
   $("#contact").next().css("color", "transparent");
});

/***********************************************/

//INVESTOR
$("#investor").mouseover(function() {
  $("#investor").prev().css("color", "red");
  $("#investor").next().css("color", "red");
});
  
$("#investor").mouseout(function() {
   $("#investor").prev().css("color", "transparent");
   $("#investor").next().css("color", "transparent");
});

/***********************************************/

//PRIVACY
$("#privacy").mouseover(function() {
  $("#privacy").prev().css("color", "red");
  $("#privacy").next().css("color", "red");
});
  
$("#privacy").mouseout(function() {
   $("#privacy").prev().css("color", "transparent");
   $("#privacy").next().css("color", "transparent");
});

/***********************************************/

//TERMS
$("#terms").mouseover(function() {
  $("#terms").prev().css("color", "red");
});
  
$("#terms").mouseout(function() {
   $("#terms").prev().css("color", "transparent");
});

/***********************************************/

    
    
    
    
    
    
    
    
    
    
    
    
    
    
//END
});