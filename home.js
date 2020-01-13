
function redirect(){

	var redirection = document.getElementById('redirect');
	location.replace("about.html");	

}

function redirectCall(){
	setTimeout(redirect, 3000);	
}


function functionAudio() {
  var audio = document.createElement("AUDIO");
  	audio.src = "badkarma.mp3";
	audio.controls = false;
	audio.autoplay = false;

  if (audio.canPlayType("audio/mp3")) {
    audio.setAttribute("src","badkarma.mp3");
  } 

  audio.setAttribute("controls", "controls");
  document.getElementById('audio-player').appendChild(audio);
}