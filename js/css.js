if(screen.width <= 700 || screen.height <= 700) {
    alert("Mobile site is still under construction. Sorry for the inconvenience");
    $('head').append('<link rel="stylesheet" href="css/style-mobile.css" type="text/css" />');
    var screen = "MOBILE";
} else {
    $('head').append('<link rel="stylesheet" href="css/style-desktop.css" type="text/css" />');
    $('head').append('<script src="js/pace.min.js"></script>');
	$('head').append('<link href="css/paceCustom.css" rel="stylesheet" />');
    var screen = "DESKTOP";
}

console.log(screen + " css sheet appended");