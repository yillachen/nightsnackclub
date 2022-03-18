import { removeClass, projectTooltip, parallax } from "./helperFunc";
import gsap from "gsap";

export function appTransitions() {
  const tl = gsap.timeline({
    onComplete: () => {
      removeClass("inactive-card");
      projectTooltip();
      parallax();
      // done();
    },
  });

  tl
    // GENERAL TITLE->IN
    .from(
      ".page-title-js",
      {
        duration: 1,
        ease: "power4",
        yPercent: -120,
        stagger: 0.045,
        delay: 0.3,
      },
      0.0
    )

    // BG SEGMENTS
    .fromTo(
      ".bg-segment",
      {
        width: "0%",
      },
      {
        duration: 2.5,
        width: "100%",
        ease: "power4",
        stagger: 0.25,
      },
      0.0
    )

    // PAGE TITLE SWIPE
    .fromTo(
      "#nsc-anim-wipe",
      {
        width: "0%",
      },
      {
        duration: 2.5,
        width: "100%",
        ease: "power4",
      },
      0.0
    );
}
