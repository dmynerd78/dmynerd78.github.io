beamLink = "https://beam.pro/";
twitchLink = "http://twitch.tv/";

var imageBeam = function(ID) {
	return 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + ID +  '-128x128.jpg?v=0';
}

var imageTwitch = function(ID) {
	return 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + username + '-profile_image-' + ID + '-300x300.png'
}

var getStreamer = function(streamer) {

	switch (streamer) {
		
		// Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		// https://beam.pro/api/v1/channels/USER
		
		case "2cubed":
			username = "2cubed";
			imgID = imageBeam("2547");
			link = beamLink + username;
			break;
		case "ben":
			username = "benbaptist";
			imgID = imageBeam("3303");
			link = beamLink + username;
			break;
		case "chris":
			username = "swchris";
			imgID = imageBeam("3171");
			link = beamLink + username;
			break;
		case "coach":
			username = "coachwraymc";
			imgID = imageBeam("2i70n2qw-4255");
			link = beamLink + username;
			break;
		case "dav":
			username = "davkas";
			imgID = imageBeam("2275"); // Dav has default picture. Using userID for imgID. Prooooobably won't work if like Coach's or Deci's
			link = beamLink + username;
			break;
		case "deci":
			username = "decitm";
			imgID = imageBeam("l1rz9ayv-2257");
			link = beamLink + username;
			break;
		case "derpo":
			username = "home_derpo";
			imgID = imageBeam("3579");
			link = beamLink + username;
			break;
		case "dot":
			username = "dot83";
			imgID = imageBeam("3652");
			link = beamLink + username;
			break;
		case "duke":
			username = "duke";
			imgID = imageBeam("3526");
			link = beamLink + username;
			break;
		case "graph":
			username = "graphoniac";
			imgID = imageBeam("2266");
			link = beamLink + username;
			break;
		case "kirei":
			username = "kirei";
			imgID = imageBeam("203");
			link = beamLink + username;
			break;
		case "max":
			username = "maxampere";
			imgID = imageBeam("3532");
			link = beamLink + username;
		case "ping":
			username = "pingpong1109";
			imgID = imageBeam("3983"); // Again, default picture. Assuming imgID = userID
			link = beamLink + username;
			break;
		case "smb":
			username = "smblive";
			imgID = imageBeam("910");
			link = beamLink + username;
			break;
		case "theo":
			username = "theo_the_ape";
			imgID = imageBeam("617");
			link = beamLink + username;
			break;
		case "xcentrik":
			username = "xcentrik4";
			imgID = imageBeam("3107");
			link = beamLink + username;
			break;
		case "xyn":
			username = "xyntak";
			imgID = imageBeam("3599");
			link = beamLink + username;
			break;
			
		// Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		// https://api.twitch.tv/kraken/users/USER
		
		case "brhysh":
			username = "brhysh1";
			imgID = imageTwitch("2deae5228438f83e");
			link =  twitchLink + username;
			break;
		case "chough":
			username = "choughington";
			imgID = imageTwitch("c726d206e64c116e");
			link =  twitchLink + username;
			break;
		case "g4":
			username = "g4ivl3_0v3r";
			imgID = imageTwitch("3fe25dcffe3750b2");
			link =  twitchLink + username;
			break;
		case "ick":
			username = "ickabodx";
			imgID = imageTwitch("1f2f256239790c5d");
			link =  twitchLink + username;
			break;
		case "kebb":
			username = "kebbrokk";
			imgID = imageTwitch("03507287bc00788b");
			link =  twitchLink + username;
			break;
		case "mcg":
			username = "mc_guitarist1795";
			imgID = imageTwitch("4119e7b41f0d0d47");
			link =  twitchLink + username;
			break;
		case "mk":
			username = "mktheworst";
			imgID = "da828105cacf6407";
			link =  twitchLink + username;
			break;
		case "nihon":
			username = "nihontiger";
			imgID = imageTwitch("961c7e8fbe67b6b5");
			link =  twitchLink + username;
			break;
		case "paul":
			username = "paulftw87";
			imgID = imageTwitch("1994f8f767a37a01");
			link =  twitchLink + username;
			break;
		case "pixel":
			username = "pixelhunter101";
			imgID = imageTwitch("cebeb4636a1643a7");
			link = twitchLink + username;
			break;
		case "punz":
			username = "punz0matic_5k";
			imgID = imageTwitch("4b3a56452814bba7");
			link = twitchLink + username;
			break;
		case "shadow":
			username = "trickstershadow";
			imgID = imageTwitch("3551bcd31e14acf2");
			link =  twitchLink + username;
			break;
		case "wyld":
			username = "wyld";
			imgID = imageTwitch("689b33e7c409d7fa");
			link =  twitchLink + username;
			break;
			
		// Custom Beam Streamer
		case "b/" + streamer:
			imgID = "";
			link = beamLink + streamer;
			break;
		
		// Custom Twitch Streamers
		case "t/" + streamer:
			imgID = "";
			link = twitchLink + streamer;
			break;
			
		// Error finding streamer
		default:
			imgID = "";
			link = ""
			console.warn("Unable to find streamer: " + streamer)
	};
	
	return [imgID, link];
};