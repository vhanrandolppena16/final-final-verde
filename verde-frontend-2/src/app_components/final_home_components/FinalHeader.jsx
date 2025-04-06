// FinalHeader.jsx

import React from "react";
import Logo from "./header_components/HeaderLogo";
import NavigationDisplay from "./header_components/NavDisplay";
import UserGreeting from "./header_components/HeaderUserGreeting";

const Header = ({ navigationText }) => {
  return (
    <nav className="
        min-w-[640px]   // Ensures the nav bar doesn't shrink below 640px wide
        w-full          // Makes the nav bar span the full available width
        max-w-screen    // Caps width to the screen width (safe on ultra-wide monitors)
        h-20            // Fixed height (80px)
        bg-green-300    // Light green background
        flex            // Enables flexbox layout
        items-center    // Vertically centers child elements
        shadow-md       // Applies medium shadow for depth
        fixed           // Fixes the nav bar to the top of the screen
        top-0 left-0    // Positions it at the very top-left of the page
        z-[1000]        // Ensures it stays on top of other elements
    ">
      <Logo />
      <NavigationDisplay text={navigationText} />
      <UserGreeting />
    </nav>
  );
};

export default Header;
