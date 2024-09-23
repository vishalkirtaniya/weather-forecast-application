import Image from "next/image";

const WindSpeed = ({ windSpeed }) => {
  return (
    <div className="h-full w-full  relative">
      <h3 className="text-sm font-semibold mb-5 opacity-50 absolute">
        Wind Speed
      </h3>
      <div className="h-full w-full flex flex-col justify-center absolute">
        <div className="h-[30px] w-full flex items-center gap-2">
          <Image
            src={"/assets/icons/wind.png"}
            height={30}
            width={30}
            alt="wind icon"
            className="rounded-full"
          />

          <h1 className="text-3xl font-bold ">
            {windSpeed} <span className="text-lg">Km/h</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WindSpeed;
