/**
 * 
 */

$(document).ready(function() {
	restController.test(" - DTU"); 
	console.log("test");
	$(document).ready
})

var restController = {
	test : function (string){
		console.log("trying to insert some text");
		$('#test').append(string);
		
	}
}