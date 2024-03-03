import { HeartFilledIcon } from "@/components/ui/icons";
import { Meteors } from "@/components/ui/meteors";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsHeartbreak } from "react-icons/bs";
import { GiHeartNecklace } from "react-icons/gi";

function valentine() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div>
        <div className="">
          <div className=" h-3/4 md:h-1/2 w-full  relative ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 to-orange-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <GiHeartNecklace size={"50"} />

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Will You Be My Valentine?
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Meteors blaze, shooting stars they gleam,
                <br></br>
                In your eyes, I find my dream.
                <br></br>
                With every twinkle, my heart it beams,
                <br></br>
                Will you be my valentine, in love&apos;s cosmic stream?
                <br></br>
              </p>
              <div className="flex gap-3 justify-between items-center">
                <div>
                  {" "}
                  <Button
                    as={Link}
                    className="text-sm font-normal text-default-600 bg-default-100 "
                    href={"/will/you"}
                    startContent={<HeartFilledIcon className="text-danger" />}
                    variant="flat"
                  >
                    Yes I will
                  </Button>
                </div>
                <div>
                  <Button
                    as={Link}
                    className="text-sm font-normal text-default-600 bg-default-100 hover:bg-opacity-0 hover:transform hover:scale-x-50 hover:scale-y-50 duration-75 ease-in-out"
                    href={"/will/no"}
                    startContent={
                      <BsHeartbreak size={"22"} className="text-danger" />
                    }
                    variant="flat"
                  >
                    No I won&apos;t
                  </Button>
                </div>
              </div>
              {/* Meaty part - Meteor effect */}
              <Meteors number={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default valentine;
