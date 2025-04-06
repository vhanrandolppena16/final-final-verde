// FinalHeaderNavDisplay.jsx

// Import libraries
import React from "react";

// NAVIGATION TEXT CONTAINER
const NavigationDisplay = ({ text }) => (
  <div className="
    bg-red-600                          // Bright red background
    h-[60%]                             // 60% of nav bar height
    flex items-center justify-center    // Centers text inside
    px-6                                // Horizontal padding
    ml-4                                // Margin-left to separate from logo
    rounded-md                          // Rounded corners
    min-w-[50px]                        // Ensures it doesn't shrink too small
  ">
    <h2 className="text-white font-semibold text-base">{text}</h2>
  </div>
);

export default NavigationDisplay;
