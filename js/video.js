var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
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

//FIX IT
// document.querySelector("#volume").addEventListener("click", function () {
// 	console.log("change slider")
// 	video.play()
// 	document.querySelector("volume").innerHTML = video.volume * 100 + "%";
// });

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
	video.currentTime += 15
	if (video.duration < video.currentTime) {
			console.log("here")
			video.currentTime = 15
			video.play()
	}
	console.group(video.currentTime)
});