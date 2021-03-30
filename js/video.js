var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = "100%";
});


document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video")
		video.pause()
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if (video.muted) { 
		video.muted = false; //Button should say mute
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true; //Button should say unmute
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	
});

document.querySelector("#slider").addEventListener("change", function () {
	console.log("change slider")
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%";
	console.log("video.volume" + video.volume + "this.value" + this.value)

});

document.querySelector("#vintage").addEventListener("click",
	function() {
		console.log("Changing CSS")
		video.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click",
	function() {
		console.log("Changing CSS")
		video.classList.remove("oldSchool");

});

document.querySelector("#slower").addEventListener("click",
	function() {
		console.log("Slow Down Video")
		video.playbackRate *= .95
		console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", //FIX ME
	function() {
		console.log("Speed Up Video")
		video.playbackRate = video.playbackRate / 0.95
		console.log(video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15
	}
	else {
		video.currentTime = 0;
		video.play()
	}
	console.group(video.currentTime)
});