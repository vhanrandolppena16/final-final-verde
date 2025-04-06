// components/AuthLayout.jsx




import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/Verde Full Logo.png";
import hydroponics from "../assets/images/hydroponics2.jpg";

const AuthLayout = () => {
  return (
    <>
      {/* Logo */}
      <div className="fixed top-2.5 left-2.5 z-20">
        <img src={logo} alt="Logo" className="w-[200px] h-auto" />
      </div>

      {/* Shared container */}
      <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-[70%] h-[80%] bg-white/20 p-5 rounded-[15px]">
        
        {/* Left side - Background with tagline */}
        <div
          className="relative w-1/2 h-full flex items-end justify-start text-left rounded-[30px] overflow-hidden"
          style={{
            backgroundImage: `url(${hydroponics})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />
          <header className="relative z-10 p-4 ml-[3%] mb-[2%]">
            <h1 className="text-white text-4xl font-bold leading-snug">
              SMART FARMING.
              <br />
              SMARTER FUTURE.
            </h1>
          </header>
        </div>

        {/* Right side - Dynamic content from children routes */}
        <div className="ml-4 w-[45%] h-[90%] bg-black/30 p-5 rounded-[10px] text-center flex flex-col items-center justify-center gap-4">
          <Outlet />
        </div>
      </nav>
    </>
  );
};

export default AuthLayout;
