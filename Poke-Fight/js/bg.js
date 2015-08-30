/* http://stackoverflow.com/questions/15231812/random-background-images-css3 */


/* TODO Change image sizes for more bandwidth friendliness */
if(screen.width <= 700 || screen.height <= 700) {
    var dir = "mobile/";
} else {
    var dir = "desktop/";
}
    
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', ];

var imageRandom = Math.floor(Math.random() * images.length)

console.log("Using Image " + imageRandom + "as background")
$('html').css({'background-image': 'url(images/bg/' + dir + 'overlay.png), url(images/bg/' + dir + images[imageRandom] + ')'});