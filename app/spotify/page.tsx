
import React from "react";
import { dancing_script } from "@/lib/fonts";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
    const line1 = `"And as each note plays, may it be a reminder of the melody of our hearts beating as one."`;
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-pink-500 to-red-500">
        <div className="flex justify-center items-center ">
          <div className="w-full mx-auto md:w-3/4 h-full md:h-1/2 my-9 ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4pAtJteyweQ?utm_source=generator"
              width="100%"
              height="400"
              allowFullScreen
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center">
         
          <TextGenerateEffect
            words={line1}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
        </div>
      </div>
    </>
  );
}
