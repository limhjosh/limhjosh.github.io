$( document ).ready(function() {

	$("body").on("hover", ".github", function(){
		$(".description").show();
	    $(".description").text("Github");
	});

	$("body").on("hover", ".linkedin", function(){
		$(".description").show();
	    $(".description").text("Linkedin");
	});

	$("body").on("hover", ".resume", function(){
		$(".description").show();
	    $(".description").text("Resume");
	});

	$("body").on("hover", ".email", function(){
		$(".description").show();
	    $(".description").text("Email");
	});
	
	$("body").on("hover", ".main-header", function(){
	    $(".description").hide();
	});
	
	$("body").on("hover", ".explanation", function(){
	    $(".description").hide();
	});

});
