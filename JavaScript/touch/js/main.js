window.onload = function () {
	var canvas = document.getElementById("canvas");
	var spirit, startX, startY;

	function touchStart (event) {
		event.preventDefault();
		if (spirit || !event.touches.length) return;
		var touch = event.touches[0];
		startX = touch.pageX;
		startY = touch.pageY;
		spirit = document.createElement("div");
		spirit.className = "spirit";
		spirit.style.left = startX;
		spirit.style.top = startY;
		canvas.appendChild(spirit);
	}

	canvas.addEventListener("touchstart", touchStart, false);
}