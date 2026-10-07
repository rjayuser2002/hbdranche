const pages = [

    {
        title: "A LITTLE SOMETHING FOR YOU ❤️",

        text: `Happy Birthday, Ranch! Surprise!!! 🎉

(Sorry, long message ahead. ⚠️)

I wanted to give you something useful, but I also wanted there to be a little piece of this birthday that you could keep coming back to. So here it is—a small corner of the internet made especially for you.

I have three things to say to you: Thank You, I am Sorry, and Please...`
    },


    {
        title: "THANK YOU ❤️",

        text: `First, THANK YOU for being a genuine friend and for making such a big impact on my life. This may sound cringey, but this is the truth, and that is how I feel.

Thank you for being the kind of friend who makes ordinary days a little better. I hope you know that your presence is appreciated more than words can easily explain. I want to thank you for being there. Your existence in this world is such a wonderful blessing from up above.

I can still remember those dark times that I experienced, when you were there, ready to listen and comfort me with the words I needed to hear. You were such an angel for lending me your ear, and I truly appreciate that.`
    },


    {
        title: "I AM SORRY. ❤️‍🩹",

        text: `I am SORRY. I admit, I am not a perfect friend, nor a perfect “kuya” to you and to all our friends from Willumsen Boarding House. I am sorry that I crossed the line—for telling you how I feel about you.

I do not regret any of it, but somehow, I wish I hadn’t done it back then because I didn’t want to lose you as my friend.

I am so sorry for the times that I was not there when you needed a shoulder to cry on, an ear you could rant to, or a voice you could use to express what you really feel.

I am also very sorry that, all along, I knew that you and Fritz had a history. When you were narrating everything to me about the reason why you failed in some subjects, I already knew who you were referring to, even without you mentioning it.

Fritz is a good friend of mine, and so are you. I just hope that you will heal from all the things that you don’t talk about.`
    },


    {
        title: "PLEASE. 🌷",

        text: `PLEASE, please take care of yourself.

You deserve all the good things this life has to offer because I know you are a good person. I wish you could see yourself through my eyes and feel yourself through my heart so that you would know how much you matter to everyone around you.

So please, take care of your heart. Take care of your soul. And take care of yourself.`
    },


    {
        title: "HAPPY BIRTHDAY, RANCH. 🎂",

        text: `Happy Birthday again, Ranch. I hope this message makes your day a little more special.

Whatever this next year brings, I hope there are plenty of reasons for you to laugh, places you have never seen, dreams that slowly become real, and people around you who genuinely care.

You deserve all the good things this life has to offer, and I hope this next chapter gives you many reasons to smile.`
    },


    {
        title: "AND FINALLY… 🔋",

        text: `And whenever your phone is dying...

well, at least now you have a power bank. 😄

I couldn’t make this message any longer. 😂`
    }

];

const portraitPhotos = [

    "port1",
    "port2",
    "port3",
    "port4",
    "port5",
    "port6",
    "port7",
    "port8"

];


const landscapePhotos = [

    "land1",
    "land2",
    "land3",
    "land4",
    "land5",
    "land6"

];


const allPhotos = [

    ...portraitPhotos,
    ...landscapePhotos

];

const memoryCaptions = [

    // Portrait 1
    "I think this was our first photo together, just the two of us, since we always have group photos. This was the day I was moving out of Willumsen Boarding House, and you were the only one willing to spend the day with me. I can't blame the others, though, since I came unannounced.",

    // Portrait 2
    "This photo, too. I had so much fun with you that day. I was a bit surprised to find out you're into photobooths. I was like, 'Whoa, I did not see that coming!'",

    // Portrait 3
    "Lorem ipsum",

    // Portrait 4
    "Lorem ipsum",

    // Portrait 5
    "Lorem ipsum",

    // Portrait 6
    "Lorem ipsum",

    // Portrait 7
    "Lorem ipsum",

    // Portrait 8
    "Lorem ipsum",

    // Landscape 1
    "Lorem ipsum",

    // Landscape 2
    "Lorem ipsum",

    // Landscape 3
    "Lorem ipsum",

    // Landscape 4
    "Lorem ipsum",

    // Landscape 5
    "Lorem ipsum",

    // Landscape 6
    "Lorem ipsum"

];

