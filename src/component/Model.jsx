import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import animateWithTimeline from "../utils/animateWithTimeline";

export default function Model() {
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });
  const [modelSize, setModelSize] = useState("small");

  // camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model group
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#look", {
      translateY: 0,
      opacity: 1,
      duration: 2,
    });
  });

  const timeline = gsap.timeline();
  useEffect(() => {
    if (modelSize == "large") {
      animateWithTimeline(timeline, smallRotation, small, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 1,
      });
    }
    if (modelSize == "small") {
      animateWithTimeline(timeline, largeRotation, large, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 1,
      });
    }
  }, [modelSize]);

  return (
    <section className="max-sm:px-5 px-10 py-18 flex justify-center ">
      <div className="max-sm:w-full w-5/6">
        <h1
          id="look"
          className="mb-10 font-bold text-2xl md:text-6xl text-gray-500 translate-y-10 opacity-0  "
        >
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center my-5">
          <div className="w-full  h-[75vh] md:h-[90vh] overflow-hidden relative my-5">
            <ModelView
              index={1}
              gsapType={"view1"}
              cameraControl={cameraControlSmall}
              groupRef={small}
              setRotationState={setSmallRotation}
              item={model}
              size={modelSize}
            />
            <ModelView
              index={2}
              gsapType={"view2"}
              cameraControl={cameraControlLarge}
              groupRef={large}
              setRotationState={setLargeRotation}
              item={model}
              size={modelSize}
            />
            <Canvas
              className="w-full h-full "
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
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
