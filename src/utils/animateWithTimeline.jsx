import React from "react";

export default function animateWithTimeline(
  timeline,
  rotationState,
  groupRef,
  firstTarget,
  secondTarget,
  animationProps
) {
  timeline.to(groupRef.current.rotation, {
    y: rotationState,
    // x: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
}
