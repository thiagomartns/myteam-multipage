"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function AppProgress() {
  const { scrollYProgress } = useScroll();

  const [scrollValue, setScrollValue] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest * 100);
  });

  return (
    <div className=" fixed top-0 w-[100vw] bg-inherit z-[9999]">
      <Progress className="rounded-none sticky top-0" value={scrollValue} />
    </div>
  );
}
