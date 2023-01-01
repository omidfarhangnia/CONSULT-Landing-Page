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