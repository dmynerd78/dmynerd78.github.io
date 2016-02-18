var Beam = function(userID, username, displayName) {
    displayName = typeof displayName !== 'undefined' ? displayName : username;
    username = username.toLowerCase();
    img = "https://beam.pro/api/v1/users/" + userID + "/avatar?w=128x128&h=128x128&v=0";
    _url = "http://beam.pro/" + username;
    
    return {"username": username, "displayName": displayName, "image": img, "url": _url};
};

var Twitch = function(imgID, username, displayName, imgExt) {
    displayName = typeof displayName !== 'undefined' ? displayName : username;
    username = username.toLowerCase();
    imgExt = typeof imgExt !== 'undefined' ? imgExt : "png";
    img = "http://static-cdn.jtvnw.net/jtv_user_pictures/" + username + "-profile_image-" + imgID + "-300x300." + imgExt;
    _url = "http://twitch.tv/" + username;
    
    return {"username": username, "displayName": displayName, "image": img, "url": _url};
};

var Youtube = function(displayName, username, imgID) {
    username = username.toLowerCase();
    
    img = "";
    _url = "https://gaming.youtube.com/c/" + username + "/live";
    
    return {"username": username, "displayName": displayName, "image": img, "url": _url};
};

var getStreamer = function(streamer) {
	switch (streamer) {
        case "smbdnd":
            return {"username": "SMBLive", "displayName": "[18+] SMB DnD", "image": "https://beam.pro/api/v1/users/910/avatar?w=128x128&h=128x128&v=0", "url": "http://smbtabletop.smblive.net/"};

		// Beam Streamers "https://beam.pro/api/v1/users/" + imgID + "/avatar?w=128x128&h=128x128&v=0"
		// https://beam.pro/api/v1/channels/USER

		case "8":
			return Beam(2547, "2Cubed");
		case "ben":
			return Beam(3303, "benbaptist", "Ben Baptist");
		case "chris":
			return Beam(3171, "SWChris");
		case "coach":
			return Beam(4255, "CoachWRayMC");
		case "cherry":
			return Beam(4044, "CherryPGamer");
		case "dav":
			return Beam(2275, "Davkas");
		case "deci":
			return Beam(2257, "DeciTM", "Deci™");
		case "derpo":
			return Beam(3579,"Home_Derpo", "Home Derpo");
		case "dj":
			return Beam(3675, "DJMuffinCrumbs");
		case "dot":
			return Beam(3652, "Dot83");
		case "duke":
			return Beam(3526, "duke", "The Duke Minecraft");
		case "em":
			return Beam(5301, "HumansonFire", "HumansonFire [Em]");
		case "ferria":
			return Beam(33937, "FerriaForever");
		case "fullstack":
			return Beam(19318, "FullstackGaming", "The Fullstack Server");
		case "golf":
			return Beam(5245, "Golfhaus");
		case "graph":
			return Beam(2266, "Graphoniac");
		case "kirei":
			return Beam(203, "Kirei", "Kirei 'Anti-TeamWolf' Fujin");
		case "lofty":
			return Beam(3924, "Lofty");
		case "max":
			return Beam(3532, "MaxAmpere");
		case "quirky":
			return Beam(26567, "QuirkySquid");
		case "suego":
			return Beam(13553, "SuegoFaults", "THe SuegoFaults Server");
		case "smb":
			return Beam(910, "SMBLive", "The SMBLive Server");
		case "theo":
			return Beam(617, "theo_the_ape", "Alan");
		case "xcentrik":
			return Beam(3107, "xcentrik4", "#BlameX");
		case "xyn":
			return Beam(3599, "Xyntak");
		case "ping":
			return Beam(3430, "Pingpong");

		// Twitch Streamers http://static-cdn.jtvnw.net/jtv_user_pictures/" + username + "-profile_image-" + imgID + "-300x300." + imgExt;
		// https://api.twitch.tv/kraken/users/USER
		
        // TODO Get JSON file for image. If no display name given use display name form JSON file
		case "chaotic":
			return Twitch("1884788acb7f31e5", "ChaoticIntake", "Chaotic Intake");
		case "chough":
			return Twitch("c726d206e64c116e", "Choughington");
		case "dminer":
			return Twitch("cf1a9b082582c8ea", "dminer78", "D 'self-advertiser' 78");
		case "draax":
			return Twitch("fa81760ec4c3ebf6", "DraaxLP", "Draax");
		case "dwarf":
			return Twitch("1df256abfefc661c", "DwarfufGood");
		case "erijah":
			return Twitch("ffcde58ae40d3752", "Erijah");
		case "esp":
			return Twitch("3c2dfd41fec490bc", "ESP4Him", "ES(nort)P", "jpeg");
		case "fyp":
			return Twitch("40dba330b9b080f7", "FYPme");
		case "g4":
			return Twitch("3fe25dcffe3750b2", "G4ivl3_0v3r", "Game Over");
		case "grates":
			return Twitch("09edef9ae344f7ea", "wgrates", "Grates the Corgi");
		case "nihon":
			return Twitch("961c7e8fbe67b6b5", "NihonTiger");
		case "ick":
			return Twitch("1f2f256239790c5d", "Ickabodx");
		case "igamer":
			return Twitch("c726d206e64c116e", "theofficialigamer", "iGamer");
		case "jyggy":
			return Twitch("c06a66ba699a321b", "jyggy11", "Jyggy");
		case "kebb":
			return Twitch("03507287bc00788b", "Kebbrokk");
		case "maddiie":
			return Twitch("c5f5c7c88cf1656a", "MaddiieManeater", "Maddiie Maneater (She chose the name not me)");
		case "mcg":
			return Twitch("ca31240178193b90", "LegendofMCG", "MCG");
		case "mk":
			return Twitch("da828105cacf6407", "MKTheWorst", "MK (NOT) The Worst", "jpeg");
		case "paul":
			return Twitch("1994f8f767a37a01", "PaulFTW87", "Paul");
		case "pixel":
			return Twitch("cebeb4636a1643a7", "PixelHunter101", "PixelHunter", "jpeg");
		case "punz":
			return Twitch("4b3a56452814bba7", "Punz0matic_5k", "#BlamePunz AKA Punz0matic", "jpeg");
		case "shadow":
			return Twitch("3551bcd31e14acf2", "TricksterShadow", "Trickster Shadow");
		case "shelby":
			username = "shelbyfrasier";
			return Twitch("31648edb1a8f6804", "shelbyfrasier", "Shelby", "jpeg");
		case "tatty":
			username = "TattyBudderfly";
			return Twitch("7d937ce8cdf9d6d2", "TattyBudderfly");
		case "wyld":
			username = "Wyld";
			return Twitch("09ab9735bfbb7697", "Wyld", "Wyld");

		// Error finding streamer
		default:
            return {"username": streamer, "displayName": streamer, "image": "images/unknownStreamer.png", "url": ""};
	}
};
