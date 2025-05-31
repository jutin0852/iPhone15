import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

export default function Hero() {
  const [heroVideoSrc, setHeroVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleHeroResize = () => {
    if (window.innerWidth < 760) {
      setHeroVideoSrc(smallHeroVideo);
    } else {
      setHeroVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleHeroResize);
    return () => window.removeEventListener("resize", handleHeroResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-text", {
      opacity: 0.8,
      delay: 1.5,
    });

    gsap.to("#buy", {
      translateY: 0,
      opacity: 0.8,
      delay: 2,
    });
  }, []);

  return (
    <section className="md:h-screen  pb-20 ">
      <div className="h-5/6 flex-center flex-col w-full ">
        <p
          id="hero-text"
          className="text-gray-100 font-semibold opacity-0 flex justify-center text-3xl"
        >
          iPhone 15 Pro
        </p>
        <div className="w-full ">
          <video
            autoPlay
            playsInline
            muted
            className="pointer-events-none "
            key={heroVideoSrc}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="buy"
          className="flex-center opacity-0 translate-y-50 flex-col "
        >
          <p className="px-5  inline bg-blue-500 rounded-3xl mb-4">Buy</p>
          <p className=" font-semibold text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
}
