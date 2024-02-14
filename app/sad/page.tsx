import React from "react";
import { sacramento } from "@/lib/fonts";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function page() {
  const line1 = `When Life Gives You Lemons, Play Some Tunes!`;
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-blue-gray-300 via-blue-gray-400 to-gray-300 ">
        <div className="flex justify-center items-center ">
          <div className="w-full mx-auto md:w-3/4 h-full md:h-1/2 my-9 ">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX16fznubzL23?utm_source=generator&theme=0"
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
            className={`text-5xl md:text-8xl lg:text-9xl ${sacramento.className}`}
          />
        </div>
      </div>
    </>
  );
}
