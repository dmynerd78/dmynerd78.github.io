window.onerror = function(exception, fileName, lineNumber) {
    error(exception, fileName, lineNumber);
};

function error(exception, fileName, lineNumber) {
    document.getElementById('warning').innerHTML =  document.getElementById('warning').innerHTML +
    "<h1>" + exception + "</h1><h3>(" + fileName + ":" + lineNumber + ")</h3>" +
	"<h4>URL: " + window.location.href + "</h4>";
}


/* If image is unable to dispalay show error image */
function imgError(image) {
	image.onerror = "";
	image.src = "images/unknownStreamer.png";
	return true;
}


/* Clean URL of garbage */
function cleanArray(original) {
	var newArray = [];
	for(var i = 0; i < original.length; i++) {
		if (original[i]){
			newArray.push(original[i]);
		}
	}
	return newArray;
}


function startup() {
    try {
        /* Grab streamers from URL and add dminer to the beginning */
        var url = (window.location.href.split("?")[1]).split("+");
        url = cleanArray(url);
        url.unshift("dminer");

        console.info("Streamers in link: " + url + "\nURL: " + window.location.href);
    } catch(exception) {
        /* If unable to get streamers display error */
        document.getElementById('warning').innerHTML = "<h1>Unable to get streamers from URL</h1>" + exception + "<br />URL: " + window.location.href;
    }

    if(url.length <= 21) {
        for(streamerLoop = 0; streamerLoop < url.length; streamerLoop++) {
        currentStreamer = getStreamer(url[streamerLoop]);
            document.getElementById(streamerLoop).innerHTML = currentStreamer.displayName + "<br /> <img src='" + currentStreamer.image + "' alt='" +
            currentStreamer.username + " Profile Picture' onError='imgError(this);' />" +
            "<br /><br /> <a href='" + currentStreamer.url + "' class='button' target='_blank'></a><br /><br />";

            console.log(currentStreamer);
        }
    } else {
        document.getElementById('warning').innerHTML += "<h1>" + (url.length - 1) + " is too many streamers!</h1><h3>The maximum you can add is 20!</h3><br>";
    }

}