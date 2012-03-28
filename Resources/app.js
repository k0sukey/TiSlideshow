Ti.UI.setBackgroundColor('#000');

var app = {};
app.slideshow = require('slideshow').Slideshow();

var window = Ti.UI.createWindow({
	fullscreen: true
});

var slideshowView = app.slideshow.createSlideshowView({
	idleTimerDisabled: false,
	width: window.width,
	height: window.height,
	duration: 2000,
	timeout: 1000,
	images: [ 'images/image00.jpg', 'images/image01.jpg', 'images/image02.jpg' ]
});
window.add(slideshowView);

window.open();