const IMAGE_EXTENSION = "jpg";

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

let page = 0;

let typingTimer = null;

let currentPhoto = 0;

let currentTrack = 0;

const gate =
    document.querySelector("#gate");

const envelope =
    document.querySelector("#envelope");

const welcome =
    document.querySelector("#welcome");

const letterScreen =
    document.querySelector("#letterScreen");

const closingScreen =
    document.querySelector("#closingScreen");

const memoriesScreen =
    document.querySelector("#memoriesScreen");

const musicScreen =
    document.querySelector("#musicScreen");

const letter =
    document.querySelector("#letter");

const bar =
    document.querySelector("#bar");

const chapterTitle =
    document.querySelector("#chapterTitle");

const chapterEyebrow =
    document.querySelector("#chapterEyebrow");

const signature =
    document.querySelector("#signature");

const nextButton =
    document.querySelector("#next");

const openButton =
    document.querySelector("#open");

const replayButton =
    document.querySelector("#replay");

const memoriesButton =
    document.querySelector("#memoriesButton");

const musicButton =
    document.querySelector("#musicButton");

const dots =
    [
        ...document.querySelectorAll(".dot")
    ];

function openEnvelope() {

    envelope.classList.add(
        "opening"
    );


    burst(35);


    setTimeout(
        () => {

            gate.classList.add(
                "gone"
            );

        },
        700
    );

}


envelope.addEventListener(
    "click",
    openEnvelope
);


envelope.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);

function typeText() {

    if (typingTimer) {

        clearInterval(
            typingTimer
        );

        typingTimer = null;

    }


    const current =
        pages[page];


    chapterTitle.textContent =
        current.title;


    chapterEyebrow.textContent =
        `Page ${page + 1} of 6`;


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === page
            );

        }
    );


    letter.textContent = "";

    bar.style.width = "0%";


    if (page === 0) {

        signature.textContent =
            "— Take your time. There is no rush.";

    }

    else if (page === 5) {

        signature.textContent =
            "— And yes, the power bank is real. 😄";

    }

    else {

        signature.textContent =
            "— From someone who is very grateful for you.";

    }


    let i = 0;


    typingTimer =
        setInterval(
            () => {

                letter.textContent +=
                    current.text[i] || "";


                i++;


                const progress =
                    (
                        i /
                        current.text.length
                    ) * 100;


                bar.style.width =
                    progress + "%";


                if (
                    i >
                    current.text.length
                ) {

                    clearInterval(
                        typingTimer
                    );

                    typingTimer =
                        null;

                    bar.style.width =
                        "100%";

                }

            },
            10
        );

}


openButton.addEventListener(
    "click",
    () => {

        welcome.classList.add(
            "hidden"
        );


        letterScreen.classList.remove(
            "hidden"
        );


        page = 0;


        typeText();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        burst(60);

    }
);

nextButton.addEventListener(
    "click",
    () => {

        if (page < 5) {

            page++;


            typeText();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


            burst(35);

        }

        else {

            letterScreen.classList.add(
                "hidden"
            );


            closingScreen.classList.remove(
                "hidden"
            );


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


            burst(120);

        }

    }
);

replayButton.addEventListener(
    "click",
    () => {

        closingScreen.classList.add(
            "hidden"
        );


        letterScreen.classList.remove(
            "hidden"
        );


        page = 0;


        typeText();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        burst(35);

    }
);


