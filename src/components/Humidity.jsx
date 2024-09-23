import Image from "next/image";

const Humidity = ({ humidity }) => {
  return (
    <div className="h-full w-full relative">
      <h3 className="xxs:text-[10px] sm:text-xs md:text-sm font-semibold mb-5 opacity-50 absolute">
        Humidity
      </h3>
      <div className="h-full w-full flex justify-start items-center gap-2 absolute pt-3">
        <Image
          src={"/assets/icons/guage.png"}
          height={30}
          width={30}
          alt="humidity meter icon"
        />
        <p className="xxs:text-xs sm:text-sm md:text-3xl font-bold">
          {humidity}
          <span className="xxs:text-[6px] sm:text-sm">%</span>
        </p>
      </div>
    </div>
  );
};

export default Humidity;
