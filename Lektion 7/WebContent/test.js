/**
 * 
 */

$(document).ready(function() {
	restController.test();
	console.log("test");
})

var restController = {
	test : function (){
		console.log("trying to insert some text");
		$('#test').append("Test");
	}
}