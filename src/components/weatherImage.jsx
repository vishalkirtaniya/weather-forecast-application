const WeatherImage = ({ image, cityname }) => {
  return (
    <div className="h-full w-full relative">
      <div className="h-full w-full absolute saturate-200 overflow-hidden">
        <img
          src={image}
          height={100}
          width={200}
          alt="gifs"
          className="scale-[170%]"
        />
      </div>
      <div className="h-full w-full z-30 absolute flex justify-center items-center">
        <h1 className="xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl text-customOffWhite  font-bold absolute ">
          {cityname}
        </h1>
      </div>
    </div>
  );
};

export default WeatherImage;
