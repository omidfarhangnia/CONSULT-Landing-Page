gsap.registerPlugin(ScrollTrigger);

// link animations

const ALL__LINKS__CONTAINER = document.querySelectorAll(".links__container");
const ALL__LINKS__BG = document.querySelectorAll(".links__bg");
const ALL__LINKS = document.querySelectorAll(".links");

ALL__LINKS__CONTAINER.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        gsap.killTweensOf(ALL__LINKS__BG[index],);
        linkAnimation.play(ALL__LINKS__BG[index], ALL__LINKS[index], "#F3525A");
    })
})

ALL__LINKS__CONTAINER.forEach((element, index) => {
    element.addEventListener("mouseleave", () => {
        gsap.killTweensOf(ALL__LINKS__BG[index],);
        linkAnimation.reverse(ALL__LINKS__BG[index], ALL__LINKS[index], "#6B6A75");
    })
})

gsap.fromTo(".navigation__bar", {
    padding: "1.5rem 2rem",
}, {
    padding: "0 2rem",
    duration: .6,
    ease: "power4.in",
    scrollTrigger: {
        trigger: "#page__slider",
        start: "15% 10%",
        toggleActions: "play play play reverse"
    }
});

const linkAnimation = {
    kill: (linkBg, linkText) => {
        // may be i have an animation without ending and i should kill it before
        // starting the other
        gsap.killTweensOf(linkBg, linkText);
    },

    play: (linkBg, linkText, bgColor = "#000000") => {
        linkAnimation.kill(linkBg, linkText);
        const timeline = gsap.timeline();

        timeline
        .set(linkBg, {
            width: "0%",
            height: "5%",
            right: 0,
            top: "50%"
        })
        .to(linkBg, {
            duration: 1,
            width: "100%",
            background: bgColor,
            ease: "bounce.out",
        })
        .to(linkBg, {
            duration: 1,
            height: "100%",
            ease: "bounce.out",
            top: 0
        }, "secondStep")
        .to(linkText, {
            duration: .5,
            color: "#ffffff",
            ease: "bounce.out",
        }, "secondStep")
    },
    reverse: (linkBg, linkText, prevColor) => {
        linkAnimation.kill(linkBg, linkText);
        const timeline = gsap.timeline();

        timeline
        .to(linkBg, {
            duration: .7,
            height: "0%",
            ease: "bounce.out",
            top: 0
        })
        .to(linkText, {
            color: prevColor,
            duration: .5,
            ease: "bounce.in",
        }, "+=.5")
    }
}

// slider animation part
gsap.registerEffect({
    name: "sliderAnime",
    effect: (target) => {
        return gsap.fromTo(target, {
            y: -50,
            opacity: 0,
            scale: .5
        },{
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
        })
    },
    extendTimeline: true
})
let sliderTl = gsap.timeline();
sliderTl
.sliderAnime(".header__slider h3")
.sliderAnime(".header__slider h1", "-=.5")
.sliderAnime(".header__slider div", "-=1")

// welcome animation part
let welcomeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".welcome",
        start: "0% 100%",
        toggleActions: "restart complete complete reverse",
    }
});

welcomeTl
.fromTo(".welcome--whiteSection > *", {
    y: 30,
    opacity: 0,
},
{
    y: 0,
    opacity: 1,
    ease: "elastic.out(1, 0.3)",
    stagger: .2,
    duration: 1
}, "showFirst+=.5")
.fromTo(".welcome--tomatoSection .icon__container", {
    x: -30,
    opacity: 0,
},
{
    x: 0,
    opacity: 1,
    ease: "elastic.out(1, 0.3)",
    stagger: .2,
    duration: 1
}, "showFirst+=.5")
.fromTo(".welcome--tomatoSection .text__container", {
    y: 30,
    opacity: 0,
},
{
    y: 0,
    opacity: 1,
    ease: "elastic.out(1, 0.3)",
    stagger: .2,
    duration: 1
}, "showFirst+=1")

