import React from 'react';
import { TbCircleLetterFFilled } from "react-icons/tb";

export const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Icon on the left */}
      <div className="text-5xl">
        <TbCircleLetterFFilled />
      </div>

      {/* Language Button on the right */}
      <div className="static text-sm bg-orange-500 p-2 rounded-lg text-white">
        Language
      </div>
    </div>
  );
};
