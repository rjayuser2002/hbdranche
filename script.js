"use strict";

const pages = [
    {
        title: "A LITTLE SOMETHING FOR YOU",
        text: `Happy Birthday, Ranch! Surprise!!!

(Sorry, long message ahead. ⚠️)

I wanted to give you something useful, but I also wanted there to be a little piece of this birthday that you could keep coming back to. So here it is—a small corner of the internet made especially for you.

I have three things to say to you: Thank You, I am Sorry, and Please...`
    },
    {
        title: "THANK YOU",
        text: `First, THANK YOU for being a genuine friend and for making such a big impact on my life. This may sound cringey, but this is the truth, and that is how I feel.

Thank you for being the kind of friend who makes ordinary days a little better. I hope you know that your presence is appreciated more than words can easily explain. I want to thank you for being there. Your existence in this world is such a wonderful blessing from up above.

I can still remember those dark times that I experienced, when you were there, ready to listen and comfort me with the words I needed to hear. You were such an angel for lending me your ear, and I truly appreciate that.`
    },
    {
        title: "I AM SORRY.",
        text: `I am SORRY. I admit, I am not a perfect friend, nor a perfect “kuya” to you and to all our friends from Willumsen Boarding House. I am sorry that I crossed the line—for telling you how I feel about you.

I do not regret any of it, but somehow, I wish I hadn’t done it back then because I didn’t want to lose you as my friend.

I am so sorry for the times that I was not there when you needed a shoulder to cry on, an ear you could rant to, or a voice you could use to express what you really feel.

I am also very sorry that, all along, I knew that you and Fritz had a history. When you were narrating everything to me about the reason why you failed in some subjects, I already knew who you were referring to, even without you mentioning it.

Fritz is a good friend of mine, and so are you. I just hope that you will heal from all the things that you don’t talk about.`
    },
    {
        title: "PLEASE.",
        text: `PLEASE, please take care of yourself.

You deserve all the good things this life has to offer because I know you are a good person. I wish you could see yourself through my eyes and feel yourself through my heart so that you would know how much you matter to everyone around you.

So please, take care of your heart. Take care of your soul. And take care of yourself.`
    },
    {
        title: "HAPPY BIRTHDAY, RANCH.",
        text: `Happy Birthday again, Ranch. I hope this message makes your day a little more special.

Whatever this next year brings, I hope there are plenty of reasons for you to laugh, places you have never seen, dreams that slowly become real, and people around you who genuinely care.

You deserve all the good things this life has to offer, and I hope this next chapter gives you many reasons to smile.`
    },
    {
        title: "AND FINALLY…",
        text: `And whenever your phone is dying...

well, at least now you have a power bank.

I couldn’t make this message any longer. 😂`
    }
];

const portraitPhotos = [
    "port1", "port2", "port3", "port4",
    "port5", "port6", "port7", "port8",
    "port9", "port10", "port11", "port12",
    "port13", "port14", "port15", "port16",
    "port17"
];

const landscapePhotos = [
    "land1", "land2", "land3", "land4",
    "land5", "land6", "land7"
];

const IMAGE_EXTENSION = "jpg";

const portraitVideo = {
    filename: "vid1.mp4",
    message: `How cute of you to 'mukbang' the lettuce during our spontaneous samgyupsal dinner at Sodam. Looking forward to more sponty adventures with you, Ranch!`
};

