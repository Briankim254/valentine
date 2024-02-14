import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts";
import { Spotify } from "./spotify";

export default function Home() {
  const line1 = `"Roses are red, violets are blue,
    Though my heart's heavy, I still wish you true.
    "`;
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pointer-events-none">
          <TextGenerateEffect
            words={line1}
            className={`text-2xl md:text-3xl lg:text-8xl ${dancing_script.className}`}
          />
        </div>
        <div className="absolute bottom-10">
          <Spotify />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
