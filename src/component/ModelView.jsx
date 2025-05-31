import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Iphone from "./iphone";
import { Suspense } from "react";
import { AmbientLight } from "three";
import * as THREE from "three";
import Lights from "../utils/light";
import Loader from "./Loader";

export default function ModelView({
  index,
  gsapType,
  cameraControl,
  groupRef,
  setRotationState,
  item,
  size,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute  ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        ref={cameraControl}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(cameraControl.current.getAzimuthalAngle())
        }
      />

      <group
        ref={groupRef}
        name={`${index == 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}
