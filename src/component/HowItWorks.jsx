import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: { trigger: "#chip", start: "20% bottom" },
      opacity: 0,
      ease: "power2.inOut",
      scale: 2,
      duration: 2,
    });

    gsap.to("#howText", {
      scrollTrigger: {
        trigger: "#howText",
        start: "20% bottom",
        toggleActions: "restart reverse ,restart ,restart",
      },
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration:2
    });

    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "play pause play reverse",
        start: "20% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);
  return (
    <section className="p-15 sm:py-30 px-20 sm:px-40">
      <div className="flex justify-center py-20">
        <div id="chip">
          <img src={chipImg} alt="frame" width={180} height={180} />
        </div>
      </div>
      <div>
        <div className="text-center text-4xl sm:text-7xl font-semibold  ">
          <p>A17 Pro chip</p>
          <p>A monster win for gaming</p>
        </div>
        <p className="my-10 text-2xl font-semibold text-center text-[#656568]">
          it's here. The biggest redesign in thr history of Apple GPUs.
        </p>
      </div>

      <div className="flex flex-col justify-center ">
        <div className="relative mt-30 mb-20">
          <div className=" z-1 absolute overflow-hidden">
            <img src={frameImg} alt="frame" className="overflow-hidden" />
          </div>
          <div className="relative top-3   bottom-0 right-0 left-0 px-3  md:px-5 md:py-2 overflow-hidden ">
            <video
              id="frameVideo"
              muted
              playsInline
              autoPlay
              preload="none"
              ref={videoRef}
              className="rounded-[20px] md:rounded-[60px]"
            >
              <source src={frameVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p className="text-center text-[#656568] font-semibold">
          Honkai: Star Rail
        </p>
      </div>
      <div
        id="howText"
        className="text-[#656568]  font-semibold text-xl flex gap-15 max-sm:flex-wrap mt-20 max-sm:p-10 opacity-0 translate-y-20"
      >
        <p className="w-[50%]">
          A17 pro is an entirely new class of iphone chip that delivers our
          <span className="text-white">
            {" "}
            best grapic performance by far .{" "}
          </span>{" "}
          Mobile
          <span className="text-white">
            {" "}
            games will look and feel so immersive.
          </span>{" "}
          'wit incredible detailed enviroments and character.
        </p>
        <div className=" w-[50%]">
          <p>New</p>
          <p className="text-white text-4xl">Pro-class GPU </p>
          <p> with 6 cores</p>
        </div>
      </div>
    </section>
  );
}
