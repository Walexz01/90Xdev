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
        start: "top 50%",
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
    // service animation start
    const serviceImg = document.querySelector(".services_right img");
    const service = document.querySelector(".services_right");
    function updateServiceImage(index) {
      const servicebg_color = [
        "#3b82f6",
        "#f7bc03",
        "#1ab8fe",
        "#9402c4",
        "#d9efff",
      ];
      const serviceText = [
        "Custom Website Design",
        "Landing Pages That Convert",
        "E-commerce Development",
        "Website Redesigns",
        "Ongoing Maintenance",
      ];
      const serviceImage = [
        "assets/CustomWebsiteDesign.jpg",
        "assets/LandingPagesThatConvert.jpg",
        "/assets/eCommerceDevelopment.jpg",
        "assets/WebsiteRedesigns.jpg",
        "assets/OngoingMaintenance.jpg",
      ];

      serviceImg.src = serviceImage[index];
      serviceImg.alt = serviceText[index];
      const styleElement = document.createElement("style");
      styleElement.textContent = `
          .services_right::before {
              content: "";
              background-color: ${servicebg_color[index]} !important;
          }
      `;
      document.head.appendChild(styleElement);
    }
    let service_texts = gsap.utils.toArray(".services_text .service");
    console.log(service_texts);
    let serviceSection_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service_bottom",
        start: "top 0%",
        end: "top 50%",
        ease: "expoScale(0.5,7,none)",
        delay: 1,
        onEnter: () => {
          gsap.set(".services_right", {
            position: "fixed",
            bottom: "20%",
            right: "20px",
          });
        },
        onEnterBack: () => {
          gsap.set(".services_right", {
            position: "relative",
            bottom: "0",
          });
          gsap.set(".services", {
            alignItems: "start",
          });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".services_text",
        start: "bottom 70%",
        end: "bottom 70%",
        scrub: 2,
        ease: "ease",

        onLeave: () => {
          gsap.set(".services_right", {
            // opacity: 0,
            position: "relative",
            // bottom: "0",
          });
          gsap.set(".services", {
            alignItems: "end",
          });
        },
        onLeaveBack: () => {
          gsap.set(".services_right", {
            position: "fixed",
            bottom: "20%",
            right: "0",
          });
        },
      },
    });
    service_texts.forEach((texts, i) => {
      ScrollTrigger.create({
        trigger: texts,
        start: "top 50%",
        end: "top 20%",
        onEnter: () => {
          updateServiceImage(i);
        },
        onEnterBack: () => {
          updateServiceImage(i);
        },
      });
    });
    // service animation end
    // footer year
    const Footeryear = document.querySelector(".year");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    Footeryear.textContent = year;
  });
});
