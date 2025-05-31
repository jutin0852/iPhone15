import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";

export default function Model() {
  const [model, setModel] = useState({
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });
  const [modelSize, setModelSize] = useState("small");

  useGSAP(() => {
    gsap.to("#look", {
      translateY: 0,
      opacity: 1,
      duration: 2,
    });
  });
  return (
    <section className="px-20 py-18 flex justify-center items-center ">
      <div>
        <h1
          id="look"
          className="mb-10 font-bold text-2xl md:text-6xl text-gray-500 translate-y-10 opacity-0  "
        >
          Take a closer look.
        </h1>
        <div className="flex justify-center p-5">
          <div></div>
          <div>
            <p className="text-center">{model.title}</p>
            <div className="my-5 flex items-center gap-2">
              <div className="rounded-4xl   py-4 px-5 bg-neutral-800 flex justify-between w-44 ">
                {models.map((model, i) => (
                  <span
                    key={i}
                    style={{ background: `${model.color[0]}` }}
                    className="rounded-full cursor-pointer hover:border-2 w-6 h-6"
                    onClick={() => setModel(model)}
                  ></span>
                ))}
              </div>

              <div className="bg-neutral-800 flex rounded-4xl p-1">
                {sizes.map((size) => (
                  <span
                    className="rounded-full cursor-pointer bg-white text-black p-1.5"
                    key={size.label}
                    style={{
                      background:
                        size.value == modelSize ? "white" : "transparent",
                    }}
                    onClick={() => {
                      setModelSize(size.value);
                    }}
                  >
                    {size.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
