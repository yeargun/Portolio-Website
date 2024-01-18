"use client";
import Link from "next/link";
import AnimatedLetters from "@components/AnimatedLetters/AnimatedLetters";
import styles from "./HomePageMainThing.module.scss";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import React, { useRef, useState } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "react-three-fiber";
import { OrbitControls, Box } from "@react-three/drei";

extend({ OrbitControls });

const nameArray = ["y", "e", "a", "r", "g", "u", "n"];
const jobArray = [
  "s",
  "o",
  "f",
  "t",
  "w",
  "a",
  "r",
  "e",
  " ",
  "e",
  "n",
  "g",
  "i",
  "n",
  "e",
  "e",
  "r",
];
const letterClass = "textAnimate";

// Custom Three.js component for loading and displaying the 3D model
const Model = ({ onModelLoad }) => {
  const gltfRef = useRef();

  useFrame(() => {
    if (gltfRef.current) {
      gltfRef.current.scale.set(3.2, 3.2, 3.2); // Adjust the scale as needed
      gltfRef.current.position.y = -0.5;
      gltfRef.current.position.x = 0.15;
    }
  });

  const gltf = useLoader(
    GLTFLoader,
    "/images/me3dlowq.glb",
    undefined,
    (loader) => {
      if (onModelLoad) {
        onModelLoad();
      }
    }
  );

  return <primitive ref={gltfRef} object={gltf.scene} />;
};

export default function Page() {
  const [assetIsLoaded, setAssetIsLoaded] = useState(false);
  const handleModelLoad = () => {
    setAssetIsLoaded(true);
  };

  return (
    <main className={styles.homePage}>
      <section
        style={{
          position: "absolute",
          height: "50%",
          width: "50%",
          left: "20%",
          top: "20%",
          display: "block",
        }}
      >
        {assetIsLoaded && (
          <h3
            style={{
              position: "absolute",
              zIndex: "998",
              // textAlign: "center",
              color: "black",
              fontSize: "21px",
              margin: "0",
            }}
          >
            something uncool <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            god I hate the way this looks like <br />
            check this out <br />
            something uncool
            {/* god I hate the way this looks <br />
          god I hate the way this looks <br /> */}
          </h3>
        )}
        <img
          src={
            assetIsLoaded
              ? "/images/removedbarcel2.avif"
              : "/images/barcel2.jpeg"
          }
          style={{ position: "absolute" }}
          width="330px"
          alt={""}
          quality={90}
          priority={true}
        />
        <Canvas
          style={{ width: "330px", zIndex: "999", height: "454px" }}
          camera={{ position: [0, 0, 5] }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Model onModelLoad={handleModelLoad} />

          <OrbitControls enableDamping enablePan enableRotate enableZoom />
        </Canvas>
      </section>
      <div className={styles.textZone}>
        <h1 className={styles.nonSelectable}>
          <span className={styles.letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className={`${letterClass} _14`}>'m&nbsp;</span>

          <AnimatedLetters
            className={styles.nameAnimatedLetters}
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            className={styles.jobAnimatedLetters}
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2 className={styles.nonSelectable}>ML | Cloud Native Apps | UI/UX</h2>
        <Link href="/contact" className={styles.flatButton}>
          CONTACT ME
        </Link>
      </div>
    </main>
  );
}
