import React from "react";
import Image from "next/image";

const SeaAndGround = ({ sea, ground }) => {
  const seaLevel = sea / 10;
  const groundLevel = ground / 10;
  return (
    <div className="h-full w-full relative">
      <h3 className="xxs:text-[10px] sm:text-xs md:text-sm font-semibold mb-5 opacity-50 absolute">
        Sea & Ground Level
      </h3>
      <div className="h-full w-full flex flex-col justify-center gap-2 absolute pt-3">
        <div className="h-[30px] w-full flex items-center gap-2">
          <Image
            src={"/assets/icons/sea.png"}
            height={30}
            width={30}
            alt="sunrise icon"
            className="rounded-full overflow-hidden"
          />
          <h1 className="xxs:text-[10px] sm:text-sm md:text-md font-bold">
            {seaLevel} <span className="xxs:text-[6px] sm:text-sm">M</span>
          </h1>
        </div>
        <div className="h-[30px] w-full flex items-center gap-2">
          <Image
            src={"/assets/icons/soil.png"}
            height={30}
            width={30}
            alt="sunset icon"
            className="rounded-full overflow-hidden"
          />
          <h1 className="xxs:text-[10px] sm:text-sm md:text-md font-bold">
            {groundLevel} <span className="xxs:text-[6px] sm:text-sm">M</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SeaAndGround;
