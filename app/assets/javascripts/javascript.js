$(document).ready(function() {

	$("div#panel").hide({
		}, "slow");

	$("div.panel_button").click(function(){
		$("div#panel").show({
			height: "200px"
		})
		.animate({
			height: "300px"
		}, "normal");
		$("div.panel_button").toggle();
	
	});	
	
   $("div#hide_button").click(function(){
		$("div#panel").hide({
			height: "0px"
		}, "fast");
		
	
   });	
});