const memoryCaptions = [
    
    "I think this was our first photo together, just the two of us, since we always have group photos. This was the day I was moving out of Willumsen Boarding House, and you were the only one willing to spend the day with me. I can't blame the others, though, since I came unannounced.",

    
    "This photo, too. I had so much fun with you that day. I was a bit surprised to find out you're into photobooths. I was like, 'Whoa, I did not see that coming!'",

    
    "I can't really remember the details of this day, but what I do remember is that you, Carl, and I were bored at the BH and didn't want to go to sleep yet, so we went out for burgers and milktea. That was also the day I almost lost my sling bag. Clumsy me!",

    
    "We took these silly close-up photos, and this was your entry when we were in Kawa, Valencia, trying to cool off from the hot weather and beat the boredom caused by the citywide blackout.",

   
    "Another group photo from our dinner at Inasal Gid. This was taken on Carl's birthday.",

    
    "One very random 'I'm too lazy to cook' moment from our Queen Chef, Jeremy. So we all decided to have dinner at Mr. Sizzlers instead.",

    
    "Tada! Cravings satisfied? Maybe? The most common comment I heard after eating here was that the food was too salty. HAHA!",

    
    "This photo was taken the night before Carl's birthday. How heartwarming it is to have all of us together in one frame. Well, not ALL of us, since Princess and the others weren't there. But still, it's a moment worth remembering.",

    
    "This was the very first time I wanted to join you guys for dinner. I always turned down every meal invitation you gave me, but this was the day I decided to step out of my comfort zone and try to make friends with everyone.",

    
    "On a random Thursday, I messaged you on Messenger for a spontaneous 'laag' at Robinsons Place, just to check out the new extension. Glad we ended up eating samgyupsal. 재밌었어, 진구야!",

    
    "This group photo was taken as a keepsafe for Maverick after he decided to move out of Willumsen Boarding House.",

    
    "When I was unemployed and staying in Siquijor, you guys would always take photos and send them to me whenever I randomly sent you money for food. Truly, my love language is food.",

    
    "After getting employed, I made sure to always treasure you guys and visit from time to time. This time, I invited you and Princess to grab something to eat at Bazinga. Just another expression of my love language: food.",

    
    "It was Carlo Oralde's birthday, and he invited everyone to dinner at Mang Inasal. We didn't get to talk much that night because I was overwhelmed by all the new faces I had to meet and smile at.",

    
    "Whenever I'm in Siquijor, I always wonder what you guys are up to. So, once again, I express my love for you through food. This time, you guys decided to eat out at Jollibee.",

    
    "Sana all, new haircut! I had already left for my hometown, and we had said our goodbyes, knowing we wouldn't see each other for a while since I had moved out of Willumsen Boarding House. Then, you sent me this selfie to show off your fresh haircut. What a cute surprise. I rarely receive selfies from you, and I've always figured that you're not really the selfie type of person. Or... are you?",

    
    "On the 16th of October, I went out with my college friends. I never expected Mike to invite me for a drink, so I turned him down because I was already having drinks with my college friends. However, they suggested that I invite Mike and the others to join us because, as they say, the more, the merrier. And guess what? You were there! Well, I’ve always thought of my college friends as being very welcoming toward my other circle of friends. We have something in common: we’re all NORSUnians. So, I thought, why not invite you guys over for a drink? It might be a great idea!",

    
    "We took a groufie to test out my laptop's camera. I think this was during my second week at DOH NIR CHD.",

    
    "Yohoo! We watched Spider-Man: Brand New Day and took this photo together. After all the struggles, you finally managed to get our tickets yourself! I'd love to watch another movie with you again soon.",

    
    "I asked you for a favor—to come with me to look for and canvass laptops for my work, and we ended up grabbing some lunch together.",

    
    "The very latest photo of us together. We grabbed some dinner at Mr. Sizzlers and talked about how our September went. By the way, I'm sorry to hear about what happened. Just know that I'm always all ears whenever you need someone to talk to.",

    
    "Another dinner out at Cheesestick Country! Jeremy went home to Siquijor, and neither of us wanted to cook anyway. HAHA!",

    
    "After Kawa, Valencia, we went straight to the shores of Dauin. What a busy day we had! As long as the blackout continued, the adventure just kept getting more intense.",

    
    "You guys took a groufie out of nowhere and sent it to me, and of course, I saved it as a memory. So, here it is now."
];

const musicTracks = [
    {
        title: "Minsan - Eraserheads",
        artist: "A song that reminds me of us",
        music: "music1.mp3",
        cover: "cover1.jpg"
    },
    {
        title: "Count on Me - Bruno Mars",
        artist: "Another piece of our friendship",
        music: "music2.mp3",
        cover: "cover2.jpg"
    },
    {
        title: "Saranggola - Ben&Ben",
        artist: "One more song for the memories",
        music: "music3.mp3",
        cover: "cover3.jpg"
    }
];

