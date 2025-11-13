import React from "react";

const Separator = () => {
  return (
    <div className="flex items-center justify-center gap-5 px-4 py-4 bg-[#ef7a2d]">
      <span className="font-roboto font-bold text-white text-lg md:text-xl">
        Fast
      </span>

      <span className="w-2.5 h-2.5 bg-white rounded-full" />

      <span className="font-roboto font-bold text-white text-lg md:text-xl">
        Affordable
      </span>

      <span className="w-2.5 h-2.5 bg-white rounded-full" />

      <span className="font-roboto font-bold text-white text-lg md:text-xl">
        Creative
      </span>
    </div>
  );
};

export default Separator;
