import { Html } from "@react-three/drei";
import React from "react";

export default function Loader() {
  return (
    <Html>
      <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center ">
        <div>Loading...</div>
      </div>
    </Html>
  );
}