function showClosing() {

    memoriesScreen.classList.add(
        "hidden"
    );

    musicScreen.classList.add(
        "hidden"
    );

    closingScreen.classList.remove(
        "hidden"
    );

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


function showMemories() {

    closingScreen.classList.add(
        "hidden"
    );

    musicScreen.classList.add(
        "hidden"
    );

    memoriesScreen.classList.remove(
        "hidden"
    );

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    animateGallery();

    burst(30);

}


function showMusic() {

    closingScreen.classList.add(
        "hidden"
    );

    memoriesScreen.classList.add(
        "hidden"
    );

    musicScreen.classList.remove(
        "hidden"
    );

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    burst(30);

}



memoriesButton.addEventListener(
    "click",
    showMemories
);


musicButton.addEventListener(
    "click",
    showMusic
);

const portraitGrid =
    document.querySelector(
        "#portraitGrid"
    );


const landscapeGrid =
    document.querySelector(
        "#landscapeGrid"
    );


function createMemory(
    filename,
    index
) {

    const button =
        document.createElement(
            "button"
        );


    button.className =
        "memory";


    button.style.animationDelay =
        `${index * 70}ms`;


    const image =
        document.createElement(
            "img"
        );


    image.src =
        `assets/images/${filename}.${IMAGE_EXTENSION}`;


    image.alt =
        `Memory ${index + 1}`;


    image.loading =
        "lazy";


    button.appendChild(
        image
    );


    button.addEventListener(
        "click",
        () => {

            currentPhoto =
                allPhotos.indexOf(
                    filename
                );

            openLightbox();

        }
    );


    return button;

}



function buildGallery() {

    portraitGrid.innerHTML =
        "";

    landscapeGrid.innerHTML =
        "";


    portraitPhotos.forEach(
        (filename, index) => {

            portraitGrid.appendChild(
                createMemory(
                    filename,
                    index
                )
            );

        }
    );


    landscapePhotos.forEach(
        (filename, index) => {

            landscapeGrid.appendChild(
                createMemory(
                    filename,
                    index + portraitPhotos.length
                )
            );

        }
    );

}


buildGallery();

function animateGallery() {

    const memories =
        document.querySelectorAll(
            ".memory"
        );


    memories.forEach(
        (memory, index) => {

            memory.style.animation =
                "none";


            void memory.offsetWidth;


            memory.style.animation =
                `photoAppear .65s ease ${index * 45}ms both`;

        }
    );

}

const lightbox =
    document.querySelector(
        "#lightbox"
    );


const lightboxImage =
    document.querySelector(
        "#lightboxImage"
    );


const lightboxCaption =
    document.querySelector(
        "#lightboxCaption"
    );


const lightboxClose =
    document.querySelector(
        "#lightboxClose"
    );


const lightboxPrev =
    document.querySelector(
        "#lightboxPrev"
    );


const lightboxNext =
    document.querySelector(
        "#lightboxNext"
    );



function openLightbox() {

    updateLightbox();


    lightbox.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    lightbox.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";

}


function updateLightbox() {

    const filename =
        allPhotos[currentPhoto];


    lightboxImage.src =
        `assets/images/${filename}.${IMAGE_EXTENSION}`;


    lightboxImage.alt =
        `Memory ${currentPhoto + 1} of ${allPhotos.length}`;


    lightboxCaption.textContent =
        memoryCaptions[currentPhoto];

}


function previousPhoto() {

    currentPhoto--;

    if (
        currentPhoto < 0
    ) {

        currentPhoto =
            allPhotos.length - 1;

    }


    updateLightbox();

}


function nextPhoto() {

    currentPhoto++;

    if (
        currentPhoto >=
        allPhotos.length
    ) {

        currentPhoto = 0;

    }


    updateLightbox();

}



lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightboxPrev.addEventListener(
    "click",
    previousPhoto
);


lightboxNext.addEventListener(
    "click",
    nextPhoto
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            lightbox
        ) {

            closeLightbox();

        }

    }
);



document.addEventListener(
    "keydown",
    event => {

        if (
            lightbox.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "Escape"
        ) {

            closeLightbox();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousPhoto();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextPhoto();

        }

    }
);

