// All indexes start at 1 **NOT ZERO**

let currChapter = 1;
let currPage = 1;
let currMaxPage = 2;

const MOBILE_WIDTH = 900;
const IMG_PATH = "sanctum-2-comics";
const IMG_TITLE = document.getElementById("imgTitle");
const IMG_HREF = document.getElementById("imgHref");
const IMG_HREF_BLANK = document.getElementById("imgHrefBlank");
const IMG_SRC_AVIF = document.getElementById("imgSrcAvif");
const IMG_SRC_WEBP = document.getElementById("imgSrcWebp");
const IMG_SRC_JPG = document.getElementById("imgSrcJpg");

const PREV_PAGE = document.getElementById("prevPage");
const NEXT_PAGE = document.getElementById("nextPage");
const PAGE_SELECT = document.getElementById("pageSelect");
const CHAPTER_LIST = document.getElementById("chapterList");
const COMIC_PREVIEW = document.getElementById("comicPreview");
const CHAPTERS = [  // Chapter order
    "", "introduction", "park", "bio-lab", "the-gate", "construction-site", "com-tower",
    "cliff-lodge", "outpost", "train-station", "canopy", "roadworks", "abandoned-lab",
    "the-depths", "the-labyrinth", "the-wilderness", "the-end", "credits", "cluster",
    "the-smasher", "jellyfish-cove", "laser-bridge", "shortcut", "the-slums",
    "power-relay", "sokol-1", "sokol-2", "sokol-3", "dam", "field", "bog",
    "last-chance-1", "last-chance-2", "last-chance-3", "below-arc", "arc", "radar",
    "the-last-stand-1", "the-last-stand-2"
];

const PAGES = {
    getMaxPage: function(chapName) {
        // Pages that have more than 1 page. If not in here, the chapter has 1 page
        return this[CHAPTERS[chapName]] || 1;
    },

    // Number of pages per chapter
    "introduction": 2,
    "the-gate": 2,
    "train-station": 2,
    "abandoned-lab": 2,
    "the-depths": 2,
    "the-wilderness": 2,
    "credits": 2,
    "cluster": 3,
    "the-smasher": 3,
    "jellyfish-cove": 2,
    "laser-bridge": 2,
    "shortcut": 4,
    "the-slums": 4,
    "power-relay": 2,
    "dam": 2,
    "bog": 2,
    "below-arc": 2,
    "the-last-stand-1": 3,
    "the-last-stand-2": 3
};

/**
 * Returns the element height including margins
 * https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin#answer-54095466
 * @param element - element
 * @returns {number}
 */
function outerHeight(element) {
    const height = element.offsetHeight;
    let style = window.getComputedStyle(element);

    return ['top', 'bottom']
        .map(side => parseInt(style[`margin-${side}`]))
        .reduce((total, side) => total + side, height)
}

function resizeChapterList() {
    // Disable resizing for mobile
    if(window.innerWidth <= MOBILE_WIDTH) {
        CHAPTER_LIST.style.height = "";
        return;
    }

    const previewHeight = Array.from(COMIC_PREVIEW.children).reduce((prev, curr) => prev + outerHeight(curr), 0);
    CHAPTER_LIST.style.height = `${previewHeight}px`;
}

// https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling#answer-41754707
function isElementVisible(el, holder) {
    holder = holder || document.body
    const { top, bottom, height } = el.getBoundingClientRect();
    const holderRect = holder.getBoundingClientRect();

    return top <= holderRect.top
        ? holderRect.top - top <= height
        : bottom - holderRect.bottom <= height;
}

function updateActives(newChapterIndex, newPageIndex) {
    // Remove previous active markers
    CHAPTER_LIST.querySelector(".active")?.classList.remove("active");
    PAGE_SELECT.querySelector(".active")?.classList.remove("active");

    // Add current active markers
    const selectedChapter = CHAPTER_LIST.querySelector(`.sanctumBtn[data-chapter="${newChapterIndex}"]`);
    selectedChapter.classList.add("active");
    PAGE_SELECT.querySelector(`.sanctumBtn[data-page="${newPageIndex}"]`).classList.add("active");

    // Scroll chapter into view if it's not visible (and not on mobile)
    if(!isElementVisible(selectedChapter, CHAPTER_LIST) && window.innerWidth > MOBILE_WIDTH) {
        selectedChapter.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }

    // Disable Previous Page/Next Page buttons when on first or last page
    PREV_PAGE.disabled = (currChapter == 1 && currPage == 1);
    NEXT_PAGE.disabled = (currChapter == CHAPTERS.length - 1 && currPage == PAGES.getMaxPage(CHAPTERS.length - 1));
}

function displayPage(chapterIndex, page, maxPages) {
    updateActives(chapterIndex, page);

    let chapter = CHAPTERS[chapterIndex];
    IMG_TITLE.textContent = `${chapter.replaceAll("-", " ")} (${page} / ${maxPages})`;

    PAGE_SELECT.children[page-1].classList.add("active");

    // Hide appropriate #pageSelect buttons
    Array.from(PAGE_SELECT.children).map((el) => el.dataset.page <= maxPages ? el.classList.remove("hide") : el.classList.add("hide"));

    // Set image sources
    IMG_SRC_AVIF.srcset = `${IMG_PATH}/english/${chapter}/${page}_small.avif`;
    IMG_SRC_WEBP.srcset = `${IMG_PATH}/english/${chapter}/${page}_small.webp`;
    IMG_SRC_JPG.src = `${IMG_PATH}/english/${chapter}/${page}_small.jpg`;

    // Set full-res links
    IMG_HREF.href = `${IMG_PATH}/english/${chapter}/${page}.jpg`;
    IMG_HREF_BLANK.href = `${IMG_PATH}/english/${chapter}/${page}_blank.png`;
}

CHAPTER_LIST.addEventListener("click", (e) => {
    if(!e?.target || !e.target.dataset.chapter) {
        return;
    }
    currChapter = parseInt(e.target.dataset.chapter);
    currPage = 1;
    currMaxPage = PAGES.getMaxPage(currChapter);
    displayPage(currChapter, currPage, currMaxPage);
});

PAGE_SELECT.addEventListener("click", (e) => {
    if(!e?.target || !e.target.dataset.page) {
        return;
    }

    currPage = parseInt(e.target.dataset.page);
    displayPage(currChapter, currPage, currMaxPage);
});

PREV_PAGE.addEventListener("click", () => {
    if(currPage > 1) {
        currPage--;
    } else {
        currChapter--;
        currMaxPage = PAGES.getMaxPage(currChapter);
        currPage = currMaxPage;
    }

    displayPage(currChapter, currPage, currMaxPage);
});

NEXT_PAGE.addEventListener("click", () => {
    if(currPage < PAGES.getMaxPage(currChapter)) {
        currPage++;
    } else {
        currPage = 1;
        currChapter++;
        currMaxPage = PAGES.getMaxPage(currChapter);
    }

    displayPage(currChapter, currPage, currMaxPage);
});

window.addEventListener("resize", resizeChapterList);
resizeChapterList();