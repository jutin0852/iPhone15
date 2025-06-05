import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import animateWithGsap from "../utils/animateWithGsap";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

export default function Feature() {
  const exploreRef = useRef(null);
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause play reverse",
        start: "-10% bottom ",
      },
      onComplete: () => {
        exploreRef.current.play();
      },
    });
    animateWithGsap(
      ".exploreImg",
      { opacity: 1, scale: 1.4, duration: 1,ease:'power1' },
      { scrub: 5.5 }
    );

    animateWithGsap("#explore", { y: 0, opacity: 1 });
    animateWithGsap("#exploreText", { y: 0, opacity: 1, ease: "power1" });
  }, []);
  return (
    <section className="px-5 sm:px-14 py-10 sm:py-15 bg-white/7">
      <div>
        <h2
          id="explore"
          className="font-semibold opacity-0 sm:my-20 my-10  translate-y-10 text-3xl sm:text-5xl text-[#656568]"
        >
          Explore the full story
        </h2>
        <div className="flex mt-15 sm:mt-40  justify-center items-center">
          <div>
            <h1 className="font-semibold text-5xl sm:text-6xl text-white self-start ">
              iPhone.
            </h1>
            <h1 className="font-semibold text-5xl sm:text-6xl text-white ">
              Forged in titanium
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <div className=" mt-15 mb-3 max-w-[900px] ">
            <video
              ref={exploreRef}
              muted
              autoPlay
              playsInline
              id="exploreVideo"
              className=" mb-3 object-center h-[50vh] sm:h-full w-full object-cover"
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
            <div className="flex gap-5 max-sm:flex-wrap   justify-between ">
              <div className="sm:w-[48.5%] sm:h-[50vh] overflow-hidden">
                <img
                  src={explore1Img}
                  className=" exploreImg opacity-0 h-full w-full "
                  alt="explore1"
                />
              </div>
              <div className="sm:w-[48.5%] sm:h-[50vh] overflow-hidden">
                <img
                  src={explore2Img}
                  className=" exploreImg opacity-0 sm:h-full "
                  alt="explore1"
                />
              </div>
            </div>
            <div
              id="exploreText"
              className="text-[#656568] font-semibold text-xl flex gap-5 max-sm:flex-wrap mt-10 sm:mt-20 max-sm:p-10 opacity-0 translate-y-20"
            >
              <p>
                iPhone 15 pro is using the same alloy that space crafts use for
                missins to mars.
                <span className="text-white">
                  {" "}
                  The first iphone to feature an aerospace-grade titanium design
                </span>
              </p>
              <p>
                Titanium has one of te best strength-to-weight ratios of ay
                metal,making these our
                <span className="text-white">
                  {" "}
                  lightest Pro models ever.{" "}
                </span>{" "}
                You'll notice the difference the moment you pick one up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
