import React from "react";

const Hero2 = ({ image, title, description, scrollPosition }) => {
  const imageScale = scrollPosition > 80 ? "pr-96 w-full mt-32 pt-10" : "w-screen";
  const descriptionOpacity = scrollPosition > 80 ? "opacity-100" : "opacity-0 ";

  return (
    <div className="">
      <div className={`relative`}>
        <div>
          <img
            src={image}
            alt=""
            className={`${imageScale} transition-all ease-in-out duration-500`}
          />
        </div>
        <div
          className={`flex place-content-end font-helvetica-neue place-items-center absolute inset-0 text-neutral-100 text-[72px] font-normal leading-[83.60px] transition-all ease-in-out duration-500 ${descriptionOpacity}`}
        >
          <div className="w-[982px]">{title}</div>
        </div>
      </div>
      <div
        className={`mt-8 flex place-content-end transition-opacity opacity-0 ${descriptionOpacity}`}
      >
        <div className="text-zinc-300 w-[982px] text-base font-thin font-Helvetica Neue leading-7 tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
