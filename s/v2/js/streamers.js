var linkBeam = function(user) {
	return "https://beam.pro/" + user.toLowerCase();
}

var linkTwitch = function(user) {
	return "http://twitch.tv/" + user.toLowerCase();
}

var imageBeam = function(ID, ext) {
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
	    
    case "smbdnd":
        return [imageBeam("910"), "http://smbtabletop.smblive.net/", "[18+] SMB DnD"];
		break;

		// Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		// https://beam.pro/api/v1/channels/USER

		case "ali":
			return [imageBeam("u29yvkt9-28597"), linkBeam("AliTF"), "Ali"];
			break;
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
			return [imageBeam("nk8feb3w-2257"), linkBeam("DeciTM"), "Deci ™"];
			break;
		case "derpo":
			return [imageBeam("3579"), linkBeam("Home_Derpo"), "Home Derpo"];
			break;
		case "ditchthelabel":
			return [imageBeam("d2do6f5a-13553"), linkBeam("SuegoFaults"), "#DitchTheLabel Charity Stream"];
			break;
		case "dot":
			return [imageBeam("3652"), linkBeam("Dot83"), "Dot83"];
			break;
		case "duke":
			return [imageBeam("3526"), linkBeam("Duke"), "The Duke Minecraft"];
			break;
		case "em":
			return [imageBeam("5301"), linkBeam("HumansOnFire"), "Humans On Fire (Em)"];
			break;
		case "eve":
			return [imageBeam("dj7cpil1-1811"), linkBeam("Evelyn3905"), "Evelyn"];
			break;
		case "ferria":
			return [imageBeam("mwlg5sxa", "undefined"), linkBeam("FerriaForever"), "Ferria Forever"];
			break;
		case "fullstack":
			return [imageBeam("9g4r2iiu-19318"), linkBeam("FullstackGaming"), "Fullstack Server"];
			break;
		case "graph":
			return [imageBeam("2266"), linkBeam("Graphoniac"), "Graphoniac"];
			break;
		case "graphic":
			return [imageBeam("318"), linkBeam("Graphic"), "Graphic"];
			break;
		case "kirei":
			return [imageBeam("203"), linkBeam("Kirei"), "Kirei 'Anti-TeamWolf' Fujin"];
			break;
		case "lofty":
			return [imageBeam("3924"), linkBeam("Lofty"), "Lofty"];
			break;
		case "max":
			return [imageBeam("3532"), linkBeam("Maxampere"), "Max Ampere"];
			break;
		case "sweet":
			return [imageBeam("5286"), linkBeam("MNSweet"), "'Max' MNSweet"];
			break;
		case "nite":
			return [imageBeam("3606"), linkBeam("nite97m"), "Nite"];
			break;
		case "pg":
			return [imageBeam("b0je2cmo-5637"), linkBeam("peacegirl96"), "Peace 'War' Girl"];
			break;
		case "ping":
			return [imageBeam("3983"), linkBeam("pingpong1109"), "Ping Pong"];
			break;
		case "suego":
			return [imageBeam("d2do6f5a-13553"), linkBeam("SuegoFaults"), "SuegoFaults Server"];
			break;
		case "smb":
			return [imageBeam("910"), linkBeam("SMBLive"), "SMB Live"];
			break;
		case "theo":
			return [imageBeam("617"), linkBeam("theo_the_ape"), "The the Ape"];
			break;
		case "xcentrik":
			return [imageBeam("3107"), linkBeam("Xcentrik4"), "X 'BlameX' Centrik"];
			break;
		case "xyn":
			return [imageBeam("3599"), linkBeam("Xyntak"), "Xyntak"];
			break;

		// Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		// https://api.twitch.tv/kraken/users/USER

		case "brhysh":
			username = "Brhysh";
			return [imageTwitch("2deae5228438f83e"), linkTwitch(username), "Brhysh the Lumberjack"];
			break;
		case "chaotic":
			username = "ChaoticIntake";
			return [imageTwitch("1884788acb7f31e5"), linkTwitch(username), "Chaotic Intake"];
			break;
		case "chough":
			username = "Choughington";
			return [imageTwitch("1884788acb7f31e5"), linkTwitch(username), "Choughington"];
			break;
		case "dminer":
			username = "Dminer78";
			return [imageTwitch("cf1a9b082582c8ea"), linkTwitch(username), "D 'Food' 78"];
			break;
		case "draax":
			username = "DraaxLP";
			return [imageTwitch("fa81760ec4c3ebf6"), linkTwitch(username), "Draax"];
			break;
		case "dwarf":
			username = "DwarfufGood";
			return [imageTwitch("1df256abfefc661c", "jpeg"), linkTwitch(username), "DwarfufGood"];
			break;
		case "erijah":
			username = "Erijah";
			return [imageTwitch("ffcde58ae40d3752"), linkTwitch(username), "Erijah"];
			break;
		case "esp":
			username = "ESP4Him";
			return [imageTwitch("3c2dfd41fec490bc", "jpeg"), linkTwitch(username), "E 'Snort' P"];
			break;
		case "g4":
			username = "G4ivl3_0v3r";
			return [imageTwitch("3fe25dcffe3750b2"), linkTwitch(username), "Game Over"];
			break;
		case "grates":
			username = "wgrates";
			return [imageTwitch("ec98015d7d4b7bb6", "jpeg"), linkTwitch(username), "W 'Corgi' Grates"];
			break;
		case "nihon":
			username = "NihonTiger";
			return [imageTwitch("961c7e8fbe67b6b5"), linkTwitch(username), "Nihon Tiger"];
			break;
		case "ick":
			username = "ickabodx";
			return [imageTwitch("1f2f256239790c5d"), linkTwitch(username), "Ickabodx"];
			break;
		case "igamer":
			username = "theofficialigamer";
			return [imageTwitch("0c3d9cbd97024349", "jpeg"), linkTwitch(username), "iGamer"];
			break;
		case "kebb":
			username = "Kebbrokk";
			return [imageTwitch("03507287bc00788b"), linkTwitch(username), "Kebbrokk"];
			break;
		case "maddiie":
			username = "MaddiieManeater";
			return [imageTwitch("c5f5c7c88cf1656a"), linkTwitch(username), "Maddiie"];
			break;
		case "mcg":
			username = "mc_guitarist1795";
			return [imageTwitch("4119e7b41f0d0d47"), linkTwitch("legendofmc"), "Legend of MCG"];
			break;
		case "mk":
			username = "MKTheWorst";
			return [imageTwitch("da828105cacf6407", "jpeg"), linkTwitch(username), "MK 'NOT' the Worst"];
			break;
		case "nightfalcon":
			username = "Nightfalcon4";
			return [imageTwitch("ebd464ae7baeecc5"), linkTwitch(username), "Night Falcon"];
			break;
		case "paul":
			username = "PaulFTW87";
			return [imageTwitch("1994f8f767a37a01"), linkTwitch(username), "Paul FTW"];
			break;
		case "pixel":
			username = "PixelHunter101";
			return [imageTwitch("cebeb4636a1643a7", "jpeg"), linkTwitch(username), "The famous Pixelhunter"];
			break;
		case "punz":
			username = "Punz0matic_5k";
			return [imageTwitch("4b3a56452814bba7", "jpeg"), linkTwitch(username), "Punz '#blamePunz' 0Matic"];
			break;
		case "tater":
			username = "Taterswag";
			return [imageTwitch("7db75bb31bbcbc68"), linkTwitch(username), "Tater Swag"];
			break;
		case "shadow":
			username = "TricksterShadow";
			return [imageTwitch("3551bcd31e14acf2"), linkTwitch(username), "Trickster Shadow"];
			break;
		case "shelby":
			username = "shelbyfrasier";
			return [imageTwitch("31648edb1a8f6804", "jpeg"), linkTwitch(username), "Shelby Frasier"];
			break;
		case "sheep":
			username = "mrsheepco";
			return [imageTwitch("6e87b667d772fd2c", "jpeg"), linkTwitch(username), "Mr Sheep Co"];
			break;
		case "steve":
			username = "PHDSteve";
			return [imageTwitch("e205b4c8494d4c43", "jpeg"), linkTwitch(username), "PHD Steve"];
			break;
		case "tatty":
			username = "TattyBudderfly";
			return [imageTwitch("7d937ce8cdf9d6d2"), linkTwitch(username), "Tatty 'Art' Budderfly"];
			break;
		case "wyld":
			username = "Wyld";
			return [imageTwitch("689b33e7c409d7fa", "jpeg"), linkTwitch(username), "Wyld 'Cluckington Master'"];
			break;

		// Error finding streamer
		default:	//TODO Fix
			if (streamer.startsWith("b/")) {
				username = streamer.replace("b/", "");
				url = linkBeam(username);
			} else if (streamer.startsWith("t/")) {
				username = streamer.replace("t/", "");
				url = linkTwitch(username);
			} else {
				username = "'" + streamer + "' is not a valid username!";
				url = "#";

				console.warn("Unable to find streamer: " + streamer);
			}

			return ["images/unknownStreamer.png", url, username];
	};
};
