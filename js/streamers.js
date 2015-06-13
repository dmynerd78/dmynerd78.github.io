beamLink = "https://beam.pro/";
twitchLink = "http://twitch.tv/dminer78/";

var getStreamer = function(streamer) {

	switch (streamer) {
		
		//Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		case "2cubed":
			imgID = "2547";
			link = beamLink + "2cubed"
			break;
		case "ben":
			imgID = "3303";
			link = beamLink + "benbaptist"
			break;
		case "chris":
			imgID = "3171";
			link = beamLink + "swchris"
			break;
		case "coach":
			imgID = "2i70n2qw-4255";
			link = beamLink + "coachwraymc"
			break;
		case "dav":
			imgID = "2275"; //Dav has default picture. Using userID for imgID. Prooooobably won't work if like Coach's or Deci's
			link = beamLink + "davkas"
			break;
		case "deci":
			imgID = "l1rz9ayv-2257";
			link = beamLink + "decitm"
			break;
		case "derpo":
			imgID = "3579";
			link = beamLink + "home_derpo"
			break;
		case "dot":
			imgID = "3652";
			link = beamLink + "dot83"
			break;
		case "duke":
			imgID = "3526";
			link = beamLink + "duke"
			break;
		case "graph":
			imgID = "2266";
			link = beamLink + "graphoniac"
			break;
		case "kirei":
			imgID = "203";
			link = beamLink + "kirei"
			break;
		case "max":
			imgID = "3532";
			link = beamLink + "maxampere"
		case "ping":
			imgID = "3983"; //Again, default picture. Assuming imgID = userID
			link = beamLink + "pingpong1109"
			break;
		case "smb":
			imgID = "910";
			link = beamLink + "smblive"
			break;
		case "theo":
			imgID = "617";
			link = beamLink + "theo_the_ape"
			break;
		case "xcentrik":
			imgID = "3107";
			link = beamLink + "xcentrik4"
			break;
		case "xyn":
			imgID = "3599";
			link = beamLink + "xyntak"
			break;
			
		//Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		
		case "brhysh":
			imgID = "";
			link =  twitchLink + "brhysh1";
			break;
		case "chough":
			imgID = "";
			link =  twitchLink + "choughington";
			break;
		case "g4":
			imgID = "";
			link =  twitchLink + "g4ivl3_0v3r";
			break;
		case "ick":
			imgID = "";
			link =  twitchLink + "ickabodx";
			break;
		case "kebb":
			imgID = "";
			link =  twitchLink + "kebbrokk";
			break;
		case "mcg":
			imgID = "";
			link =  twitchLink + "mc_guitarist1795";
			break;
		case "mk":
			imgID = "da828105cacf6407";
			link =  twitchLink + "mktheworst";
			break;
		case "nihon":
			imgID = "";
			link =  twitchLink + "nihontiger";
			break;
		case "paul":
			imgID = "";
			link =  twitchLink + "paulftw87";
			break;
		case "pixel":
			imgID = "";
			link = twitchLink + "pixelhunter101"
			break;
		case "punz":
			imgID = "";
			link = twitchLink + "punz0matic_5k"
			break;
		case "shadow":
			imgID = "";
			link =  twitchLink + "trickstershadow";
			break;
		case "wyld":
			imgID = "";
			link =  twitchLink + "wyld";
			break;
			
		//Custom Beam Streamer
		case "b/" + streamer:
			imgID = "";
			link = beamLink + streamer;
			break;
		
		//Custom Twitch Streamers
		case "t/" + streamer:
			imgID = "";
			link = twitchLink + streamer;
			break;
			
		//Error finding streamer
		default:
			imgID = "";
			link=""
			console.warn("Unable to find streamer: " + streamer)
	};
	
	return [imgID, link];
};