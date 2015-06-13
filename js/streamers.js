
var getStreamer = function(streamer) {
	beamLink = "https://beam.pro/"
	twitchLink = "http://twitch.tv/dminer78/"
	switch (streamer) {
		
		//Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		case "duke":
			imgID = "3526";
			link = beamLink + "duke"
			break;
			
		//Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		
		case "mk":
			imgID = "da828105cacf6407";
			link =  twitchLink + "MKtheWorst";
			break;
			
		//Custom Beam Streamer
		case "b/" + streamer:
			imgID = "unknownStreamer";
			link = beamLink + streamer;
			break;
		
		//Custom Twitch Streamers
		case "t/" + streamer:
			imgID = "unknownStreamer";
			link = twitchLink + streamer;
			break;
			
		//Error finding streamer
		default:
			imgID = "unknownStreamer";
			text = "Unable to find streamer: " + streamer;
	};
	console.log(text);
};