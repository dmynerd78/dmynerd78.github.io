/* http://stackoverflow.com/questions/15231812/random-background-images-css3 */

if(screen.width <= 700 || screen.height <= 700) {
    var size = "mobile/";
} else {
    var size = "desktop/";
}
    
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var images = ['4.jpg'];

var imageRandom = Math.floor(Math.random() * images.length);

console.log("Using Image " + imageRandom + " as background");
$('html').css({'background-image': 'radial-gradient(transparent, black), url(images/bg/' + size + images[imageRandom] + ')'});