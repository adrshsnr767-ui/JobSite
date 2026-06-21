import React from "react";
import Logo2 from "../assets/logo2.svg";

const Nav = () => {
  return (
    <>
      <nav className=" bg-[white] h-[9vh] md:px-[7rem] flex items-center 
      xl:hidden px-[1rem]">
        <div className=" flex justify-between w-full">
          <div>
            <img src={Logo2} alt="logo" className=" w-[120px]" />
          </div>

          <div className=" text-[1.4em] font-light flex gap-4">
            <i class="ri-user-line"></i>
            <i class="ri-notification-4-line"></i>
            <i class="ri-menu-3-fill"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