const $ = selector => document.querySelector(selector);

const gate = $("#gate");
const envelope = $("#envelope");
const welcome = $("#welcome");
const letterScreen = $("#letterScreen");
const closingScreen = $("#closingScreen");
const memoriesScreen = $("#memoriesScreen");
const musicScreen = $("#musicScreen");

const letter = $("#letter");
const bar = $("#bar");
const chapterTitle = $("#chapterTitle");
const chapterEyebrow = $("#chapterEyebrow");
const signature = $("#signature");
const nextButton = $("#next");
const openButton = $("#open");
const replayButton = $("#replay");
const memoriesButton = $("#memoriesButton");
const musicButton = $("#musicButton");
const dots = [...document.querySelectorAll(".dot")];

let page = 0;
let typingTimer = null;

const allPhotos = [...portraitPhotos, ...landscapePhotos];

const memoryItems = [
    ...portraitPhotos.map((filename, index) => ({
        type: "image",
        filename,
        caption: memoryCaptions[index],
        group: "portrait"
    })),

    {
        type: "video",
        filename: portraitVideo.filename,
        caption: portraitVideo.message,
        group: "video"
    },

    ...landscapePhotos.map((filename, index) => ({
        type: "image",
        filename,
        caption: memoryCaptions[portraitPhotos.length + index],
        group: "landscape"
    }))
];

let currentMemory = 0;
let currentTrack = 0;
let carouselBuilt = false;
let touchStartX = 0;
let touchStartY = 0;
let previousFocusedElement = null;

function openEnvelope() {
    if (envelope.classList.contains("opening")) return;

    envelope.classList.add("opening");
    burst(35);

    setTimeout(() => {
        gate.classList.add("gone");
    }, 700);
}

envelope.addEventListener("click", openEnvelope);

envelope.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEnvelope();
    }
});


function typeText() {
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
    }

    const current = pages[page];

    chapterTitle.textContent = current.title;
    chapterEyebrow.textContent = `Page ${page + 1} of ${pages.length}`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === page);
    });

    letter.textContent = "";
    bar.style.width = "0%";

    if (page === 0) {
        signature.textContent = "— Take your time. There is no rush.";
    } else if (page === pages.length - 1) {
        signature.textContent = "— And yes, the power bank is real.";
    } else {
        signature.textContent =
            "— From someone who is very grateful for you.";
    }

    let i = 0;

    typingTimer = setInterval(() => {
        letter.textContent += current.text[i] || "";
        i++;

        bar.style.width = `${Math.min(i / current.text.length * 100, 100)}%`;

        if (i >= current.text.length) {
            clearInterval(typingTimer);
            typingTimer = null;
            bar.style.width = "100%";
        }
    }, 10);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

openButton.addEventListener("click", () => {
    welcome.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    page = 0;
    typeText();
    scrollToTop();
    burst(60);
});

nextButton.addEventListener("click", () => {
    // If the typewriter is still running, finish the current page first.
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
        letter.textContent = pages[page].text;
        bar.style.width = "100%";
        return;
    }

    if (page < pages.length - 1) {
        page++;
        typeText();
        scrollToTop();
        burst(35);
    } else {
        letterScreen.classList.add("hidden");
        closingScreen.classList.remove("hidden");
        scrollToTop();
        burst(120);
    }
});

replayButton.addEventListener("click", () => {
    closingScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    page = 0;
    typeText();
    scrollToTop();
    burst(35);
});

function showClosing() {
    memoriesScreen.classList.add("hidden");
    musicScreen.classList.add("hidden");
    closingScreen.classList.remove("hidden");
    scrollToTop();
}

function showMemories() {
    closingScreen.classList.add("hidden");
    musicScreen.classList.add("hidden");
    memoriesScreen.classList.remove("hidden");

    if (!carouselBuilt) {
        buildCarousel();
    }

    requestAnimationFrame(renderCarousel);
    scrollToTop();
    burst(30);
}

