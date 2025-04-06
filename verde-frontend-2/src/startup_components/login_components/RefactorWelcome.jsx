// WelcomeScreen.jsx
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Verde Full Logo.png";
import hydroponics from "../../assets/images/hydroponics2.jpg";

const RefactorWelcomeScreen = ({ setView }) => {
  const navigate = useNavigate();

  return (
    <>
        <h2 className="text-white text-2xl font-bold">Getting Started</h2>
        <button
          onClick={() => navigate("/login")}
          className="w-full text-center bg-black text-white text-lg py-2 px-4 rounded-[15px] hover:bg-[#064918] transition"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="w-full text-center bg-black text-white text-lg py-2 px-4 rounded-[15px] hover:bg-[#064918] transition"
        >
          Sign Up
        </button>
    </>
  );
};

export default RefactorWelcomeScreen;
