"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts";
import { FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const line1 = `"Roses are red, violets are blue,My dear, my valentine's true."`;
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl  flex-col">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <TextGenerateEffect
            words={line1}
            className={`text-2xl md:text-3xl lg:text-8xl ${dancing_script.className}`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 6.75 }}
          className="absolute bottom-10"
        >
          <Link href={"/spotify"}>
            <FaSpotify />
          </Link>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  );
}
