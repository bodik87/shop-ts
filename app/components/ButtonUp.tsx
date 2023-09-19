"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { UPArrow } from "./Icons";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ButtonUp() {
  const [show, setShow] = useState(false);
  const { scrollY }: any = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.current > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {show && (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 flex items-center justify-center bg-white/50 border-2 border-gray-300/50 rounded-full fixed bottom-4 right-4 z-10 backdrop-blur-md"
            onClick={scrollToTop}
          >
            <UPArrow />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
