function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content;
}

function showGameInfo(that, gameID) {
    const { name, release_year, steam_id, picture, tags, stores, description } = GAME_DICT[gameID];

    let el = `<h3>${name} (${release_year})</h3>
              <div class="tag-list">
              ${tags.reduce((acc, tag) => acc + `<span class="tag">${tag}</span>`, "")}
              </div>
              <img class="picture" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${steam_id}/${picture}" alt="${name} picture">
              ${description}
              <h3>Store pages:</h4>
              ${Object.keys(stores).reduce((acc, key) => acc + `<a href="${stores[key]}" target="_blank" class="storepage"><button>${key}</button></a>`, "")}`;

    const domElement = that.parentElement.parentElement.querySelector(".gameinfo");
    domElement.innerHTML = el;
    setTimeout(() => { // Scroll after innerHTML is populated
        const y = domElement.getBoundingClientRect().top + window.pageYOffset - 60; // Account for navbar height
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 200);
}

function displayBanners(gameIDs, parentElement) {
    for (let i in gameIDs) {
        const { steam_id, name } = GAME_DICT[gameIDs[i]];
        parentElement.appendChild(htmlToElement(
            `<img class="banner" loading="lazy" onclick="showGameInfo(this, '${gameIDs[i]}');" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${steam_id}/header.jpg" alt="Banner for ${name}">`
        ));
    }
}

// TODO Move to HTML to make it more SEO-friendly
const GAME_DICT = {
    "owlboy": {
        "name": "Owlboy",
        "release_year": 2016,
        "steam_id": 115800,
        "tags": ["Singleplayer"],
        "picture": "ss_55c6ac1880c749d583213025a7453d9ef85737cc.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/115800/Owlboy/",
            "nintendo": "https://www.nintendo.com/games/detail/owlboy-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/owlboy/c1phtb54976g",
            "playstation": "https://store.playstation.com/?resolve=UP4218-CUSA09914_00-OWLBOY0000000000"
        },
        "description": `<p>You play as a mute owl named Otus in a world full of floating islands. The owls are a wise race within the world and Otus struggles to meet his teacher&apos;s expectations. With your best friend Geddy by your side, you explore old temples, lush jungles, and more. Everything is beautifully drawn in &quot;Hi-Bit&quot; pixelart and topped off with an <em>amazing</em> soundtrack. Just listen to <a href="https://www.youtube.com/watch?v=xw0_Ne5Zh8o" target="_blank" rel="noopener">Tropos</a> - one of the starting areas. Coupled with an interesting story and mechanics, this game is a joy to play.</p>`
    },
    "findingparadise": {
        "name": "Finding Paradise",
        "release_year": 2017,
        "steam_id": 337340,
        "tags": ["Singleplayer"],
        "picture": "ss_fb743c8df5feb6020915ce185fb6f53925f2d428.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/337340/Finding_Paradise/",
            "nintendo": "https://www.nintendo.com/games/detail/finding-paradise-switch/",
        },
        "description": `<p>Finding Paradise is the sequel to the game <a href="https://freebirdgames.com/to_the_moon/" target="_blank">To the Moon</a>, a game which won <a href="https://web.archive.org/web/20120122204316/http://gamespot.com/best-of-2011-special/awards/index.html?page=3" target="_blank" rel="noopener">GameSpot&apos;s Best Story</a> over AAA games like Portal 2 and Xenoblade Chronicles. While it is a sequel, you do not have to play To the Moon to enjoy Finding Paradise - it&apos;s a standalone game with it&apos;s own story.</p><p>In Finding Paradise, you follow doctors (Dr. Eva Rosalene and Dr. Neil Watts) who fulfil a dying person&apos;s wish. By traversing the patient&apos;s memories, Neil and Eva attempt to paint a new life where the patient fulfils their wish. The linear story is exceptionally well made and definitely pulls on the heart strings of those who play it. I wish I could gush about it more, but I don&apos;t want to spoil any of it so have my recommendation instead.</p>`
    },
    "rakuen": {
        "name": "Rakuen",
        "release_year": 2017,
        "steam_id": 559210,
        "tags": ["Singleplayer"],
        "picture": "ss_a81a2404e1072a59dcb8b0473765b8cfefe34db8.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/559210/Rakuen/",
        },
        "description": `<p>Rakuen is a game about a young boy with cancer. To ease his pains, his mother takes the boy through a fantasy land in hopes of getting a wish from Morizora - the guardian of the area. To get your wish, you need to help the different patients in the hospital and, in doing so, learn more about each character. Each patient has you doing tasks in both the fantasy world and hospital. On completing a story arc, you get a wonderful voiced song which really summarized the story of that patient. Overall, this was a very enjoyable game if not a bit emotional towards the end.</p>`
    },
    "wandersong": {
        "name": "Wandersong",
        "release_year": 2018,
        "steam_id": 530320,
        "tags": ["Singleplayer"],
        "picture": "ss_a03e759ec21f4ead60baaf518a6bcd2811f78508.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/530320/Wandersong/",
            "nintendo": "https://www.nintendo.com/games/detail/wandersong-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/wandersong/9nd3z0qh0nkb",
            "playstation": "https://store.playstation.com/?resolve=UP3864-CUSA13934_00-APP0990000000022"
        },
        "description": `<p>Wandersong is a game that feels distinctly unique to me. Just by looking at trailers and descriptions of the game, you would think it was anything special. You play as a bard with a single mechanic: singing. You partner with a witch who has awesome magical powers and yet the bard rarely uses them, instead opting for kindness or singing. This leads to the game exploring many topics that just aren&apos;t talked about much in many more mainstream games. So while it doesn&apos;t look like much on the cover, Wandersong&apos;s charm and unique mechanics lead to a very enjoyable game to play.</p>`
    },
    "gris": {
        "name": "GRIS",
        "release_year": 2018,
        "steam_id": 683320,
        "tags": ["Singleplayer"],
        "picture": "ss_a155ad5423e11e3e764a1a270dcf4f30323f0a35.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/683320/GRIS/",
            "nintendo": "https://www.nintendo.com/games/detail/gris-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/gris/9nhhp2h0zp98",
            "playstation": "https://store.playstation.com/?resolve=UP3643-CUSA16694_00-GRISPS4SIEA00000"
        },
        "description": `<p>GRIS feels more like an interactive art piece than it does a game - which isn&apos;t a bad thing. The game starts off as a clean black and white area but slowly adds different colors to create vibrant watercolor areas to explore. While you do unlock different abilities, the game is very linear and reminds me of games like <a href="https://thatgamecompany.com/journey/" target="_blank" rel="noopener">Journey</a> with its storytelling.</p>`
    },
    "farlonesails": {
        "name": "FAR: Lone Sails",
        "release_year": 2018,
        "steam_id": 609320,
        "tags": ["Singleplayer"],
        "picture": "ss_507c97eb2ed82ab564297fe206952c89936e23f2.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/609320/FAR_Lone_Sails/",
            "nintendo": "https://www.nintendo.com/games/detail/far-lone-sails-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/far-lone-sails/9p5x7892qpdl",
            "playstation": "https://store.playstation.com/?resolve=UP3178-CUSA14846_00-0000000000000000",
            "google play": "https://play.google.com/store/apps/details?id=ch.misterwhale.far",
            "apple": "https://apps.apple.com/us/app/id1525515023"
        },
        "description": `<p>This is a very short, linear game where you attempt to escape a dying civilization on your steampunk boat, car machine thing (I&apos;m honestly not really sure how else to describe it). The primary mechanic is finding fuel and upgrades for your machine to keep it running. It&apos;s a very atmospheric game where the enjoyment comes from the journey. The scenery also makes for some really good wallpapers.</p>`
    },
    "eastshade": {
        "name": "Eastshade",
        "release_year": 2019,
        "steam_id": 715560,
        "tags": ["Singleplayer"],
        "picture": "ss_2baf765b919318d92c37d91fa6511953f39a4a7b.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/715560/Eastshade/",
            "microsoft": "https://www.microsoft.com/en-us/p/eastshade/9plcr0fr564k?activetab=pivot:overviewtab",
            "playstation": "https://store.playstation.com/?resolve=UP3713-CUSA14848_00-0000000EASTSHADE"
        },
        "description": `<p>You play as a wandering painter where the main mechanic, obviously enough, is painting. Eastshade contains a wide range of different settings which allows for a wide diversity of things to paint. There&apos;s lush forests, wide open plains, mountains, caves, towns, and so much more. There is something very rewarding about being asked to do a painting of a scene then seeing your paintings in the local city. The idea of painting is simple and straightforward but fun in execution.</p>`
    },
    "spiritfarer": {
        "name": "Spiritfarer",
        "release_year": 2020,
        "steam_id": 972660,
        "tags": ["Singleplayer", "Local Co-op"],
        "picture": "ss_6ae155cb7c5f65f46a8f0dc43ba57aff8f57616c.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/972660/Spiritfarer/",
            "nintendo": "https://www.nintendo.com/games/detail/spiritfarer-switch/",
            "microsoft": "https://www.xbox.com/en-US/games/spiritfarer",
            "playstation": "https://store.playstation.com/?resolve=UP2388-CUSA20182_00-0000000000000000",
            "epic games": "https://www.epicgames.com/store/en-US/product/spiritfarer/home"
        },
        "description": `<p>This game was something I desperately needed this year between being stuck at home all year and being swamped with schoolwork and just work in general. This game is heavily inspired by <a href="https://en.wikipedia.org/wiki/Charon" target="_blank" rel="noopener">Charon from Greek mythology</a>. Just like Charon, you ferry spirits and help them with their daily needs until they are ready to move on to the afterlife. This is done by expanding your ship&apos;s facilities by gathering resources from the surrounding islands. The game does an excellent job managing tasks which prevents them from getting monotonous. It also does an excellent job getting to that first step of talking about death in a creative way; your job as the spirit farer is to help spirits move on but in doing so, it becomes very hard to say that final goodbye. Overall, I would highly recommend this game.</p>`
    },

    "necrodancer": {
        "name": "Crypt of the Necrodancer",
        "release_year": 2015,
        "steam_id": 247080,
        "tags": ["Singleplayer"],
        "picture": "ss_4a0424f7045cc8a0c82d796130ad74bae7b9277a.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/247080/Crypt_of_the_NecroDancer/",
            "nintendo": "https://www.nintendo.com/games/detail/crypt-of-the-necrodancer-nintendo-switch-edition/",
            "microsoft": "https://www.microsoft.com/en-us/p/crypt-of-the-necrodancer/bzhl37cpgp4x",
            "playstation": "https://store.playstation.com/?resolve=UP1162-CUSA03610_00-CRYPTNECRODANCER"
        },
        "description": `<p>Crypt of the Necrodancer is a challenging dungeon crawler where you have to move to the beat of the music. As you keep going further into the dungeons, the music gets progressively faster and more intense. The idea is simple but the amount of item variation and characters leads to lot to explore. If you want a similar game but less intense, check out <a href="https://www.nintendo.com/games/detail/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda-switch/" target="_blank" rel="noopener">Cadence of Hyrule</a>.</p>`
    },
    "oriblindforest": {
        "name": "Ori and the Blind Forest",
        "release_year": 2015,
        "steam_id": 387290,
        "tags": ["Singleplayer"],
        "picture": "ss_d0098e4878a61dcb363feadcf671076121252cca.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/387290/Ori_and_the_Blind_Forest_Definitive_Edition/",
            "nintendo": "https://www.nintendo.com/games/detail/ori-and-the-blind-forest-definitive-edition-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/ori-and-the-blind-forest-definitive-edition/9nblggh1z6fb",
        },
        "description": `<p>I&apos;m not sure if this technically counts as an indie game but I&apos;m adding it anyway! This 2D platformer metroidvania is visually and mechanically stunning. You are tasked with saving the spirit tree who has been harmed by the giant owl Kuro. You traverse through a large world trying to restore the spirit tree&apos;s power while gaining upgrade along the way. Ori and the Will of the Wisps - the sequel to Ori and the Blind Forest - is also out now which further expands on these mechanics with combat.</p>`
    },
    "undertale": {
        "name": "Undertale",
        "release_year": 2015,
        "steam_id": 391540,
        "tags": ["Singleplayer"],
        "picture": "ss_edab41f7c9fa287b0d90ebfa3b9219fec6e1b3ed.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/391540/Undertale/",
            "nintendo": "https://www.nintendo.com/games/detail/undertale-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/undertale/9n046hwgq4j2",
            "playstation": "https://store.playstation.com/?resolve=UP3893-CUSA08801_00-TFSHVCUTPS400084",
        },
        "description": `<p>If you want to learn how to make an impactful game without requiring a AAA budget, look no further than Undertale. You play as a human who fell into a large underground network which monsters live in. Each monster you meet is unique and full of character. Since the story is so linear, I&apos;ll just say it was very well put together. It balances very serious topics with light-hearted comedy in a very clean way and is overall an absolute pleasure to play.</p>`
    },
    "stardewvalley": {
        "name": "Stardew Valley",
        "release_year": 2016,
        "steam_id": 413150,
        "tags": ["Singleplayer", "[1.5 Update] Local Co-op", "Online Multiplayer"],
        "picture": "ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/413150/Stardew_Valley/",
            "nintendo": "https://www.nintendo.com/games/detail/stardew-valley-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/stardew-valley/c3d891z6tnqm",
            "playstation": "https://store.playstation.com/?resolve=UP2456-CUSA06840_00-STARDEW00000SIEA",
            "google play": "https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley",
            "apple": "https://apps.apple.com/us/app/stardew-valley/id1406710800"
        },
        "description": `<p>Stardew Valley is a very relaxing game that I really enjoy playing to wind down for the day. You can farm crops, explore abandoned mines, and get to know the local residents. It&apos;s a fun game that, as said earlier, is just a really nice way to relax. The recent 1.5 update (only out on Steam at the time of writing) also added a lot of late-game content for free which only adds to the value.</p>`
    },
    "ahatintime": {
        "name": "A Hat in Time",
        "release_year": 2017,
        "steam_id": 253230,
        "tags": ["Singleplayer", "Local Co-op", "[STEAM DLC] Online Multiplayer"],
        "picture": "ss_24648d05f16fe1cdb50965d8ccc8d029dbb70512.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/253230/A_Hat_in_Time/",
            "nintendo": "https://www.nintendo.com/games/detail/a-hat-in-time-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/a-hat-in-time/bx91dhsr4c5t",
            "playstation": "https://store.playstation.com/?resolve=UP3864-CUSA09267_00-AHATINTIMEPS4000"
        },
        "description": `<p>This game is all sorts of crazy and fun. The gist of the story is you play as an alien space kid who has to recollect hourglass time pieces to fuel your ship. The game is advertised as a &quot;cute-as-heck platformer&quot; and it definitely is. You gain abilities by knitting hats that let you run, slow down time, and throw potions to blow up crates and annoy the local residents. There are also plenty of customization options which only further adds to the cute-as-heck feel of the game.</p><p>The game also has local co-op which doubles the shenanigans you can have. If you get the Steam version of the game, you can also have access to online multiplayer when you get the Nyakuza Metro DLC. The DLCs only further adds onto what was a very fun game with new regions to explore and more character customizations. The Steam modding community is also very active and has hundreds of levels to explore. They actually had so many mod submissions that they <a href="https://steamcommunity.com/games/AHatinTime/announcements/detail/2604720045601880682" target="_blank" rel="noopener">exceeded the games max ID number</a> for a time.</p>`
    },
    "celeste": {
        "name": "Celeste",
        "release_year": 2018,
        "steam_id": 504230,
        "tags": ["Singleplayer"],
        "picture": "ss_3140f6f87aa74c20e142c36d74691f930eda88d5.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/504230/Celeste/",
            "nintendo": "https://www.nintendo.com/games/detail/celeste-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/celeste/bwmql2rpwbhb",
            "playstation": "https://store.playstation.com/?resolve=UP2120-CUSA11302_00-CELESTEXXCELESTE",
            "epic games": "https://www.epicgames.com/store/en-US/product/celeste/home"
        },
        "description": `<p>Celeste is a 2D platformer about climbing a mountain. I don&apos;t usually play platformers but this one was an absolute joy to play. The controls are precise and the game does an excellent job balancing difficulty. While the game can be a bit difficult, it is very generous with saving progress and levels are laid out to help you learn and succeed. There are also many builtin assists to make the journey easier if you struggle too much. The game&apos;s soundtrack is also <em>really</em> good and helped me keep going even when I was stuck. I would wholeheartedly recommend this game.</p>`
    },
    "honk": {
        "name": "Untitled Goose Game",
        "release_year": 2019,
        "steam_id": 837470,
        "tags": ["Singleplayer", "Local Co-op"],
        "picture": "ss_7576323f465966792d0fb021acf5a8a81a16e9f9.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/837470/Untitled_Goose_Game/",
            "nintendo": "https://www.nintendo.com/games/detail/untitled-goose-game-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/untitled-goose-game/9mvtctdthh23",
            "playstation": "https://store.playstation.com/?resolve=UP3971-CUSA23079_00-HONKHONKHONKHONK",
            "epic games": "https://www.epicgames.com/store/en-US/product/untitled-goose-game/home"
        },
        "description": `<p>This game absolutely took the internet by storm when it came out and for good reason. You are a goose whose only purpose in life is to ruin everyone&apos;s day. Activities on the agenda include: have a picnic (by stealing the local gardener&apos;s food), go shopping (forcing a kid to buy his own toys back in the process), and reign supreme as a bird of prey. It&apos;s a very silly game that will bring much laughter to those who play it. Plus there&apos;s a dedicated button for honking.</p>`
    },
    "hades": {
        "name": "Hades",
        "release_year": 2020,
        "steam_id": 1145360,
        "tags": ["Singleplayer"],
        "picture": "ss_abb2427810a4e91cc600f37c3630b912d4e0191b.600x338.jpg",
        "stores": {
            "steam": "https://store.steampowered.com/app/1145360/Hades/",
            "nintendo": "https://www.nintendo.com/games/detail/hades-switch/",
            "epic games": "https://www.epicgames.com/store/en-US/product/hades/home"
        },
        "description": `<p>Supergiant (makers of <a href="https://www.supergiantgames.com/games/bastion" target="_blank" rel="noopener">Bastion</a>, <a href="https://www.supergiantgames.com/games/transistor" target="_blank" rel="noopener">Transistor</a>, and <a href="https://www.supergiantgames.com/games/pyre" target="_blank" rel="noopener">Pyre</a>) has a way of introducing ideas in a unique and creative way and you can definitely see that in this dungeon crawler. The gist of the story is Zagreus is attempting to leave the underworld and gets aid from the Olympus gods. You go through three major areas each with different atmospheres and enemies. Each run (no matter how far you get) furthers your progress in the story making the inevitable death easier to bear.</p>`
    }
};

const MAIN_GAMES = [
    "owlboy", "findingparadise", "rakuen",
    "wandersong", "gris", "farlonesails",
    "eastshade", "spiritfarer"
];

const WELLKNOWN_GAMES = [
    "necrodancer", "oriblindforest", "undertale",
    "stardewvalley", "ahatintime", "celeste",
    "honk", "hades"
];

displayBanners(MAIN_GAMES, document.querySelector("#main-indies .gamebanners"));
displayBanners(WELLKNOWN_GAMES, document.querySelector("#wellknown-indies .gamebanners"));