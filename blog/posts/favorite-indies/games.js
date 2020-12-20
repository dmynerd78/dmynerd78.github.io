function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content;
}

function showGameInfo(that, gameID) {
    const { name, release_year, tags, stores, description } = GAME_DICT[gameID];

    let el = `<h3>${name} (${release_year})</h3>
                      <div class="tag-list">
                        ${tags.reduce((acc, tag) => acc + `<span class="tag">${tag}</span>`, "")}
                      </div>
                      <p>${description}</p>
                      <h3>Store pages:</h4>
                      ${Object.keys(stores).reduce((acc, key) => acc + `<a href="${stores[key]}" target="_blank" class="storepage"><button>${key}</button></a>`, "")}`;

    that.parentElement.parentElement.querySelector(".gameinfo").innerHTML = el;
}

function displayBanners(gameIDs, parentElement) {
    console.log()
    for (let i in gameIDs) {
        const { steam_id, name } = GAME_DICT[gameIDs[i]];
        parentElement.appendChild(htmlToElement(
            `<img class="banner" onclick="showGameInfo(this, '${gameIDs[i]}');" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${steam_id}/header.jpg" alt="Banner for ${name}">`
        ));
    }
}

// TODO: Minify
const GAME_DICT = {
    "owlboy": {
        "name": "Owlboy",
        "release_year": "2016",
        "steam_id": "115800",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/115800/Owlboy/",
            "nintendo": "https://www.nintendo.com/games/detail/owlboy-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/owlboy/c1phtb54976g",
            "playstation": "https://store.playstation.com/?resolve=UP4218-CUSA09914_00-OWLBOY0000000000"
        },
        "description": "Description goes here"
    },
    "findingparadise": {
        "name": "Finding Paradise",
        "release_year": "2017",
        "steam_id": "337340",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/337340/Finding_Paradise/",
            "nintendo": "https://www.nintendo.com/games/detail/finding-paradise-switch/",
        },
        "description": "Description goes here"
    },
    "rakuen": {
        "name": "Rakuen",
        "release_year": "2017",
        "steam_id": "559210",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/559210/Rakuen/",
        },
        "description": "Description goes here"
    },
    "ahatintime": {
        "name": "A Hat in Time",
        "release_year": "2017",
        "steam_id": "253230",
        "tags": ["Singleplayer", "Local Co-op", "[STEAM] Online Co-op"],
        "stores": {
            "steam": "https://store.steampowered.com/app/253230/A_Hat_in_Time/",
            "nintendo": "https://www.nintendo.com/games/detail/a-hat-in-time-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/a-hat-in-time/bx91dhsr4c5t",
            "playstation": "https://store.playstation.com/?resolve=UP3864-CUSA09267_00-AHATINTIMEPS4000"
        },
        "description": "Description goes here"
    },
    "wandersong": {
        "name": "Wandersong",
        "release_year": "2018",
        "steam_id": "530320",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/530320/Wandersong/",
            "nintendo": "https://www.nintendo.com/games/detail/wandersong-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/wandersong/9nd3z0qh0nkb",
            "playstation": "https://store.playstation.com/?resolve=UP3864-CUSA13934_00-APP0990000000022"
        },
        "description": "Description goes here"
    },
    "gris": {
        "name": "GRIS",
        "release_year": "2018",
        "steam_id": "683320",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/683320/GRIS/",
            "nintendo": "https://www.nintendo.com/games/detail/gris-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/gris/9nhhp2h0zp98",
            "playstation": "https://store.playstation.com/?resolve=UP3643-CUSA16694_00-GRISPS4SIEA00000"
        },
        "description": "Description goes here"
    },
    "farlonesails": {
        "name": "FAR: Lone Sails",
        "release_year": "2018",
        "steam_id": "609320",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/609320/FAR_Lone_Sails/",
            "nintendo": "https://www.nintendo.com/games/detail/far-lone-sails-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/far-lone-sails/9p5x7892qpdl",
            "playstation": "https://store.playstation.com/?resolve=UP3178-CUSA14846_00-0000000000000000",
            "google play": "https://play.google.com/store/apps/details?id=ch.misterwhale.far",
            "apple": "https://apps.apple.com/us/app/id1525515023"
        },
        "description": "Description goes here"
    },
    "eastshade": {
        "name": "Eastshade",
        "release_year": "2019",
        "steam_id": "715560",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/715560/Eastshade/",
            "microsoft": "https://www.microsoft.com/en-us/p/eastshade/9plcr0fr564k?activetab=pivot:overviewtab",
            "playstation": "https://store.playstation.com/?resolve=UP3713-CUSA14848_00-0000000EASTSHADE"
        },
        "description": "Description goes here"
    },
    "spiritfarer": {
        "name": "Spiritfarer",
        "release_year": "2020",
        "steam_id": "972660",
        "tags": ["Singleplayer", "Local Co-op"],
        "stores": {
            "steam": "https://store.steampowered.com/app/972660/Spiritfarer/",
            "nintendo": "https://www.nintendo.com/games/detail/spiritfarer-switch/",
            "microsoft": "https://www.xbox.com/en-US/games/spiritfarer",
            "playstation": "https://store.playstation.com/?resolve=UP2388-CUSA20182_00-0000000000000000",
            "epic games": "https://www.epicgames.com/store/en-US/product/spiritfarer/home"
        },
        // Also on game pass if you have that
        "description": "Description goes here"
    },
    "necrodancer": {
        "name": "Crypt of the Necrodancer",
        "release_year": "2015",
        "steam_id": "247080",
        "tags": ["Singleplayer"],
        "stores": {
            "steam": "https://store.steampowered.com/app/247080/Crypt_of_the_NecroDancer/",
            "nintendo": "https://www.nintendo.com/games/detail/crypt-of-the-necrodancer-nintendo-switch-edition/",
            "microsoft": "https://www.microsoft.com/en-us/p/crypt-of-the-necrodancer/bzhl37cpgp4x",
            "playstation": "https://store.playstation.com/?resolve=UP1162-CUSA03610_00-CRYPTNECRODANCER"
        },
        "description": "Decription goes here"
    },
    "oriblindforest": {
        "name": "Ori and the Blind Forest",
        "release_year": "2015",
        "steam_id": "387290",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/387290/Ori_and_the_Blind_Forest_Definitive_Edition/",
            "nintendo": "https://www.nintendo.com/games/detail/ori-and-the-blind-forest-definitive-edition-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/ori-and-the-blind-forest-definitive-edition/9nblggh1z6fb",
        },
        "description": "Description goes here"
    },
    "undertale": {
        "name": "Undertale",
        "release_year": "2015",
        "steam_id": "391540",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/391540/Undertale/",
            "nintendo": "https://www.nintendo.com/games/detail/undertale-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/undertale/9n046hwgq4j2",
            "playstation": "https://store.playstation.com/?resolve=UP3893-CUSA08801_00-TFSHVCUTPS400084",
        },
        "description": "Description goes here"
    },
    "stardewvalley": {
        "name": "Stardew Valley",
        "release_year": "2016",
        "steam_id": "413150",
        "tags": ["Singleplayer", "[Update 1.5] Local Co-op", "Online Co-op"],
        "stores": {
            "steam": "https://store.steampowered.com/app/413150/Stardew_Valley/",
            "nintendo": "https://www.nintendo.com/games/detail/stardew-valley-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/stardew-valley/c3d891z6tnqm",
            "playstation": "https://store.playstation.com/?resolve=UP2456-CUSA06840_00-STARDEW00000SIEA",
            "google play": "https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley",
            "apple": "https://apps.apple.com/us/app/stardew-valley/id1406710800"
        },
        "description": "Description goes here"
    },
    "hollowknight": {
        "name": "Hollow Knight",
        "release_year": "2017",
        "steam_id": "367520",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/367520/Hollow_Knight/",
            "nintendo": "https://www.nintendo.com/games/detail/hollow-knight-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/hollow-knight-voidheart-edition/9mw9469v91lm",
            "playstation": "https://store.playstation.com/?resolve=UP1822-CUSA13632_00-HOLLOWKNIGHT18US",
        },
        "description": "Description goes here"
    },
    "celeste": {
        "name": "Celeste",
        "release_year": "2018",
        "steam_id": "504230",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/504230/Celeste/",
            "nintendo": "https://www.nintendo.com/games/detail/celeste-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/celeste/bwmql2rpwbhb",
            "playstation": "https://store.playstation.com/?resolve=UP2120-CUSA11302_00-CELESTEXXCELESTE",
            "epic games": "https://www.epicgames.com/store/en-US/product/celeste/home"
        },
        "description": "Description goes here"
    },
    "honk": {
        "name": "Untitled Goose Game",
        "release_year": "2019",
        "steam_id": "837470",
        "tags": ["Singleplayer", "Local Co-op"],
        "stores": {
            "steam": "https://store.steampowered.com/app/837470/Untitled_Goose_Game/",
            "nintendo": "https://www.nintendo.com/games/detail/untitled-goose-game-switch/",
            "microsoft": "https://www.microsoft.com/en-us/p/untitled-goose-game/9mvtctdthh23",
            "playstation": "https://store.playstation.com/?resolve=UP3971-CUSA23079_00-HONKHONKHONKHONK",
            "epic games": "https://www.epicgames.com/store/en-US/product/untitled-goose-game/home"
        },
        "description": "Description goes here"
    },
    "hades": {
        "name": "Hades",
        "release_year": "2020",
        "steam_id": "1145360",
        "tags": ["Singleplayer",],
        "stores": {
            "steam": "https://store.steampowered.com/app/1145360/Hades/",
            "nintendo": "https://www.nintendo.com/games/detail/hades-switch/",
            "epic games": "https://www.epicgames.com/store/en-US/product/hades/home"
        },
        "description": "Description goes here"
    },
};

// Mini metro
// Linelight
// A Story About My Uncle
// West of Loathing
// Keep Talking and Nobody Explodes

const MAIN_GAMES = [
    "owlboy", "findingparadise", "rakuen",
    "ahatintime", "wandersong", "gris",
    "farlonesails", "eastshade", "spiritfarer"
];

const WELLKNOWN_GAMES = [
    "necrodancer", "oriblindforest", "undertale",
    "stardewvalley", "hollowknight", "celeste",
    "honk", "hades"
];

displayBanners(MAIN_GAMES, document.querySelector("#main-indies .gamebanners"));
displayBanners(WELLKNOWN_GAMES, document.querySelector("#wellknown-indies .gamebanners"));