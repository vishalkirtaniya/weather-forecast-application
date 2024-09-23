import Image from "next/image";

const SunInfo = ({ sunrise, sunset }) => {
  const convertUnixToTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="h-full w-full relative">
      <h3 className="text-sm font-semibold mb-5 opacity-50 absolute">
        Sunrise & Sunset
      </h3>
      <div className="h-full w-full flex flex-col justify-center gap-2 absolute pt-3">
        <div className="h-[30px] w-full flex items-center gap-2">
          <Image
            src={"/assets/icons/sunrise.png"}
            height={30}
            width={30}
            alt="sunrise icon"
          />
          <h1 className="text-md font-bold">{convertUnixToTime(sunrise)}</h1>
        </div>
        <div className="h-[30px] w-full flex items-center gap-2">
          <Image
            src={"/assets/icons/sunset.png"}
            height={30}
            width={30}
            alt="sunset icon"
          />
          <h1 className="text-md font-bold">{convertUnixToTime(sunset)}</h1>
        </div>
      </div>

      {/* <p>🌅 Sunrise: {convertUnixToTime(sunrise)}</p>
      <p>🌇 Sunset: {convertUnixToTime(sunset)}</p> */}
    </div>
  );
};

export default SunInfo;
