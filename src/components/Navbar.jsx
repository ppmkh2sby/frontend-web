import { React, useState } from "react";
import logoPPM from "../assets/image/logoPPM.png";
import Button from "./Button";


const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "ACTIVITIES", link: "/activites" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open,setOpen]=useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex justify-between items-center bg-gray-800 py-4 bg-opacity-25 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="mr-2 pt-2">
            <img src={logoPPM} width={50} alt="logoPPM" />
          </span>
          PPMKH2
        </div>
        <div onClick={()=>setOpen(!open)}  className="text-3xl  absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={open ? "close":"menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:bg-transparent md:duration-0 bg-gray-800 bg-opacity-25 md:w-auto pl-9 mt-[0.65rem] duration-500 ease-in ${open ? 'top-20' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.name}
                className="text-white hover:text-gray-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Login</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
