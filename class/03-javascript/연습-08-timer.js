let time = 10;
// undefined
setInterval(function () {
	if (time >= 0) {
		console.log(time);
		time = time - 1;
	}
}, 1000);
// 1
// VM2849:3 10
// VM2849:3 9
// VM2849:3 8
// VM2849:3 7
// VM2849:3 6
// VM2849:3 5
// VM2849:3 4
// VM2849:3 3
// VM2849:3 2
// VM2849:3 1
// VM2849:3 0

let times = 180;
// undefined
setInterval(function () {
	if (times >= 0) {
		let min = Math.floor(times / 60);
		let sec = String(times % 60).padStart(2, '0');
		console.log(min + ':' + sec);
		times = times - 1;
	}
}, 1000);
// 1
