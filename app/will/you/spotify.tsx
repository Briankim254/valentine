"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

export const Spotify = () => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 6.75 }}
      className="absolute bottom-10"
    >
      <Link href="/spotify">
        <FaSpotify />
      </Link>
    </motion.div>
  </>
);

