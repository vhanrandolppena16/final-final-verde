// Login.jsx

// Importing necessary hooks and modules
import React, { useState, useEffect } from 'react';   // React core and state/effect hooks
import { useNavigate } from "react-router-dom";       // Hook to programmatically navigate between routes

// Importing assets
import logo from "../../assets/images/Verde Full Logo.png";     // App logo
import hydroponics from "../../assets/images/hydroponics2.jpg"; // Background image for login

// Importing Firebase authentication methods
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../../../firebase/Firebase"; // Firebase config and auth instance

// Login component definition, accepts optional props like setView
const Login = ({ setView }) => {
  const navigate = useNavigate(); // Used for redirecting user after login

  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login logic
  const handleLogIn = async () => {
    // Check for empty input fields
    if (!email || !password) {
      alert("Please fill in all the fields.");
      return;
    }

    // Simple regex to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Firebase authentication: sign in with email and password
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;                       // Extract user info

        // Log basic user info (will be removed in production)
        console.log("Logged in with:", user.email);
        console.log("UID:", user.uid);
        console.log("Access Token:", user.getIdToken());        // This returns a promise
        console.log("User Info:", user);
      })
      .catch((error) => console.log(error));                    // Log error (can be replaced with UI alert)
  };

  // Effect to check if user is already authenticated and redirect them
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard"); // Redirect to dashboard if user is logged in
      }
    });

    // Cleanup function to remove listener on component unmount
    return () => unsubscribe();
  }, []);

  // JSX returned by the Login component
  return (
    <>
      {/* Logo placed at the top-left corner */}
      <div className="fixed top-2.5 left-2.5 z-20">
        <img src={logo} alt="Logo" className="w-[200px] h-auto" />
      </div>

      {/* Main container for login UI */}
      <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-[70%] h-[80%] bg-white/20 p-5 rounded-[15px]">
        
        {/* Left side with image and marketing text */}
        <div
          className="relative w-1/2 h-full flex items-end justify-start text-left rounded-[30px] overflow-hidden"
          style={{
            backgroundImage: `url(${hydroponics})`, // Set background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay blur effect */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />
          
          {/* Text content over the image */}
          <header className="relative z-10 p-4 ml-[3%] mb-[2%]">
            <h1 className="text-white text-4xl font-bold leading-snug">
              SMART FARMING.
              <br />
              SMARTER FUTURE.
            </h1>
          </header>
        </div>

        {/* Right side: login form */}
        <div className="ml-4 w-[45%] h-[80%] bg-black/30 p-5 rounded-[10px] text-center flex flex-col items-center justify-center gap-4">
          
          {/* Form title */}
          <h2 className="text-white text-2xl font-bold">Log In</h2>

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} // Update state on input
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} // Update state on input
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
          />

          {/* Login button */}
          <button
            onClick={() => handleLogIn()}
            className="w-full max-w-sm text-center bg-black text-white text-lg py-2 px-4 rounded-[15px] hover:bg-[#064918] transition"
          >
            Login
          </button>

          {/* Redirect to sign-up */}
          <p className="text-sm">
            Haven't registered yet?{" "}
            <span
              onClick={() => navigate("/signup")} // Redirect to sign-up page
              className="text-blue-500 underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>

          {/* Back to welcome screen button */}
          <button
            onClick={() => navigate("/")} // Redirect to welcome screen
            className="w-full max-w-sm text-center bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Back
          </button>
        </div>
      </nav>
    </>
  );
};

// Exporting the component so it can be used in routes
export default Login;
