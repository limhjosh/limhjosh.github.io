$( document ).ready(function() {

	$("body").on("mouseenter", ".github", function(){
	    $(".description").text("Github");
	});
	
	$("body").on("mouseleave", ".github", function(){
	    $(".description").text("THANKS FOR VISITING");
	});

	$("body").on("mouseenter", ".linkedin", function(){
	    $(".description").text("Linkedin");
	});
	
	$("body").on("mouseleave", ".linkedin", function(){
	    $(".description").text("THANKS FOR VISITING");
	});

	$("body").on("mouseenter", ".resume", function(){
	    $(".description").text("Resume");
	});
	
	$("body").on("mouseleave", ".resume", function(){
	    $(".description").text("THANKS FOR VISITING");
	});

	$("body").on("mouseenter", ".email", function(){
	    $(".description").text("Email");
	});
	
	$("body").on("mouseleave", ".email", function(){
	    $(".description").text("THANKS FOR VISITING");
	});

	var mouseX, mouseY;
	var ww = $( window ).width();
	var wh = $( window ).height();
	var traX, traY;
	$(document).mousemove(function(e){
  		mouseX = e.pageX;
		mouseY = e.pageY;
    		traX = ((4 * mouseX) / 570) + 40;
    		traY = ((4 * mouseY) / 570) + 50;
    		console.log(traX);
    		$(".title").css({"background-position": traX + "%" + traY + "%"});
	});
	
	$("body").on("click", ".bounce", function() {
    		$('html,body').animate({
        		scrollTop: $(".end-image").offset().top}, 7000);
		$(".bounce").hide()
	});
});