// whatWeOffer animation part
gsap.set(".whatWeOffer--card--container .card", {opacity: 0, y: -100})
ScrollTrigger.matchMedia({
    "(min-width: 1113px)": function() {
        ScrollTrigger.batch(".whatWeOffer--card--container .card", {
            interval: .5,
            onEnter: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [1, 3]}, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [1, 3]}, y: 0}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100}),
        })
    },
    "(min-width: 768px)": function() {
        ScrollTrigger.batch(".whatWeOffer--card--container .card", {
            interval: .5,
            onEnter: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [3, 2]}, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [3, 2]}, y: 0}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100}),
        })
    },
    "(max-width: 767px)": function() {
        ScrollTrigger.batch(".whatWeOffer--card--container .card", {
            interval: .5,
            onEnter: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [6, 1]}, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -100}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, stagger: {each: .2, grid: [6, 1]}, y: 0}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100}),
        })
    },
});

// why choose us animation part
const REASONS = gsap.utils.toArray(".reasons");
ScrollTrigger.matchMedia({
    "(max-width: 899px)": function() {
        gsap.set(REASONS, {y: 0, opacity: 1})
    },
    "(min-width: 900px)": function() {
        gsap.fromTo(REASONS, 
        {
            y: -40,
            opacity: 0
        },{
            y: 10,
            opacity: 1,
            stagger: 1.5,
            duration: .2,
            scrollTrigger: {
                trigger: ".whyChooseUs",
                end: "+=1500",
                pin: true,
                scrub: 1.4,
                start: "60% 50%"
            }
        });
    }
})

// our team members animation part

let MEMBERS = gsap.utils.toArray(".members"), membersTl;

MEMBERS.forEach((element) => {
    element.addEventListener("click", () => {
        if(membersTl && membersTl.isActive()) return;
        playMembersAnime(element)
    })
    element.addEventListener("mouseleave", () => {
        membersTl.timeScale(3);
        membersTl.reverse();
    })
})

function playMembersAnime(element) {
    let MEMBER__DATA = element.querySelector(".member__data");
    let MEMBER__NAME = element.querySelector(".member__name");
    let MEMBER__POSITION = element.querySelector(".member__position");

    let nameSteps = MEMBER__NAME.innerHTML.length,
        jobSteps = MEMBER__POSITION.innerHTML.length;

    membersTl = gsap.timeline({
    });
    membersTl
    .to(element, {
        backgroundPosition: "50% 25%, center",
        duration: .5,
        delay: .5
    })
    .to(MEMBER__DATA, {
        xPercent: -100,
        duration: 1,
        ease: "bounce.out"
    })
    .fromTo(MEMBER__NAME, {
        width: 0,
    }, {
        width: "160px",
        ease: `steps(${nameSteps - 1})`,
        duration: 1.5,
        onComplete: () => {
            gsap.getById("nameTypeEffect").pause();
        }
    }, "showName")
    .fromTo(MEMBER__NAME, {
        borderRight: "1px solid rgba(0, 0, 0)"
    }, {
        borderRight: "1px solid rgba(0, 0, 0, 0)",
        repeat: -1,
        duration: 1.5 / (nameSteps - 1),
        id: "nameTypeEffect"
    }, "showName")
    .fromTo(MEMBER__POSITION, {
        width: 0,
    }, {
        width: "65px",
        ease: `steps(${jobSteps - 1})`,
        duration: 1.5,
        onComplete: () => {
            gsap.getById("jobTypeEffect").pause();
        }
    }, "showJob+=1.5")
    .fromTo(MEMBER__POSITION, {
        borderRight: "1px solid rgba(0, 0, 0)"
    }, {
        borderRight: "1px solid rgba(0, 0, 0, 0)",
        repeat: -1,
        duration: 1.5 / (jobSteps - 1),
        id: "jobTypeEffect"
    }, "showJob+=1.5");
}

let footerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
    }
});

footerTl
.fromTo(".link__groups li", {
    opacity: 0,
    x: -30,
}, {
    opacity: 1,
    x: 0,
    stagger: .1,
    delay: .5,
})
.fromTo(".followUs a", {
    opacity: 0,
    x: -30,
}, {
    opacity: 1,
    x: 0,
    stagger: .2,
})