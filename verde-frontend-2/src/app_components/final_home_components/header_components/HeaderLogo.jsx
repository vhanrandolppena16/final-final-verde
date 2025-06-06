// FinalHeaderLogo.jsx

// Import libraries
import React from "react";

// Import assets
import logo from "../../../assets/images/LOGO2.png"; // Adjust path if needed

// LOGO CONTAINER
const Logo = () => (
  <div className="
    bg-white bg-opacity-50              // White background with 50% opacity
    h-full max-h-[150px]                // Takes full height of parent, max 150px
    w-full max-w-[250px]                // Takes full width of its parent, max 250px
    flex items-center justify-center    // Centers logo both vertically and horizontally
    px-4 py-6                           // Horizontal and vertical padding
  ">
    <img
      src={logo}
      alt="Verde Logo"
      className="
            h-full           // Image fills the height of its container
            w-auto           // Width adjusts automatically to preserve aspect ratio
            max-h-full       // Prevents image from exceeding its container
            object-contain   // Ensures entire image is visible, maintains aspect ratio
        "
    />
  </div>
);

export default Logo;