function showMusic() {
    closingScreen.classList.add("hidden");
    memoriesScreen.classList.add("hidden");
    musicScreen.classList.remove("hidden");
    scrollToTop();
    burst(30);
}

memoriesButton.addEventListener("click", showMemories);
musicButton.addEventListener("click", showMusic);

$("#memoryBack").addEventListener("click", showClosing);
$("#memoryBackBottom").addEventListener("click", showClosing);

const carouselStage = $("#carouselStage");
const carouselTrack = $("#carouselTrack");
const carouselCounter = $("#carouselCounter");
const carouselItemTitle = $("#carouselItemTitle");

const carouselPrev = $("#carouselPrev");
const carouselNext = $("#carouselNext");
const carouselFirst = $("#carouselFirst");
const carouselLast = $("#carouselLast");

function wrapIndex(index) {
    const count = memoryItems.length;
    return ((index % count) + count) % count;
}

function getMemoryLabel(index) {
    const item = memoryItems[index];

    if (item.type === "video") return "Click the photos to view messages.";
    if (item.group === "portrait") {
        return "Click the photos to view messages.";
    }

    return "Click the photos to view messages.";
}

function buildCarousel() {
    carouselTrack.innerHTML = "";

    memoryItems.forEach((item, index) => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "carousel-card";
        card.dataset.index = String(index);
        card.setAttribute(
            "aria-label",
            `Open ${getMemoryLabel(index)} in the photo viewer`
        );

        if (item.group === "landscape") {
            card.classList.add("is-landscape");
        }

        if (item.type === "video") {
            
            const thumbnail = document.createElement("img");
            thumbnail.src = "assets/images/video-thumbnail.png";
            thumbnail.alt = "Video memory";
            thumbnail.className = "carousel-video-thumbnail";

            const playIcon = document.createElement("span");
            playIcon.className = "carousel-play-icon";
            playIcon.textContent = "▶";

            card.appendChild(thumbnail);
            card.appendChild(playIcon);

        } else {
            const image = document.createElement("img");
            image.src = `assets/images/${item.filename}.${IMAGE_EXTENSION}`;
            image.alt = getMemoryLabel(index);
            image.loading = index < 5 ? "eager" : "lazy";
            image.draggable = false;

            image.addEventListener("error", () => {
                card.classList.add("image-error");
                image.alt = "Image could not be loaded";
            });

            card.appendChild(image);
        }

        const badge = document.createElement("span");
        badge.className = "card-type";
        badge.textContent =
            item.type === "video"
                ? "VIDEO"
                : item.group === "portrait"
                    ? "PORTRAIT"
                    : "LANDSCAPE";

        card.appendChild(badge);

        card.addEventListener("click", () => {
            if (index === currentMemory) {
                openLightbox(index);
            } else {
                goToMemory(index);
            }
        });

        carouselTrack.appendChild(card);
    });

    carouselBuilt = true;
    renderCarousel();
}

