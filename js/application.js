$( document ).ready(function() {

	$("body").on("mouseenter", ".github", function(){
	    $(".description").text("Github");
	});
	
	$("body").on("mouseleave", ".github", function(){
	    $(".description").text(" ");
	});

	$("body").on("mouseenter", ".linkedin", function(){
	    $(".description").text("Linkedin");
	});
	
	$("body").on("mouseleave", ".linkedin", function(){
	    $(".description").text(" ");
	});

	$("body").on("moouseenter", ".resume", function(){
	    $(".description").text("Resume");
	});
	
	$("body").on("mouseleave", ".resume", function(){
	    $(".description").text(" ");
	});

	$("body").on("mouseenter", ".email", function(){
	    $(".description").text("Email");
	});
	
	$("body").on("mouseleave", ".email", function(){
	    $(".description").text(" ");
	});

});