document.querySelector(
    "#memoryBack"
).addEventListener(
    "click",
    showClosing
);


document.querySelector(
    "#memoryBackBottom"
).addEventListener(
    "click",
    showClosing
);

const audioPlayer =
    document.querySelector(
        "#audioPlayer"
    );


const albumArt =
    document.querySelector(
        "#albumArt"
    );


const albumWrap =
    document.querySelector(
        "#albumWrap"
    );


const player =
    document.querySelector(
        ".player"
    );


const trackTitle =
    document.querySelector(
        "#trackTitle"
    );


const trackArtist =
    document.querySelector(
        "#trackArtist"
    );


const nowPlaying =
    document.querySelector(
        "#nowPlaying"
    );


const playPause =
    document.querySelector(
        "#playPause"
    );


const previousTrack =
    document.querySelector(
        "#previousTrack"
    );


const nextTrack =
    document.querySelector(
        "#nextTrack"
    );


const musicProgress =
    document.querySelector(
        "#musicProgress"
    );


const currentTime =
    document.querySelector(
        "#currentTime"
    );


const duration =
    document.querySelector(
        "#duration"
    );


const volume =
    document.querySelector(
        "#volume"
    );


const songList =
    document.querySelector(
        "#songList"
    );



function formatTime(
    seconds
) {

    if (
        !Number.isFinite(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        Math.floor(
            seconds % 60
        );


    return (
        `${minutes}:` +
        `${secs.toString().padStart(2,"0")}`
    );

}

function buildSongList() {

    songList.innerHTML =
        "";


    musicTracks.forEach(
        (track,index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "song-item";


            item.dataset.index =
                index;


            item.innerHTML = `

                <img
                    src="assets/music/${track.cover}"
                    alt="${track.title}"
                >

                <div class="song-details">

                    <strong>
                        ${track.title}
                    </strong>

                    <span>
                        ${track.artist}
                    </span>

                </div>

                <div class="song-number">
                    ${index + 1}
                </div>

            `;


            item.addEventListener(
                "click",
                () => {

                    loadTrack(
                        index,
                        true
                    );

                }
            );


            songList.appendChild(
                item
            );

        }
    );

}


buildSongList();

function loadTrack(
    index,
    autoPlay = false
) {

    currentTrack =
        index;


    const track =
        musicTracks[currentTrack];


    audioPlayer.src =
        `assets/music/${track.music}`;


    albumArt.src =
        `assets/music/${track.cover}`;


    albumArt.alt =
        track.title;


    trackTitle.textContent =
        track.title;


    trackArtist.textContent =
        track.artist;


    musicProgress.value =
        0;


    currentTime.textContent =
        "0:00";


    duration.textContent =
        "0:00";


    updateSongList();


    if (autoPlay) {

        playMusic();

    }

}

function updateSongList() {

    const items =
        document.querySelectorAll(
            ".song-item"
        );


    items.forEach(
        (item,index) => {

            item.classList.toggle(
                "active",
                index === currentTrack
            );

        }
    );

}

function playMusic() {

    audioPlayer.play()
        .then(
            () => {

                player.classList.add(
                    "playing"
                );

                playPause.textContent =
                    "❚❚";

                playPause.setAttribute(
                    "aria-label",
                    "Pause"
                );

                nowPlaying.textContent =
                    "NOW PLAYING";

            }
        )
        .catch(
            error => {

                console.log(
                    "Playback requires user interaction:",
                    error
                );

            }
        );

}


function pauseMusic() {

    audioPlayer.pause();


    player.classList.remove(
        "playing"
    );


    playPause.textContent =
        "▶";


    playPause.setAttribute(
        "aria-label",
        "Play"
    );


    nowPlaying.textContent =
        "PAUSED";

}


function toggleMusic() {

    if (
        audioPlayer.paused
    ) {

        playMusic();

    }

    else {

        pauseMusic();

    }

}


playPause.addEventListener(
    "click",
    toggleMusic
);

previousTrack.addEventListener(
    "click",
    () => {

        currentTrack--;

        if (
            currentTrack < 0
        ) {

            currentTrack =
                musicTracks.length - 1;

        }


        loadTrack(
            currentTrack,
            true
        );

    }
);


nextTrack.addEventListener(
    "click",
    () => {

        currentTrack++;

        if (
            currentTrack >=
            musicTracks.length
        ) {

            currentTrack = 0;

        }


        loadTrack(
            currentTrack,
            true
        );

    }
);


audioPlayer.addEventListener(
    "loadedmetadata",
    () => {

        duration.textContent =
            formatTime(
                audioPlayer.duration
            );

    }
);


audioPlayer.addEventListener(
    "timeupdate",
    () => {

        if (
            !audioPlayer.duration
        ) {

            return;

        }


        musicProgress.value =
            (
                audioPlayer.currentTime /
                audioPlayer.duration
            ) * 100;


        currentTime.textContent =
            formatTime(
                audioPlayer.currentTime
            );

    }
);


audioPlayer.addEventListener(
    "ended",
    () => {

        currentTrack++;

        if (
            currentTrack >=
            musicTracks.length
        ) {

            currentTrack = 0;

        }


        loadTrack(
            currentTrack,
            true
        );

    }
);


musicProgress.addEventListener(
    "input",
    () => {

        if (
            !audioPlayer.duration
        ) {

            return;

        }


        audioPlayer.currentTime =
            (
                musicProgress.value /
                100
            ) *
            audioPlayer.duration;

    }
);

audioPlayer.volume =
    Number(
        volume.value
    );


volume.addEventListener(
    "input",
    () => {

        audioPlayer.volume =
            Number(
                volume.value
            );

    }
);

document.querySelector(
    "#musicBack"
).addEventListener(
    "click",
    () => {

        pauseMusic();

        showClosing();

    }
);


document.querySelector(
    "#musicBackBottom"
).addEventListener(
    "click",
    () => {

        pauseMusic();

        showClosing();

    }
);

loadTrack(
    0,
    false
);

const canvas =
    document.querySelector(
        "#fx"
    );


const ctx =
    canvas.getContext(
        "2d"
    );


let pieces = [];


function resizeCanvas() {

    const ratio =
        window.devicePixelRatio || 1;


    canvas.width =
        window.innerWidth *
        ratio;


    canvas.height =
        window.innerHeight *
        ratio;


    ctx.setTransform(

        ratio,
        0,
        0,
        ratio,
        0,
        0

    );

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();

function burst(
    amount = 55
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        pieces.push({

            x:
                window.innerWidth / 2,

            y:
                window.innerHeight * .42,

            vx:
                (Math.random() - .5) * 9,

            vy:
                -Math.random() * 8 - 2,

            size:
                Math.random() * 6 + 3,

            alpha:
                1,

            rotation:
                Math.random() *
                Math.PI * 2

        });

    }

}


function animateConfetti() {

    ctx.clearRect(

        0,
        0,
        window.innerWidth,
        window.innerHeight

    );


    pieces =
        pieces.filter(
            piece =>
                piece.alpha > 0
        );


    for (
        const piece of pieces
    ) {

        piece.x +=
            piece.vx;


        piece.vy +=
            .16;


        piece.y +=
            piece.vy;


        piece.alpha -=
            .012;


        piece.rotation +=
            .1;


        ctx.save();


        ctx.globalAlpha =
            piece.alpha;


        ctx.translate(
            piece.x,
            piece.y
        );


        ctx.rotate(
            piece.rotation
        );


        ctx.fillStyle =
            Math.random() > .5
                ? "#ff7db8"
                : "#ffc56e";


        ctx.fillRect(

            -piece.size / 2,

            -piece.size / 2,

            piece.size,

            piece.size

        );


        ctx.restore();

    }


    requestAnimationFrame(
        animateConfetti
    );

}


animateConfetti();
