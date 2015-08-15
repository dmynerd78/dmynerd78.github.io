if(screen.width <= 600 || screen.height <= 600) {
    alert("The site is still under construction. No mobile site yet, sorry :(")
    $('head').append('<link rel="stylesheet" href="css/style-mobile.css" type="text/css" />');
} else {
    $('head').append('<link rel="stylesheet" href="css/style-desktop.css" type="text/css" />');
}
