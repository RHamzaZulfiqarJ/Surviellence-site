"use client"

import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
      <h1 className="text-4xl font-bold text-blue-600">
        "
        <Typewriter
          words={["Industries", "Work-Zones", "Operational Sites"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
        "
      </h1>
  );
};

export default TypewriterEffect;
