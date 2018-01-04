//app.js


$(document).ready(function () {
    
    
/***************** MISSION *****************/
    $("#mission")
        .click(function () {
            $("body").css({
                "background-image": "url('img/background-w-overlay.jpg')"
            });
            $("#text1").show();
            $("#text2, #text3, #text4, #text5, #text6, #text7, #text8, #text9, #text10").hide();
        })
//        .mouseover(function () {
//            $("#mission").css({
//                "color": "#fff",
//                "opacity": "1",
//                "font-weight": "bold"
//            });
//            $("#mission").next().css({
//                "color": "#eda833",
//                "opacity": "1"
//            });
//        })
//        .mouseout(function () {
//            $("#mission").css({
//                "color": "#eda833",
//                "opacity": "0.5",
//                "font-weight": "normal"
//            });
//            $("#mission").next().css({
//                "color": "#eda833",
//                "opacity": "0.5"
//            });
//        })
            .scroll(function () {
            $("#mission").css({
                "color": "#fff",
                "opacity": "1",
                "font-weight": "bold"
                "opacity": "1 - $("#menu").scrollTop() / 5"});
        });
    
    
/***************** OUR FIRM *****************/
    $("#firm")
        .click(function () {
            $("body").css({
                "background-image": "url('img/background-w-overlay.jpg')"
            });
            $("#text2").show();
            $("#text1, #text3, #text4, #text5, #text6, #text7, #text8, #text9, #text10").hide();
        })
        .mouseover(function () {
            $("#firm").css({
                "color": "#fff",
                "opacity": "1",
                "font-weight": "bold"
            });
            $("#firm").prev().css({
                "color": "#eda833",
                "opacity": "1"
            });
            $("#firm").next().css({
                "color": "#eda833",
                "opacity": "1"
            });
        })
        .mouseout(function () {
            $("#firm").css({
                "color": "#eda833",
                "opacity": "0.5",
                "font-weight": "normal"
            });
            $("#firm").prev().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
            $("#firm").next().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
        });
    
    
/***************** LEADERSHIP *****************/
    $("#leadership")
        .click(function () {
            $("body").css({
                "background-image": "url('img/background-w-overlay.jpg')"
            });
            $("#text3").show();
            $("#text1, #text2, #text4, #text5, #text6, #text7, #text8, #text9, #text10").hide();
        })
        .mouseover(function () {
            $("#leadership").css({
                "color": "#fff",
                "opacity": "1",
                "font-weight": "bold"
            });
            $("#leadership").prev().css({
                "color": "#eda833",
                "opacity": "1"
            });
            $("#leadership").next().css({
                "color": "#eda833",
                "opacity": "1"
            });
        })
        .mouseout(function () {
            $("#leadership").css({
                "color": "#eda833",
                "opacity": "0.5",
                "font-weight": "normal"
            });
            $("#leadership").prev().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
            $("#leadership").next().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
        });
    
    
/****************** PORTFOLIO ******************/
    $("#portfolio")
        .click(function () {
            $("body").css({
                "background-image": "url('img/ffg-bg-logo.png')"
            });
            $("#text4").show();
            $("#text1, #text2, #text3, #text5, #text6, #text7, #text8, #text9, #text10").hide();        
    })
        .mouseover(function () {
            $("#portfolio").css({
                "color": "#fff",
                "opacity": "1",
                "font-weight": "bold"
            });
            $("#portfolio").prev().css({
                "color": "#eda833",
                "opacity": "1"
            });
            $("#portfolio").next().css({
                "color": "#eda833",
                "opacity": "1"
            });
        })

        .mouseout(function () {
            $("#portfolio").css({
                "color": "#eda833",
                "opacity": "0.5",
                "font-weight": "normal"
            });
            $("#portfolio").prev().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
            $("#portfolio").next().css({
                "color": "#eda833",
                "opacity": "0.5"
            });
        });
    
    
/****************** FUNDS ******************/
    $("#funds")
        .click(function () {
        $("body").css({
            "background-image": "url('img/ffg-bg-logo.png')"
        });
        $("#text5").show();
        $("#text1, #text2, #text3, #text4, #text6, #text7, #text8, #text9, #text10").hide();    })
        .mouseover(function () {
        $("#funds").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#funds").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
        $("#funds").next().css({
            "color": "#eda833",
            "opacity": "1"
        });
    }) 
    .mouseout(function () {
        $("#funds").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#funds").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
        $("#funds").next().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });
    
    
/****************** WORK FOR US ******************/
    $("#work")
        .click(function () {
        $("body").css({
            "background-image": "url('img/background-w-overlay.jpg')"
        });
        $("#text6").show();
        $("#text1, #text2, #text3, #text4, #text5, #text7, #text8, #text9, #text10").hide();    
    })
        .mouseover(function () {
        $("#work").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#work").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
        $("#work").next().css({
            "color": "#eda833",
            "opacity": "1"
        });
    })
        .mouseout(function () {
        $("#work").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#work").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
        $("#work").next().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });


    //CONTACT
    $("#contact")
        .click(function () {
        $("body").css({
            "background-image": "url('img/FFG_FIELD_AND_STREAM_BLUE.jpg')"
        });
        $("#text7").show();
        $("#text1, #text2, #text3, #text4, #text5, #text6, #text8, #text9, #text10").hide();    
    })
        .mouseover(function () {
        $("#contact").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#contact").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
        $("#contact").next().css({
            "color": "#eda833",
            "opacity": "1"
        });

    })
        .mouseout(function () {
        $("#contact").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#contact").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
        $("#contact").next().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });

    
/****************** INVESTOR ******************/
    $("#investor")
        .click(function () {
        $("body").css({
            "background-image": "url('img/background-w-overlay.jpg')"
        });
        $("#text8").show();
        $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text9, #text10").hide();
    })
    
        .mouseover(function () {
        $("#investor").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#investor").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
        $("#investor").next().css({
            "color": "#eda833",
            "opacity": "1"
        });
    })
        .mouseout(function () {
        $("#investor").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#investor").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
        $("#investor").next().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });
    
    
/****************** PRIVACY ******************/
    $("#privacy")
        .click(function () {
        $("body").css({
            "background-image": "url('img/ffg-bg-logo.png')"
        });
        $("#text9").show();
        $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8, #text10").hide();
    })
        .mouseover(function () {
        $("#privacy").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#privacy").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
        $("#privacy").next().css({
            "color": "#eda833",
            "opacity": "1"
        });
    })
        .mouseout(function () {
        $("#privacy").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#privacy").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
        $("#privacy").next().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });

    
/****************** TERMS ******************/
    $("#terms")
        .click(function () {
        $("body").css({
            "background-image": "url('img/ffg-bg-logo.png')"
        });
        $("#text10").show();
        $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8, #text9").hide();
    })
        .mouseover(function () {
        $("#terms").css({
            "color": "#fff",
            "opacity": "1",
            "font-weight": "bold"
        });
        $("#terms").prev().css({
            "color": "#eda833",
            "opacity": "1"
        });
    })
        .mouseout(function () {
        $("#terms").css({
            "color": "#eda833",
            "opacity": "0.5",
            "font-weight": "normal"
        });
        $("#terms").prev().css({
            "color": "#eda833",
            "opacity": "0.5"
        });
    });


    /***************************************/
    //    $(function () {
    //        $('#menu li').on('click', function () {
    //            $(this).addClass('active').removeClass('off').siblings().addClass('off').removeClass('active'); // no need to add .off
    //            $(this).addClass('active').siblings().removeClass('active');
    //        });
    //    });
    /***************************************/



    //OPACITY METHOD 1

        //MISSION
//        $("#menu").scroll(function () {
//            $("#mission").css("opacity", 1 - $("#menu").scrollTop() / 5);
//        });
        //FIRM
        $("#menu").scroll(function () {
            $("#firm").css("opacity", 0.1 + $("#menu").scrollTop() / 15);
        });
        //LEADERSHIP
        $("#menu").scroll(function () {
            $("#leadership").css("opacity", 1 - $("#menu").scrollTop() / 150);
        });
        //PORTFOLIO
        $("#menu").scroll(function () {
            $("#portfolio").css("opacity", 1 - $("#menu").scrollTop() / 300);
        });
        //FUNDS
        $("#menu").scroll(function () {
            $("#funds").css("opacity", 1 - $("#menu").scrollTop() / 400);
        });
        //WORK
        $("#menu").scroll(function () {
            $("#work").css("opacity", 1 - $("#menu").scrollTop() / 800);
        });
        //CONTACT
        $("#menu").scroll(function () {
            $("#contact").css("opacity", 1 - $("#menu").scrollTop() / 800);
        });
        //INVESTOR
        $("#menu").scroll(function () {
            $("#investor").css("opacity", 1 - $("#menu").scrollTop() / 800);
        });
        //PRIVACY
        $("#menu").scroll(function () {
            $("#privacy").css("opacity", 1 - $("#menu").scrollTop() / 800);
        });
        //TERMS
        $("#menu").scroll(function () {
            $("#terms").css("opacity", 1 - $("#menu").scrollTop() / 800);
        });    
        



    //MENU ITEM  // SCROLL OPACITY

//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 10) {
//            $("#mission").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 10) {
//            $("#mission").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 50) {
//            $("#firm").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 50) {
//            $("#firm").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 100) {
//            $("#leadership").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 100) {
//            $("#leadership").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 150) {
//            $("#portfolio").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 150) {
//            $("#portfolio").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 200) {
//            $("#funds").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 200) {
//            $("#funds").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 250) {
//            $("#work").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 250) {
//            $("#work").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//
//        if ($(this).scrollTop() >= 300) {
//            $("#contact").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 300) {
//            $("#contact").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 350) {
//            $("#investor").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 350) {
//            $("#investor").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 400) {
//            $("#privacy").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 400) {
//            $("#privacy").css("opacity", 1);
//        }
//    });
//
//
//    $("#menu").scroll(function () {
//        if ($(this).scrollTop() >= 450) {
//            $("#terms").css("opacity", 1 - $("#menu").scrollTop());
//        } else if ($(this).scrollTop() <= 450) {
//            $("#terms").css("opacity", 1);
//        }
//    });

    
    
    
    
    /***** ONCLICK TEXT APPEAR *****/

    //$("#mission").click(function() {
    //  $("#text1").append("<p>TEXT APPEARS RIGHT HERE!!!!!!!!!!!!!!!!!!!</p>");
    //});    

    
    
    
    
    
    
    
    //END
});
