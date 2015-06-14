beamLink = "https://beam.pro/";
twitchLink = "http://twitch.tv/";

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

var getStreamer = function(streamer) {

	switch (streamer) {
		
		// Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		// https://beam.pro/api/v1/channels/USER
		
		case "2cubed":
			username = "2Cubed";
			imgID = imageBeam("2547");
			link = beamLink + username;
			break;
		case "ben":
			username = "BenBaptist";
			imgID = imageBeam("3303");
			link = beamLink + username;
			break;
		case "chris":
			username = "SWChris";
			imgID = imageBeam("3171");
			link = beamLink + username;
			break;
		case "coach":
			username = "Coachwraymc";
			imgID = imageBeam("2i70n2qw-4255");
			link = beamLink + username;
			break;
		case "cpatcharmy":
			username = "CherrypatchArmy";
			imgID = imageBeam("6pydelr8-5849");
			link = beamLink + username;
			break;
		case "dav":
			username = "Davkas";
			imgID = imageBeam("2275"); // Dav has default picture. Using userID for imgID. Prooooobably won't work if like Coach's or Deci's
			link = beamLink + username;
			break;
		case "deci":
			username = "DeciTM";
			imgID = imageBeam("l1rz9ayv-2257");
			link = beamLink + username;
			break;
		case "derpo":
			username = "Home_Derpo";
			imgID = imageBeam("3579");
			link = beamLink + username;
			break;
		case "dot":
			username = "Dot83";
			imgID = imageBeam("3652");
			link = beamLink + username;
			break;
		case "duke":
			username = "Duke";
			imgID = imageBeam("3526");
			link = beamLink + username;
			break;
		case "graph":
			username = "Graphoniac";
			imgID = imageBeam("2266");
			link = beamLink + username;
			break;
		case "kirei":
			username = "Kirei";
			imgID = imageBeam("203");
			link = beamLink + username;
			break;
		case "max":
			username = "Maxampere";
			imgID = imageBeam("3532");
			link = beamLink + username;
		case "ping":
			username = "Pingpong1109";
			imgID = imageBeam("3983"); // Again, default picture. Assuming imgID = userID
			link = beamLink + username;
			break;
		case "smb":
			username = "SMBLive";
			imgID = imageBeam("910");
			link = beamLink + username;
			break;
		case "theo":
			username = "Theo_the_Ape";
			imgID = imageBeam("617");
			link = beamLink + username;
			break;
		case "xcentrik":
			username = "Xcentrik4";
			imgID = imageBeam("3107");
			link = beamLink + username;
			break;
		case "xyn":
			username = "Xyntak";
			imgID = imageBeam("3599");
			link = beamLink + username;
			break;
			
		// Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		// https://api.twitch.tv/kraken/users/USER
		
		case "brhysh":
			username = "Brhysh1";
			imgID = imageTwitch("2deae5228438f83e");
			link =  twitchLink + username;
			break;
		case "chough":
			username = "Choughington";
			imgID = imageTwitch("c726d206e64c116e");
			link =  twitchLink + username;
			break;
		case "dminer":
			username = "Dminer78";
			imgID = imageTwitch("cf1a9b082582c8ea");
			link =  twitchLink + username;
			break;
		case "g4":
			username = "G4ivl3_0v3r";
			imgID = imageTwitch("3fe25dcffe3750b2");
			link =  twitchLink + username;
			break;
		case "ick":
			username = "Ickabodx";
			imgID = imageTwitch("1f2f256239790c5d");
			link =  twitchLink + username;
			break;
		case "kebb":
			username = "Kebbrokk";
			imgID = imageTwitch("03507287bc00788b");
			link =  twitchLink + username;
			break;
		case "mcg":
			username = "MC_Guitarist1795";
			imgID = imageTwitch("4119e7b41f0d0d47");
			link =  twitchLink + username;
			break;
		case "mk":
			username = "MKtheWorst";
			imgID = imageTwitch("da828105cacf6407", "jpeg");
			link =  twitchLink + username;
			break;
		case "nihon":
			username = "NihonTiger";
			imgID = imageTwitch("961c7e8fbe67b6b5");
			link =  twitchLink + username;
			break;
		case "paul":
			username = "PaulFTW87";
			imgID = imageTwitch("1994f8f767a37a01");
			link =  twitchLink + username;
			break;
		case "pixel":
			username = "PixelHunter101";
			imgID = imageTwitch("cebeb4636a1643a7");
			link = twitchLink + username;
			break;
		case "punz":
			username = "Punz0matic_5k";
			imgID = imageTwitch("4b3a56452814bba7");
			link = twitchLink + username;
			break;
		case "shadow":
			username = "TricksterShadow";
			imgID = imageTwitch("3551bcd31e14acf2");
			link =  twitchLink + username;
			break;
		case "wyld":
			username = "Wyld";
			imgID = imageTwitch("689b33e7c409d7fa");
			link =  twitchLink + username;
			break;
		
		//TODO Fix custom Twitch/Beam streams
		
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
	return [imgID, link, username];
};