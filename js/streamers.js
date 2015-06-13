
var getStreamer = function(streamer) {
	switch (streamer) {
		
		//Beam Streamers
		case "duke":
			text = "Today is Saturday";
			break;
			
		//Twitch Streamers
		case "mk":
			text = "Today is Sunday";
			break;
			
		//Custom Beam Streamer
		case "b/" + streamer:
			text = "Today is Sunday";
			break;
		
		//Custom Twitch Streamers
		case "t/" + streamer:
			text = "Today is Sunday";
			break;
			
		//Error finding streamer
		default: 
			text = "Unable to find streamer: " + streamer;
	};
	console.log(text);
};