import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="bg-[#003A10] min-h-screen pl-[4vw]">
      <img
        src={assets.logo}
        className="mt-5 w-[max(10vw,100px)] hidden sm:block "
        alt=""
      />
      <img
        src={assets.logo_small}
        className="mt-5 w-[max(5vw,40px)] mr-5 block sm:hidden "
        alt=""
      />
      <div className="flex flex-col gap-5 mt-10">
        <NavLink  to="/add-song" className="flex items-center gap-2.5 text-rgay-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium  ">
          <img src={assets.add_song} className="w-5" alt="" />
          <p className="hidden sm:block"> Add song</p>
        </NavLink>
        <NavLink  to="/list-song" className="flex items-center gap-2.5 text-rgay-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium  ">
          <img src={assets.song_icon} className="w-5" alt="" />
          <p className="hidden sm:block"> List song</p>
        </NavLink>
        <NavLink to="/add-album" className="flex items-center gap-2.5 text-rgay-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium  ">
          <img src={assets.add_album} className="w-5" alt="" />
          <p className="hidden sm:block"> Add album</p>
        </NavLink>
        <NavLink to="/list-album" className="flex items-center gap-2.5 text-rgay-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium  ">
          <img src={assets.album_icon} className="w-5" alt="" />
          <p className="hidden sm:block"> List album</p>
        </NavLink>
      </div>
    </div>
  );
};
