import "./WelcomeScreen.css";
import logo from "../assets/images/Verde Full Logo.png"; // Import your logo

const WelcomeScreen = () => {
    return (
        <>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="app-logo" />        
            </div>
            <nav className="signup-container">
                <div className="signup-left">
                    <header className="header">
                        <h1 className="signup-heading">SMART FARMING.<br/>SMARTER FUTURE.</h1>
                    </header>
                </div>
                <div className="signup-right">
                    <h2>Getting Started</h2>
                    <button className="signup-button" onClick={() => setView("login")}>Log In</button>
                    <button className="signup-button" onClick={() => setView("signup")}>Sign Up</button>
                </div>
            </nav>
        </>
    );
};

export default WelcomeScreen;