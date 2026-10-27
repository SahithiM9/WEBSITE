
"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("lottie-react"),
  { ssr: false }
);

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
