var Beam = function(displayName, username, imgID, imgExt) {
    imgExt = typeof imgExt !== 'undefined' ? imgExt : "jpg";
    username = username.toLowerCase();
    
    img = "https://s3.amazonaws.com/uploads.beam.pro/avatars/" + imgID +  "-128x128." + imgExt +  "?v=0";
    _url = "http://beam.pro/" + username;
    
    return {"name": displayName, "image": img, "url": _url};
};

var Twitch = function(displayName, username, imgID, imgExt) {
    imgExt = typeof imgExt !== 'undefined' ? imgExt : "png";
    username = username.toLowerCase();
    
    img = "http://static-cdn.jtvnw.net/jtv_user_pictures/" + username + "-profile_image-" + imgID + "-300x300." + imgExt;
    _url = "http://twitch.tv/" + username;
    
    return {"name": displayName, "image": img, "url": _url};
};

var Youtube = function(displayName, username, imgID) {
    username = username.toLowerCase();
    
    img = "";
    _url = "https://gaming.youtube.com/c/" + username + "/live";
    
    return {"name": displayName, "image": img, "url": _url};
};

var getStreamer = function(streamer) {
	switch (streamer) {
        case "smbdnd":
            return {"name": "[18+] SMB DnD", "image": "https://s3.amazonaws.com/uploads.beam.pro/avatars/910-128x128.jpg?v=0", "url": "http://smbtabletop.smblive.net/"};

		// Beam Streamers 'https://s3.amazonaws.com/uploads.beam.pro/avatars/' + imgID +  '-128x128.jpg?v=0'
		// https://beam.pro/api/v1/channels/USER

		case "ali":
			return Beam("Ali", "AliTF", "u29yvkt9-28597", "undefined");
		case "cubed":
			return Beam("2Cubed", "2Cubed", "2547"); //[imageBeam("2547"), linkBeam("2Cubed"), "2Cubed"];
		case "ben":
			return Beam(); //[imageBeam("3303"), linkBeam("BenBaptist"), "BenBaptist"];
		case "chris":
			return Beam(); //[imageBeam("3171"), linkBeam("SWChris"), "SWChris"];
		case "coach":
			return Beam(); //[imageBeam("2i70n2qw-4255"), linkBeam("Coachwraymc"), "CoachWRayMC"];
		case "cherry":
			return Beam(); //[imageBeam("4044"), linkBeam("CherryPGamer"), "CherryPGamer"];
		case "cpatcharmy":
			return Beam(); //[imageBeam("6pydelr8-5849"), linkBeam("CherrypatchArmy"), "Cherrypatch Army"];
		case "dav":
			return Beam(); //[imageBeam("2275"), linkBeam("Davkas"), "Davkas"]; // Dav has default picture. Using userID for imgID. Prooooobably won't work if like Coach's or Deci's 
		case "deci":
			return Beam(); //[imageBeam("nk8feb3w-2257"), linkBeam("DeciTM"), "Deci ™"];
		case "derpo":
			return Beam(); //[imageBeam("3579"), linkBeam("Home_Derpo"), "Home Derpo"];
		case "dot":
			return Beam(); //[imageBeam("3652"), linkBeam("Dot83"), "Dot83"];
		case "duke":
			return Beam(); //[imageBeam("3526"), linkBeam("Duke"), "The Duke Minecraft"];
		case "em":
			return Beam(); //[imageBeam("5301"), linkBeam("HumansOnFire"), "Humans On Fire (Em)"];
		case "eve":
			return Beam(); //[imageBeam("dj7cpil1-1811"), linkBeam("Evelyn3905"), "Evelyn"];
		case "ferria":
			return Beam(); //[imageBeam("mwlg5sxa", "undefined"), linkBeam("FerriaForever"), "Ferria Forever"];
		case "fullstack":
			return Beam(); //[imageBeam("9g4r2iiu-19318"), linkBeam("FullstackGaming"), "Fullstack Server"];
		case "graph":
			return Beam(); //[imageBeam("2266"), linkBeam("Graphoniac"), "Graphoniac"];
		case "graphic":
			return Beam(); //[imageBeam("318"), linkBeam("Graphic"), "Graphic"];
		case "kirei":
			return Beam(); //[imageBeam("203"), linkBeam("Kirei"), "Kirei 'Anti-TeamWolf' Fujin"];
		case "lofty":
			return Beam(); //[imageBeam("3924"), linkBeam("Lofty"), "Lofty"];
		case "max":
			return Beam(); //[imageBeam("3532"), linkBeam("Maxampere"), "Max Ampere"];
		case "sweet":
			return Beam(); //[imageBeam("5286"), linkBeam("MNSweet"), "'Max' MNSweet"];
		case "nite":
			return Beam(); //[imageBeam("3606"), linkBeam("nite97m"), "Nite"];
		case "pg":
			return Beam(); //[imageBeam("b0je2cmo-5637"), linkBeam("peacegirl96"), "Peace 'War' Girl"];
		case "ping":
			return Beam(); //[imageBeam("3983"), linkBeam("pingpong1109"), "Ping Pong"];
		case "suego":
			return Beam(); //[imageBeam("d2do6f5a-13553"), linkBeam("SuegoFaults"), "SuegoFaults Server"];
		case "smb":
			return Beam(); //[imageBeam("910"), linkBeam("SMBLive"), "SMB Live"];
		case "theo":
			return Beam(); //[imageBeam("617"), linkBeam("theo_the_ape"), "The the Ape"];
		case "xcentrik":
			return Beam(); //[imageBeam("3107"), linkBeam("Xcentrik4"), "X 'BlameX' Centrik"];
		case "xyn":
			return Beam(); //[imageBeam("3599"), linkBeam("Xyntak"), "Xyntak"];

		// Twitch Streamers 'http://static-cdn.jtvnw.net/jtv_user_pictures/' + streamer + '-profile_image-' + imgID + '-300x300.png'
		// https://api.twitch.tv/kraken/users/USER

		case "brhysh":
			username = "Brhysh";
			return; //[imageTwitch("2deae5228438f83e"), linkTwitch(username), "Brhysh the Lumberjack"];
		case "chaotic":
			username = "ChaoticIntake";
			return; //[imageTwitch("1884788acb7f31e5"), linkTwitch(username), "Chaotic Intake"];
		case "chough":
			username = "Choughington";
			return; //[imageTwitch("1884788acb7f31e5"), linkTwitch(username), "Choughington"];
		case "dminer":
			return Twitch("D 'self-advertiser' 78", "dminer78", "cf1a9b082582c8ea");
		case "draax":
			username = "DraaxLP";
			return; //[imageTwitch("fa81760ec4c3ebf6"), linkTwitch(username), "Draax"];
		case "dwarf":
			username = "DwarfufGood";
			return; //[imageTwitch("1df256abfefc661c", "jpeg"), linkTwitch(username), "DwarfufGood"];
		case "erijah":
			username = "Erijah";
			return; //[imageTwitch("ffcde58ae40d3752"), linkTwitch(username), "Erijah"];
		case "esp":
			username = "ESP4Him";
			return; //[imageTwitch("3c2dfd41fec490bc", "jpeg"), linkTwitch(username), "E 'Snort' P"];
		case "g4":
			username = "G4ivl3_0v3r";
			return; //[imageTwitch("3fe25dcffe3750b2"), linkTwitch(username), "Game Over"];
		case "nihon":
			username = "NihonTiger";
			return; //[imageTwitch("961c7e8fbe67b6b5"), linkTwitch(username), "Nihon Tiger"];
		case "ick":
			username = "ickabodx";
			return; //[imageTwitch("1f2f256239790c5d"), linkTwitch(username), "Ickabodx"];
		case "igamer":
			username = "theofficialigamer";
			return; //[imageTwitch("0c3d9cbd97024349", "jpeg"), linkTwitch(username), "iGamer"];
		case "kebb":
			username = "Kebbrokk";
			return; //[imageTwitch("03507287bc00788b"), linkTwitch(username), "Kebbrokk"];
		case "maddiie":
			username = "MaddiieManeater";
			return; //[imageTwitch("c5f5c7c88cf1656a"), linkTwitch(username), "Maddiie"];
		case "mcg":
			username = "mc_guitarist1795";
			return; //[imageTwitch("4119e7b41f0d0d47"), linkTwitch("legendofmc"), "Legend of MCG"];
		case "mk":
			username = "MKTheWorst";
			return; //[imageTwitch("da828105cacf6407", "jpeg"), linkTwitch(username), "MK 'NOT' the Worst"];
		case "nightfalcon":
			username = "Nightfalcon4";
			return; //[imageTwitch("ebd464ae7baeecc5"), linkTwitch(username), "Night Falcon"];
		case "paul":
			username = "PaulFTW87";
			return; //[imageTwitch("1994f8f767a37a01"), linkTwitch(username), "Paul FTW"];
		case "pixel":
			username = "PixelHunter101";
			return; //[imageTwitch("cebeb4636a1643a7", "jpeg"), linkTwitch(username), "The famous Pixelhunter"];
		case "punz":
			username = "Punz0matic_5k";
			return; //[imageTwitch("4b3a56452814bba7", "jpeg"), linkTwitch(username), "Punz '#blamePunz' 0Matic"];
		case "tater":
			username = "Taterswag";
			return; //[imageTwitch("7db75bb31bbcbc68"), linkTwitch(username), "Tater Swag"];
		case "shadow":
			username = "TricksterShadow";
			return; //[imageTwitch("3551bcd31e14acf2"), linkTwitch(username), "Trickster Shadow"];
		case "shelby":
			username = "shelbyfrasier";
			return; //[imageTwitch("31648edb1a8f6804", "jpeg"), linkTwitch(username), "Shelby Frasier"];
		case "sheep":
			username = "mrsheepco";
			return; //[imageTwitch("6e87b667d772fd2c", "jpeg"), linkTwitch(username), "Mr Sheep Co"];
		case "steve":
			username = "PHDSteve";
			return; //[imageTwitch("e205b4c8494d4c43", "jpeg"), linkTwitch(username), "PHD Steve"];
		case "tatty":
			username = "TattyBudderfly";
			return; //[imageTwitch("7d937ce8cdf9d6d2"), linkTwitch(username), "Tatty 'Art' Budderfly"];
		case "wyld":
			username = "Wyld";
			return; //[imageTwitch("689b33e7c409d7fa", "jpeg"), linkTwitch(username), "Wyld 'Cluckington Master'"];

		// Error finding streamer
		default:
            return {"name": streamer, "image": "images/unknownStreamer.png", "url": ""};
	}
};