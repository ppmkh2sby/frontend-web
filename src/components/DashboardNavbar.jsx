import React from "react";
import profile from "../assets/image/profil.jpg";

const DashboardNavbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-10 shadow-md">
      <div className="flex justify-between items-center bg-green-400 py-1 px-5">
        <div>
          <span className="text-4xl my-4">
            <ion-icon name="menu"></ion-icon>
          </span>
        </div>
        <div>
          <img
            src={profile}
            alt="Profile Picture"
            className="w-10 h-auto aspect-square object-cover rounded-xl"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