function renderCarousel() {
    if (!carouselBuilt) return;

    const cards = [...carouselTrack.children];
    const total = cards.length;

    cards.forEach((card, index) => {
        let delta = index - currentMemory;

        // Choose the shortest circular distance.
        if (delta > total / 2) delta -= total;
        if (delta < -total / 2) delta += total;

        const distance = Math.abs(delta);
        const visible = distance <= 3;
        const active = delta === 0;

        card.classList.toggle("is-active", active);
        card.classList.toggle("is-visible", visible);
        card.setAttribute("aria-hidden", visible ? "false" : "true");
        card.tabIndex = visible ? 0 : -1;

        if (!visible) {
            card.style.opacity = "0";
            card.style.visibility = "hidden";
            card.style.pointerEvents = "none";
            card.style.zIndex = "0";
            card.style.transform =
                "translate(-50%,-50%) translateZ(-800px) scale(.3)";
            return;
        }

        const direction = Math.sign(delta);
        const xOffset = delta * 145;
        const zOffset = -distance * 95;
        const yRotation = delta * -25;
        const scale = Math.max(.64, 1 - distance * .105);
        const opacity = Math.max(.18, 1 - distance * .24);

        card.style.visibility = "visible";
        card.style.opacity = String(opacity);
        card.style.pointerEvents = active ? "auto" : "auto";
        card.style.zIndex = String(20 - distance);
        card.style.filter = active
            ? "brightness(1)"
            : `brightness(${Math.max(.45, 1 - distance * .17)})`;

        card.style.transform = [
            "translate(-50%,-50%)",
            `translateX(${xOffset}px)`,
            `translateZ(${zOffset}px)`,
            `rotateY(${yRotation}deg)`,
            `scale(${scale})`
        ].join(" ");

      
        if (card.classList.contains("is-landscape")) {
            card.style.width = window.innerWidth <= 600 ? "220px" : "285px";
            card.style.height = window.innerWidth <= 600 ? "155px" : "200px";
        } else {
            card.style.width = "";
            card.style.height = "";
        }

       
        if (active) {
            card.style.filter = "brightness(1.04)";
        }
    });

    const item = memoryItems[currentMemory];

    carouselCounter.textContent =
        `${String(currentMemory + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    carouselItemTitle.textContent = getMemoryLabel(currentMemory);

    carouselPrev.disabled = false;
    carouselNext.disabled = false;

    carouselPrev.setAttribute("aria-label", "Previous memory");
    carouselNext.setAttribute("aria-label", "Next memory");
}

function goToMemory(index) {
    currentMemory = wrapIndex(index);
    renderCarousel();
}

function previousMemory() {
    goToMemory(currentMemory - 1);
}

function nextMemory() {
    goToMemory(currentMemory + 1);
}

carouselPrev.addEventListener("click", previousMemory);
carouselNext.addEventListener("click", nextMemory);
carouselFirst.addEventListener("click", () => goToMemory(0));
carouselLast.addEventListener("click", () => goToMemory(memoryItems.length - 1));

carouselStage.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousMemory();
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextMemory();
    }
});


carouselStage.addEventListener("touchstart", event => {
    if (!event.touches.length) return;

    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}, { passive: true });

carouselStage.addEventListener("touchend", event => {
    if (!event.changedTouches.length) return;

    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) nextMemory();
    else previousMemory();
}, { passive: true });

window.addEventListener("resize", () => {
    if (carouselBuilt) renderCarousel();
});

const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxVideo = $("#lightboxVideo");
const lightboxCaption = $("#lightboxCaption");
const lightboxCounter = $("#lightboxCounter");
const lightboxClose = $("#lightboxClose");
const lightboxPrev = $("#lightboxPrev");
const lightboxNext = $("#lightboxNext");

function openLightbox(index = currentMemory) {
    currentMemory = wrapIndex(index);
    previousFocusedElement = document.activeElement;

    updateLightbox();

    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    lightboxClose.focus();
}

function updateLightbox() {
    const item = memoryItems[currentMemory];

    
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();

    lightboxImage.classList.add("hidden");
    lightboxVideo.classList.add("hidden");

    if (item.type === "video") {
        
        lightboxVideo.src = `assets/video/${item.filename}`;
        lightboxVideo.classList.remove("hidden");
        lightboxVideo.load();
    } else {
        lightboxImage.src =
            `assets/images/${item.filename}.${IMAGE_EXTENSION}`;

        lightboxImage.alt = getMemoryLabel(currentMemory);
        lightboxImage.classList.remove("hidden");
    }

    lightboxCaption.textContent = item.caption;

    lightboxCounter.textContent =
        `${String(currentMemory + 1).padStart(2, "0")} / ${String(memoryItems.length).padStart(2, "0")} · ${getMemoryLabel(currentMemory)}`;

    renderCarousel();
}

function closeLightbox() {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();

    lightbox.classList.add("hidden");
    document.body.style.overflow = "";

    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus === "function"
    ) {
        previousFocusedElement.focus();
    }
}

function previousLightboxMemory() {
    currentMemory = wrapIndex(currentMemory - 1);
    updateLightbox();
}

function nextLightboxMemory() {
    currentMemory = wrapIndex(currentMemory + 1);
    updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", previousLightboxMemory);
lightboxNext.addEventListener("click", nextLightboxMemory);

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
    if (lightbox.classList.contains("hidden")) return;

    if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousLightboxMemory();
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextLightboxMemory();
    }
});

const audioPlayer = $("#audioPlayer");
const albumArt = $("#albumArt");
const player = $(".player");
const trackTitle = $("#trackTitle");
const trackArtist = $("#trackArtist");
const nowPlaying = $("#nowPlaying");
const playPause = $("#playPause");
const previousTrack = $("#previousTrack");
const nextTrack = $("#nextTrack");
const musicProgress = $("#musicProgress");
const currentTime = $("#currentTime");
const duration = $("#duration");
const volume = $("#volume");
const songList = $("#songList");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function buildSongList() {
    songList.innerHTML = "";

    musicTracks.forEach((track, index) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "song-item";
        item.dataset.index = String(index);

        const cover = document.createElement("img");
        cover.src = `assets/music/${track.cover}`;
        cover.alt = "";

        const details = document.createElement("div");
        details.className = "song-details";

        const title = document.createElement("strong");
        title.textContent = track.title;

        const artist = document.createElement("span");
        artist.textContent = track.artist;

        details.append(title, artist);

        const number = document.createElement("div");
        number.className = "song-number";
        number.textContent = String(index + 1);

        item.append(cover, details, number);

        item.addEventListener("click", () => loadTrack(index, true));

        songList.appendChild(item);
    });
}

function updateSongList() {
    [...songList.querySelectorAll(".song-item")].forEach((item, index) => {
        item.classList.toggle("active", index === currentTrack);
        item.setAttribute("aria-current", index === currentTrack ? "true" : "false");
    });
}

function loadTrack(index, autoPlay = false) {
    currentTrack = (index + musicTracks.length) % musicTracks.length;

    const track = musicTracks[currentTrack];

    audioPlayer.src = `assets/music/${track.music}`;
    albumArt.src = `assets/music/${track.cover}`;
    albumArt.alt = track.title;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;

    musicProgress.value = 0;
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    updateSongList();

    if (autoPlay) playMusic();
}

function playMusic() {
    audioPlayer.play().then(() => {
        player.classList.add("playing");
        playPause.textContent = "❚❚";
        playPause.setAttribute("aria-label", "Pause");
        nowPlaying.textContent = "NOW PLAYING";
    }).catch(error => {
        console.warn("Music playback could not start:", error);
        nowPlaying.textContent = "TAP PLAY TO LISTEN";
    });
}

function pauseMusic() {
    audioPlayer.pause();
    player.classList.remove("playing");
    playPause.textContent = "▶";
    playPause.setAttribute("aria-label", "Play");
    nowPlaying.textContent = "PAUSED";
}

function toggleMusic() {
    if (audioPlayer.paused) playMusic();
    else pauseMusic();
}

playPause.addEventListener("click", toggleMusic);

previousTrack.addEventListener("click", () => {
    loadTrack(currentTrack - 1, true);
});

nextTrack.addEventListener("click", () => {
    loadTrack(currentTrack + 1, true);
});

audioPlayer.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", () => {
    if (!audioPlayer.duration) return;

    musicProgress.value =
        audioPlayer.currentTime / audioPlayer.duration * 100;

    currentTime.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener("ended", () => {
    loadTrack(currentTrack + 1, true);
});

audioPlayer.addEventListener("play", () => {
    player.classList.add("playing");
    playPause.textContent = "❚❚";
    playPause.setAttribute("aria-label", "Pause");
    nowPlaying.textContent = "NOW PLAYING";
});

audioPlayer.addEventListener("pause", () => {
    player.classList.remove("playing");
    playPause.textContent = "▶";
    playPause.setAttribute("aria-label", "Play");

    if (audioPlayer.currentTime > 0) {
        nowPlaying.textContent = "PAUSED";
    }
});

musicProgress.addEventListener("input", () => {
    if (!audioPlayer.duration) return;

    audioPlayer.currentTime =
        Number(musicProgress.value) / 100 * audioPlayer.duration;
});

audioPlayer.volume = Number(volume.value);

volume.addEventListener("input", () => {
    audioPlayer.volume = Number(volume.value);
});

function leaveMusic() {
    pauseMusic();
    showClosing();
}

$("#musicBack").addEventListener("click", leaveMusic);
$("#musicBackBottom").addEventListener("click", leaveMusic);

buildSongList();
loadTrack(0, false);

const canvas = $("#fx");
const ctx = canvas.getContext("2d");
let pieces = [];

function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function burst(amount = 55) {
    for (let i = 0; i < amount; i++) {
        pieces.push({
            x: window.innerWidth / 2,
            y: window.innerHeight * .42,
            vx: (Math.random() - .5) * 9,
            vy: -Math.random() * 8 - 2,
            size: Math.random() * 6 + 3,
            alpha: 1,
            rotation: Math.random() * Math.PI * 2,
            color: Math.random() > .5 ? "#ff7db8" : "#ffc56e"
        });
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    pieces = pieces.filter(piece => piece.alpha > 0);

    for (const piece of pieces) {
        piece.x += piece.vx;
        piece.vy += .16;
        piece.y += piece.vy;
        piece.alpha -= .012;
        piece.rotation += .1;

        ctx.save();
        ctx.globalAlpha = Math.max(0, piece.alpha);
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        ctx.fillStyle = piece.color;
        ctx.fillRect(
            -piece.size / 2,
            -piece.size / 2,
            piece.size,
            piece.size
        );
        ctx.restore();
    }

    requestAnimationFrame(animateConfetti);
}

animateConfetti();

const loadingScreen = $("#loadingScreen");
const heartLoader = $("#heartLoader");
const loaderConfetti = $("#loaderConfetti");

function preloadPhoto(filename) {
    return new Promise(resolve => {
        const img = new Image();
        let settled = false;

        function finish() {
            if (settled) return;
            settled = true;
            clearTimeout(timeout);
            resolve();
        }

        const timeout = setTimeout(finish, 12000);

        img.onload = finish;
        img.onerror = finish;
        img.src = `assets/images/${filename}.${IMAGE_EXTENSION}`;

        if (img.complete) finish();
    });
}

function preloadVideoMetadata() {
    return new Promise(resolve => {
        const video = document.createElement("video");
        let settled = false;

        function finish() {
            if (settled) return;
            settled = true;
            clearTimeout(timeout);
            video.removeAttribute("src");
            video.load();
            resolve();
        }

        const timeout = setTimeout(finish, 8000);

        video.preload = "metadata";
        video.muted = true;
        video.onloadedmetadata = finish;
        video.onerror = finish;
        video.src = `assets/video/${portraitVideo.filename}`;
        video.load();
    });
}

function createLoaderConfetti() {
    const colors = [
        "#ff7db8", "#ffc56e", "#ffffff",
        "#c5a3ff", "#ff4f9a"
    ];

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("span");
        piece.className = "loader-confetti-piece";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.setProperty(
            "--x",
            `${(Math.random() - .5) * window.innerWidth * 1.5}px`
        );

        piece.style.setProperty(
            "--y",
            `${(Math.random() - .5) * window.innerHeight * 1.5}px`
        );

        piece.style.setProperty(
            "--rotation",
            `${Math.random() * 1080 - 540}deg`
        );

        piece.style.animationDelay = `${Math.random() * .2}s`;
        loaderConfetti.appendChild(piece);
    }
}

async function startLoadingScreen() {
    await Promise.all([
        ...allPhotos.map(preloadPhoto),
        preloadVideoMetadata()
    ]);

    heartLoader.classList.add("explode");
    createLoaderConfetti();

    setTimeout(() => {
        loadingScreen.classList.add("finished");
    }, 1050);

    setTimeout(() => {
        loadingScreen.remove();
    }, 1900);
}

startLoadingScreen();
