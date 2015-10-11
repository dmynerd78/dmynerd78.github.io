if(screen.width <= 700 || screen.height <= 700) {
    
    alert("Mobile site is still under construction. Sorry for the inconvenience");
    $('head').append('<link rel="stylesheet" href="css/style-mobile.css" type="text/css" />');
    console.log("MOBILE css sheet appended");
    mobile = true
    
} else {
    // http://nicescroll.areaaperta.com/
    $(document).ready(
        function() {
            $("html").niceScroll({cursorcolor:"#000", cursoropacitymax:"0.5", zindex: "9000"});
        }
    );
    $('head').append('<link rel="stylesheet" href="css/style-desktop.css" type="text/css" />');
    $('head').append('<script src="js/pace.min.js"></script>');
	$('head').append('<link href="css/paceCustom.css" rel="stylesheet" />');
	console.log("DESKTOP css sheet appended");
    mobile = false
}