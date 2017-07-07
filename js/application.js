$( document ).ready(function() {

	$(".github").hover(function(){
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

});
