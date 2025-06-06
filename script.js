document.addEventListener("DOMContentLoaded", (event) => {
  document.fonts.ready.then(() => {
    // gsap Code
    // nav header
    // makes the header clip and unclip
    let Nav_TL_pin = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        ease: "expoScale(0.5,7,none)",
        delay: 5,
        onEnter: ({ isActive }) => {
          if (isActive) {
            gsap.set("nav", {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: "#ffffff",
              zIndex: 1000,
            });
          }
        },
      },
    });
    let Nav_TL_unpin = gsap.timeline({
      scrollTrigger: {
        trigger: ".header_top_details_container",
        start: "bottom top",
        ease: "expoScale(0.5,7,none)",
        delay: 5,
        onLeaveBack: ({ isActive }) => {
          if (!isActive) {
            gsap.set("nav", {
              position: "relative",
              zIndex: 1000,
            });
          }
        },
      },
    });
    // end of nav header

    // start of Home_hero
    const stagger = 1;
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.from(".words span", {
      duration: 0.5,
      yPercent: 100,
      ease: "power4",
      stagger: stagger,
    });

    tl.to(
      ".words span",
      {
        delay: 1,
        duration: 1,
        yPercent: -100,
        ease: "power4",
        stagger: stagger,
      },
      stagger
    );
    let Herosection_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_section_top",
        start: "top 40%",
        ease: "expoScale(0.5,7,none)",
        delay: 5,
      },
    });
    let heroHeaderTextSplit = SplitText.create(".Hero_text_header", {
      type: "words, chars, lines",
    });

    Herosection_tl.from(
      heroHeaderTextSplit.lines,
      {
        rotationX: -50,
        transformOrigin: "50% 50% -160px",
        duration: 1,
        autoAlpha: 0,
        ease: "power3",
        stagger: 0.4,
      },
      "tag"
    );
    let char = SplitText.create(".hero_details", { type: "words, chars" });
    Herosection_tl.from(
      char.chars,
      {
        x: 150,
        opacity: 0,
        duration: 0.2,
        ease: "power4",
        stagger: 0.01,
      },
      "tag"
    );
    //end of home hero
  });
});
