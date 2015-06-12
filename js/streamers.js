
var getStreamer = function(streamer) {
	switch (streamer) {
		case "duke":
			text = "Today is Saturday";
			break;
		case "mk":
			text = "Today is Sunday";
			break;
		case "theo":
			text = "Today is Sunday";
			break;
		case "chris":
			text = "Today is Sunday";
			break;
		case "graph":
			text = "Today is Sunday";
			break;
		case "ick":
			text = "Today is Sunday";
			break;
		case "mk":
			text = "Today is Sunday";
			break;
		case "mk":
			text = "Today is Sunday";
			break;
		default: 
			text = "Unable to find streamer: " + streamer;
	};
	alert(text);
};