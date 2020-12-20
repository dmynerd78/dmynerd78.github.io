/*
Options:
    gototop: When scrolling down the page, add a "go to top" button
    spoilers: Allows for the use of <spoiler> tags which hide content until it's clicked
*/

function scrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function enableGoToTop() {
    // TODO Fade in/out
    let goToTop = document.createElement('template');
    goToTop.innerHTML = `<div id="gototop">
        <!-- Source: FontAwesome -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
        </svg>
    </div>`.trim();
    goToTop = goToTop.content.firstChild;

    goToTop.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", function () {
        if (scrollTop() > 400) {
            goToTop.style.display = "block";
        } else {
            goToTop.style.display = "none";
        }
    });

    document.querySelector("#right").appendChild(goToTop);
}

function enableSpoilers() {
    document.querySelectorAll("spoiler").forEach(function (el) {
        el.title = "Click me!";
        el.onclick = function (ev) {
            el.setAttribute("active", "");
            ev.preventDefault();
            el.onclick = null;
        };
    });
}

let settings = document.getElementById("script-utils").getAttribute("data-enable").split(",");
for(var index in settings) {
    switch(settings[index].trim()) {
        case "gototop":
            enableGoToTop();
            break;
        case "spoilers":
            enableSpoilers();
            break;
        default:
            console.warn(`${settings[index]} is an invalid option`);
            break;
    }
}