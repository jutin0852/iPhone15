import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#highlight", { translateY: 0, opacity: 1 });
    gsap.to(".link", { translateY: 0, opacity: 1, duration: 1, stagger: 0.25 });
  });
  return (
    <section className="bg-zinc-900  p-5 md:p-10 overflow-hidden">
      <div className="md:flex flex-wrap justify-between mb-10 items-end">
        <h1
          id="highlight"
          className="text-gray-500 max-md:mb-5 text-4xl font-semibold opacity-0 translate-y-10"
        >
          Get the highlights.
        </h1>
        <div className="flex gap-5 items-end  text-blue-500">
          <p className="link flex gap-2 items-end opacity-0 translate-y-10">
            Watch the film <img src={watchImg} alt="watch" />
          </p>
          <p className="link opacity-0 translate-y-10 flex gap-2 ">
            Watch the event <img src={rightImg} alt="right" />
          </p>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
}
