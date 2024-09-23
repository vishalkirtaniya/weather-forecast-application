import Image from "next/image";

const Humidity = ({ humidity }) => {
  return (
    <div className="h-full w-full relative">
      <h3 className="text-sm font-semibold mb-5 opacity-50 absolute">
        Humidity
      </h3>
      <div className="h-full w-full flex justify-start items-center gap-2 absolute pt-3">
        <Image
          src={"/assets/icons/guage.png"}
          height={30}
          width={30}
          alt="humidity meter icon"
        />
        <p className="text-3xl font-bold">
          {humidity}
          <span className="text-sm">%</span>
        </p>
      </div>
    </div>
  );
};

export default Humidity;
