//RENAME SCREEN VAR

if(screen.width <= 700 || screen.height <= 700) {
    alert("Mobile site is still under construction. Sorry for the inconvenience");
    $('head').append('<link rel="stylesheet" href="css/style-mobile.css" type="text/css" />');
    console.log("MOBILE css sheet appended");
    var screen = "MOBILE";
} else {
    $('head').append('<link rel="stylesheet" href="css/style-desktop.css" type="text/css" />');
    console.log("DESKTOP css sheet appended");
    var screen = "DESKTOP";
}