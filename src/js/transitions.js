import { removeClass, projectTooltip, parallax } from "./helperFunc";
import gsap from "gsap";

export function appTransitions() {
  setTimeout(() => {
    removeClass("inactive-card");
  }, 1250);

  const tl = gsap.timeline({
    onComplete: () => {
      projectTooltip();
      // parallax();
      return;
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

export function outroTransitions() {
  const tl = gsap.timeline({
    onComplete: () => {
      projectTooltip();
      return;
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
        stagger: 0.15,
        delay: 0.1,
      },
      0.0
    )

    // EMAIL
    .fromTo(
      ".mail-signup",
      {
        yPercent: 500,
      },
      {
        duration: 1.5,
        ease: "power4",
        yPercent: 0,
        delay: 0.5,
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
    );
}

export function introTransitions() {
  const tl = gsap.timeline({
    onComplete: () => {
      return;
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
        stagger: 0.1,
        delay: 0.1,
      },
      0.0
    )

    .fromTo(
      ".svg-content",
      {
        scale: 0
      },
      {
        scale: 1,
        duration: 1
      },
      0.0
    );
}
