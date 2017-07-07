$( document ).ready(function() {

	$("body").on("hover", ".github", function(){
	    $(".description").text("Github");
	});

	$(".linkedin").hover(function(){
	    $(".description").text("Linkedin");
	});

	$(".resume").hover(function(){
	    $(".description").text("Resume");
	});

	$(".email").hover(function(){
	    $(".description").text("Email");
	});
	
	$(".main-header").hover(function(){
	    $(".description").hide();
	});
	
	$(".explanation").hover(function(){
	    $(".description").hide();
	});

});
