var linkBeam = function(user) {
	return "https://beam.pro/" + user.toLowerCase();
}

var linkTwitch = function(user) {
	return "http://twitch.tv/" + user.toLowerCase();
}

var imageBeam = function(ID) {
	return 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + ID +  '-128x128.jpg?v=0';
}

var imageTwitch = function(ID, ext) {
	if(ext === undefined) {
		return 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + username.toLowerCase() + '-profile_image-' + ID + '-300x300.png'
	} else {
		return 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + username.toLowerCase() + '-profile_image-' + ID + '-300x300.' + ext;
	}
}

//return [imageBeam(""), linkBeam(""), displayName];

var getStreamer = function(streamer) {

	switch (streamer) {

		// Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		// https://beam.pro/api/v1/channels/USER

		case "cubed":
			return [imageBeam("2547"), linkBeam("2Cubed"), "2Cubed"];
			break;
		case "ben":
			return [imageBeam("3303"), linkBeam("BenBaptist"), "BenBaptist"];
			break;
		case "chris":
			return [imageBeam("3171"), linkBeam("SWChris"), "SWChris"];
			break;
		case "coach":
			return [imageBeam("2i70n2qw-4255"), linkBeam("Coachwraymc"), "CoachWRayMC"];
			break;
		case "cherry":
			return [imageBeam("4044"), linkBeam("CherryPGamer"), "CherryPGamer"];
			break;
		case "cpatcharmy":
			return [imageBeam("6pydelr8-5849"), linkBeam("CherrypatchArmy"), "Cherrypatch Army"];
			break;
		case "dav":
			return [imageBeam("2275"), linkBeam("Davkas"), "Davkas"]; // Dav has default picture. Using userID for imgID. Prooooobably won't work if like Coach's or Deci's
			break;
		case "deci":
			return [imageBeam("nk8feb3w-2257"), linkBeam("DeciTM"), "Deci™"];
			break;
		case "derpo":
			return [imageBeam("3579"), linkBeam("Home_Derpo"), "Home Derpo"];
			break;
		case "dot":
			return [imageBeam("3652"), linkBeam("Dot83"), "Dot83"];
		case "duke":
			return [imageBeam("3526"), linkBeam("Duke"), "The Duke Minecraft"];
		case "graph":
			return [imageBeam("2266"), linkBeam("Graphoniac"), "Graphoniac"];
		case "graphic":
			return [imageBeam("318"), linkBeam("Graphic"), "Graphic"];
		case "kirei":
			return [imageBeam("203"), linkBeam("Kirei"), "Kirei 'Anti-TeamWolf' Fujin"];
		case "lofty":
			return [imageBeam("3924"), linkBeam("Lofty"), "Lofty"];
		case "max":
			return [imageBeam("3532"), linkBeam("Maxampere"), "Max Ampere"];
		case "ping":
			return [imageBeam("3983"), linkBeam("pingpong1109"), "Ping Pong"];

		// Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		// https://api.twitch.tv/kraken/users/USER
		
		case "dminer":
			username = "Dminer78"
			return [imageTwitch("cf1a9b082582c8ea"), linkTwitch(username), "D 'Food' miner78"];
			break;

		// Error finding streamer
		default:
			imgID = "images/unknownStreamer.png";
			if(streamer.startsWith("b/")) {
				username = streamer.replace("b/", "");
			} else if(streamer.startsWith("t/")) {
				username = streamer.replace("t/", "");
			} else {
				username = "'" + streamer + "' is not a valid username!"
				console.warn("Unable to find streamer: " + streamer)
			}
	};
};
