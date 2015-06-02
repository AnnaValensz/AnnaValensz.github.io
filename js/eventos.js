var inicio = function()
{
	$("#home").show("fast");

	var inicio = function()
	{ 
		$("#home").show("fast");
		$("#sectionWho").hide("fast");	// ya es todo tuyo :3 GRATCIE :*
		$("#sectionHtml").hide("fast");
		$("#sectionHtml5").hide("fast");
		$("#sectionCSS").hide("fast");
		$("#sectionBootstrap").hide("fast");
		$("#sectionJavascript").hide("fast");
		$("#sectionPhp").hide("fast");
	}
	var WhoAmI = function()
	{
		$("body > section").hide("fast");
		$("#sectionWho").show("fast");
	}
	var Html = function()
	{
		$("body > section").hide("fast");
		$("#sectionHtml").show("fast");
	}
	var Html5 = function()
	{
		$("body > section").hide("fast");
		$("#sectionHtml5").show("fast");
	}
	var CSS = function()
	{
		$("body > section").hide("fast");
		$("#sectionCSS").show("fast");
	}
	var Bootstrap = function()
	{
		$("body > section").hide("fast");
		$("#sectionBootstrap").show("fast");
	}
	var Javascript = function()
	{
		$("body > section").hide("fast");
		$("#sectionJavascript").show("fast");
	}
	var Php = function()
	{
		$("body > section").hide("fast");
		$("#sectionPhp").show("fast");
	}

	$("#btninicio").on("click",inicio);
	$("#btnWho").on("click",WhoAmI);
	$("#btnHtml").on("click",Html);
	$("#btnHtml5").on("click",Html5);
	$("#btnCSS").on("click",CSS);
	$("#btnBootstrap").on("click",Bootstrap);
	$("#btnJavascript").on("click",Javascript);
	$("#btnPhp").on("click",Php);
}
$(document).on("ready",inicio);