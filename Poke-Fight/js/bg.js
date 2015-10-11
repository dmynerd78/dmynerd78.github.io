/* http://stackoverflow.com/questions/15231812/random-background-images-css3 */

if(screen.width <= 700 || screen.height <= 700) {
    var size = "mobile/";
} else {
    var size = "desktop/";
}
    
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', ];

var imageRandom = Math.floor(Math.random() * images.length);

console.log("Using Image " + imageRandom + " as background");
$('html').css({'background-image': 'radial-gradient(transparent, black), url(images/bg/' + size + images[imageRandom] + ')'});