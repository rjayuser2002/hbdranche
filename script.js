/* =========================================
   BIRTHDAY PAGES
========================================= */

const pages = [

    /* =====================================
       PAGE 1
    ====================================== */

    {
        title: "A LITTLE SOMETHING FOR YOU ❤️",

        text: `Happy Birthday, Ranch! Surprise!!! 🎉

(Sorry, long message ahead. ⚠️)

I wanted to give you something useful, but I also wanted there to be a little piece of this birthday that you could keep coming back to. So here it is—a small corner of the internet made especially for you.

I have three things to say to you: Thank You, I am Sorry, and Please...`
    },


    /* =====================================
       PAGE 2
    ====================================== */

    {
        title: "THANK YOU ❤️",

        text: `First, THANK YOU for being a genuine friend and for making such a big impact on my life. This may sound cringey, but this is the truth, and that is how I feel.

Thank you for being the kind of friend who makes ordinary days a little better. I hope you know that your presence is appreciated more than words can easily explain. I want to thank you for being there. Your existence in this world is such a wonderful blessing from up above.

I can still remember those dark times that I experienced, when you were there, ready to listen and comfort me with the words I needed to hear. You were such an angel for lending me your ear, and I truly appreciate that.`
    },


    /* =====================================
       PAGE 3
    ====================================== */

    {
        title: "I AM SORRY. 💗",

        text: `I admit, I am not a perfect friend, nor a perfect “kuya” to you and to all our friends from Willumsen Boarding House. I am sorry that I crossed the line—for telling you how I feel about you.

I do not regret any of it, but somehow, I wish I hadn’t done it back then because I didn’t want to lose you as my friend.

I am so sorry for the times that I was not there when you needed a shoulder to cry on, an ear you could rant to, or a voice you could use to express what you really feel.

I am also very sorry that, all along, I knew that you and Fritz had a history. When you were narrating everything to me about the reason why you failed in some subjects, I already knew who you were referring to, even without you mentioning it.

Fritz is a good friend of mine, and so are you. I just hope that you will heal from all the things that you don’t talk about.`
    },


    /* =====================================
       PAGE 4
    ====================================== */

    {
        title: "PLEASE. 🌷",

        text: `Please take care of yourself.

You deserve all the good things this life has to offer because I know you are a good person. I wish you could see yourself through my eyes and feel yourself through my heart so that you would know how much you matter to everyone around you.

So please, take care of your heart. Take care of your soul. And take care of yourself.`
    },


    /* =====================================
       PAGE 5
    ====================================== */

    {
        title: "HAPPY BIRTHDAY, RANCH. 🎂",

        text: `Happy Birthday again, Ranch. I hope this message makes your day a little more special.

Whatever this next year brings, I hope there are plenty of reasons for you to laugh, places you have never seen, dreams that slowly become real, and people around you who genuinely care.

You deserve all the good things this life has to offer, and I hope this next chapter gives you many reasons to smile.`
    },


    /* =====================================
       PAGE 6
    ====================================== */

    {
        title: "AND FINALLY… 🔋",

        text: `And whenever your phone is dying...

well, at least now you have a power bank. 😄

I couldn’t make this message any longer. 😂`
    }

];


/* =========================================
   STATE
========================================= */

let page = 0;

let typingTimer = null;


/* =========================================
   DOM ELEMENTS
========================================= */

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

const dots =
    [
        ...document.querySelectorAll(".dot")
    ];


/* =========================================
   ENVELOPE
========================================= */

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


/* =========================================
   KEYBOARD SUPPORT
========================================= */

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


/* =========================================
   TYPEWRITER
========================================= */

function typeText() {

    /*
     * Stop previous typewriter
     * if the user clicks quickly.
     */

    if (typingTimer) {

        clearInterval(
            typingTimer
        );

        typingTimer = null;

    }


    const current =
        pages[page];


    /*
     * Title
     */

    chapterTitle.textContent =
        current.title;


    /*
     * Page number
     */

    chapterEyebrow.textContent =
        `Page ${page + 1} of 6`;


    /*
     * Update dots
     */

    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === page
            );

        }
    );


    /*
     * Clear text
     */

    letter.textContent = "";


    bar.style.width =
        "0%";


    /*
     * Signature
     */

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


    /*
     * Typewriter
     */

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


/* =========================================
   OPEN BIRTHDAY MESSAGE
========================================= */

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


/* =========================================
   NEXT PAGE
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        /*
         * Pages 1–6
         *
         * Array index:
         *
         * 0 = Introduction
         * 1 = Thank You
         * 2 = Sorry
         * 3 = Please
         * 4 = Birthday
         * 5 = Power Bank
         */


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

            /*
             * Page 6 finished.
             *
             * Show the final closing.
             */

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


/* =========================================
   REPLAY
========================================= */

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


/* =========================================
   CONFETTI
========================================= */

const canvas =
    document.querySelector("#fx");

const ctx =
    canvas.getContext("2d");


let pieces = [];


/* =========================================
   CANVAS RESIZE
========================================= */

function resizeCanvas() {

    const ratio =
        window.devicePixelRatio || 1;


    canvas.width =
        window.innerWidth * ratio;


    canvas.height =
        window.innerHeight * ratio;


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


/* =========================================
   CONFETTI BURST
========================================= */

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


/* =========================================
   CONFETTI ANIMATION
========================================= */

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