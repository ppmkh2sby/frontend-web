import React from "react";
import profile from "../assets/image/profil.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="z-10 w-56 h-full bg-green-400">
      <div className="flex flex-col px-6 py-4">
        <div className="font-semibold text-white text-xl">PPMKH2</div>
        <div className="py-4 flex">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-12 h-auto aspect-square object-cover rounded-xl"
          ></img>
          <div className="ml-3 flex flex-col">
            <a className="text-white font-medium">Ervandi Riskia</a>
            <p className="text-gray-700">Admin</p>
          </div>
        </div>
        <ul className="sidebar-nav mt-6">
          <li className="sidebar-item flex items-center my-2">
            <a className="flex items-center text-base">
              <ion-icon name="grid"></ion-icon>
              <span className="ml-3">Dashboard</span>
            </a>
            <div className="flex-grow"></div>
            <ion-icon name="arrow-dropdown"></ion-icon>
          </li>
          <li className="sidebar-item flex items-center my-2">
            <a className="flex items-center text-base">
              <ion-icon name="people"></ion-icon>
              <span className="ml-3">Users</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
