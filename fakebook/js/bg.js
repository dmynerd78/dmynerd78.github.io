var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

var imageRandom = Math.floor(Math.random() * images.length);

console.log("Using Image " + imageRandom + " as background");
$('html').css({'background-image': 'radial-gradient(transparent, black), url(images/bg/' + images[imageRandom] + ')'});