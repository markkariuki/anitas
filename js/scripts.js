function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function() {
		$("form #submit").click(function() {

  	var email= $(".Email").val();
    alert(email+" "+"has been successfully added to our list of subscribers.Thank you!");
  });
});
