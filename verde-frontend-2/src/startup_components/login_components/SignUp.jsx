// SignUp.jsx
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Verde Full Logo.png";
import hydroponics from "../../assets/images/hydroponics2.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Logo */}
      <div className="fixed top-2.5 left-2.5 z-20">
        <img src={logo} alt="Logo" className="w-[200px] h-auto" />
      </div>

      {/* Signup container */}
      <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-[70%] h-[80%] bg-white/20 p-5 rounded-[15px]">
        {/* Left Side with background image */}
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

        {/* Right Side with form */}
        <div className="ml-4 w-[45%] h-[80%] bg-black/30 p-5 rounded-[10px] text-center flex flex-col items-center justify-center gap-4">
          <h2 className="text-white text-2xl font-bold">Sign Up</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
          />

          <button
            onClick={() => navigate("/register-successful")}
            className="w-full max-w-sm text-center bg-black text-white text-lg py-2 px-4 rounded-[15px] hover:bg-[#064918] transition"
          >
            Sign Up
          </button>

          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 underline cursor-pointer"
            >
              Log In
            </span>
          </p>

          <button
            onClick={() => navigate("/")}
            className="w-full max-w-sm text-center bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Back
          </button>
        </div>
      </nav>
    </>
  );
};

export default SignUp;
