import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function animateWithGsap(target, animationProps, scrollProps) {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart",
      start: "top bottom",
      ...scrollProps,
    },
  });
}
