// AJAX

function loadText() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				document.getElementById('content-text').innerHTML = this.responseText;
				}
			    };
			xhttp.open("GET", "next.txt", true);
			xhttp.send();
			alert('Check out Contact Page to see more about that.');
}