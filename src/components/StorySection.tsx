"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSectionStore } from "@/lib/useSectionStore";

interface Props {
  title: string;
  description: string;
}

export default function StorySection({ title, description }: Props) {
  const ref = useRef(null);
  const setSection = useSectionStore((state) => state.setSection);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]); // parallax
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="h-screen flex items-center px-12 bg-[#F9FFF6] text-[#1A1A1A]"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <motion.div style={{ opacity, y }} onViewportEnter={() => setSection(title)}>
          <h1 className="text-5xl font-bold mb-6 text-[#2E7D32] leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            {description}
          </p>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          className="h-[320px] bg-gradient-to-br from-[#E6F9DA] to-[#C8F5B0] rounded-3xl shadow-lg relative overflow-hidden flex items-center justify-center"
          style={{ y }}
        >
          <motion.div
            className="absolute w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-30"
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
