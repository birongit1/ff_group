/****** scratchpad ******/

    
//onclick function
//<script>
//function myFunction() {
//    document.getElementById("item").style.background = "red";
//    $('.item').css({"color": "red"})
//}
//</script>
    
//TEMPLATE 2!!!
//.css("display","none")    
    
    
    
$("#menu").scroll(function() {
    if ($(this).scrollTop() >= 10) { 
$("#mission").css("display","none");
    } else if ($(this).scrollTop() <= 10){
        $("#mission").css("display","block");;
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 20) { 
        $("#firm").css("display","none")   ;
    } else if ($(this).scrollTop() <= 20){
        $("#firm").css("display","block");;
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 90) { 
        $("#leadership").fadeOut("2000");
    } else if ($(this).scrollTop() <= 90){
        $("#leadership").fadeIn("2000");
    }
});
    
$("#menu").scroll(function() {
    if ($(this).scrollTop() >= 120) { 
        $("#portfolio").fadeOut("2000");
    } else if ($(this).scrollTop() <= 120){
        $("#portfolio").fadeIn("2000");
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 150) { 
        $("#funds").fadeOut("2000");
    } else if ($(this).scrollTop() <= 150){
        $("#funds").fadeIn("2000");
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 180) { 
        $("#work").fadeOut("2000");
    } else if ($(this).scrollTop() <= 180){
        $("#work").fadeIn("2000");
    }
});    

    $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 210) { 
        $("#contact").fadeOut("2000");
    } else if ($(this).scrollTop() <= 210){
        $("#contact").fadeIn("2000");
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 240) { 
        $("#investor").fadeOut("2000");
    } else if ($(this).scrollTop() <= 240){
        $("#investor").fadeIn("2000");
    }
});

 $("#menu").scroll(function() {
    if ($(this).scrollTop() >= 270) { 
        $("#privacy").fadeOut("2000");
    } else if ($(this).scrollTop() <= 270){
        $("#privacy").fadeIn("2000");
    }
});
    
 
    
//END TEMPLATE 2!!!


    

/****** SF ******/
$(document).ready(function() {
	$(".ryu")
    .mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-cool").hide();    
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		$(".ryu-still").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
			.animate(
				{"left": "300px"},
				500,
				function() {
				$(this).hide();
				$(this).css("left", "-212px");
			}
		);

	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-cool").hide();
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})

	$("body").keydown(function(e) {
		if (e.which == 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
			$(".hadouken").hide();
		}
	})

	$("body").keyup(function(e) {
		if (e.which == 88) {
			$(".ryu-still").show();
			$(".ryu-ready").hide();
			$(".ryu-cool").hide();
			$(".hadouken").hide();

		}
	})
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}


//	.mouseleave(function() {
//		$("").hide();
//		$("").show();
//	})
//	.mousedown(function() {
//		$("").hide();
//		$("").show(); 
//	.mouseup(function() {
//		$("").hide();
//		$("").show();   



