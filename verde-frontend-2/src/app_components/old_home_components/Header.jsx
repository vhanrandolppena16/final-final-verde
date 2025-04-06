// Header.jsx

// Import assets and libraries
import logo from '../../assets/images/LOGO2.png';                   // Logo image
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  // MUI icon for user
import React from "react";                                          // React core

// Header component receives navigation text as a prop
function Header({ navigationText }) {
    return (
        // NAVIGATION BAR CONTAINER
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
            {/* LOGO CONTAINER */}
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

            {/* NAVIGATION TEXT CONTAINER */}
            <div className="
                bg-red-600                          // Bright red background
                h-[60%]                             // 60% of nav bar height
                flex items-center justify-center    // Centers text inside
                px-6                                // Horizontal padding
                ml-4                                // Margin-left to separate from logo
                rounded-md                          // Rounded corners
                min-w-[50px]                        // Ensures it doesn't shrink too small
            ">
                <h2 className="text-white font-semibold text-base">
                    {navigationText}
                </h2>
            </div>

            {/* USER GREETING SECTION (FLOATS TO RIGHT) */}
            <div className="
                absolute right-4                            // Positioned absolutely at 1rem from the right
                flex items-center gap-3                     // Flex layout with gap between icon and text
                bg-blue-800 text-white                      // Blue background, white text
                px-4 py-2                                   // Padding around content
                ml-auto mr-4                                // Left auto pushes it right; right margin adds spacing
                mt-3.5                                      // Margin pushes it down
                rounded-md                                  // Rounded corners
                max-w-[300px]                               // Limits how wide it can grow
                transition-all duration-300 ease-in-out     // Smooth transition support (optional for animation)
            ">
                {/* User Icon */}
                <AccountCircleIcon className="!text-white !text-3xl" />
                {/* Greeting Text */}
                <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold">Hello, Ralph Diocera</span>
                    <span className="text-xs">User</span>
                </div>
            </div>
        </nav>
    );
}

// Export for use in other components
export default Header;
