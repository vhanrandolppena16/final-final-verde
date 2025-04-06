// App.jsx

// Importing the Routes and Route components from react-router to handle routing in the app
import { Routes, Route } from "react-router";

// Importing custom components used in the app
import AppBackground from "./startup_components/AppBackground";     // Sets up the background
import WelcomeScreen from "./startup_components/WelcomeScreen";     // Welcome or landing screen (to be deleted)
import Login from "./startup_components/login_components/LogIn";    // Login form component (to be deleted)
import SignUp from "./startup_components/login_components/SignUp";  // Sign-up/registration form component (to be deleted)

import AuthLayout from "./startup_components/AuthLayout";                                   // Welcome or landing screen
import RefactorWelcomeScreen from "./startup_components/login_components/RefactorWelcome";  // Login/SignUp form component
import RefactorLogin from "./startup_components/login_components/RefactorLogin";            // Login form component
import RefactorSignUp from "./startup_components/login_components/RefactorSignUp";          // Sign-up/registration form component

import Home from "./app_components/FinalHome";                           // Main component shown after login (dashboard, etc.)

// Main App component
function App() {
  return (
    <>
      {/* Rendering the AppBackground component to set the background visuals */}
      <AppBackground />
      
      {/* Defining routes using React Router */}
      <Routes>
        {/* Grouping welcome, login, and signup under a shared AuthLayout using Outlet */}
        <Route path="/" element={<AuthLayout />}>                          
          <Route path="/" element={<RefactorWelcomeScreen />} />  {/* Welcome screen route (root path) */}
          <Route path="/login" element={<RefactorLogin />} />     {/* Login screen route */}
          <Route path="/signup" element={<RefactorSignUp />} />   {/* Sign Up screen route */}
        </Route>

        {/* Grouping welcome, login, and signup under a shared AuthLayout using Outlet */}
        {/**
          <Route path="/home" element={<Home />}>                          
            <Route path="/home" element={<FinalDashboard />} />  
            <Route path="/analysis" element={<FinalAnalysis />} />     
            <Route path="/dataset" element={<FinalDataset />} />
            <Route path="/control" element={<FinalControl />} />
            <Route path="/logs" element={<FinalLogs />} />
            <Route path="/account" element={<FinalAccount />} />
            <Route path="/about" element={<FinalAbout />} />
            <Route path="/livestream" element={<FinalLivestream />} />
            <Route path="/logout" element={<FinalLogout />} />
          </Route>
        */}


        {/* /dashboard path renders the Home component */}
        <Route path='/dashboard' element={
          <>
            <Home />
            {/* <Sidebar /> // Sidebar is currently commented out */}
          </>
        }/>

        {/* /analysis path renders the Home component */}
        <Route path='/analysis' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /dataset path renders the Home component */}
        <Route path='/dataset' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /control path renders the Home component */}
        <Route path='/control' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /logs path renders the Home component */}
        <Route path='/logs' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /account path renders the Home component */}
        <Route path='/account' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /about path renders the Home component */}
        <Route path='/about' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /livestream path renders the Home component */}
        <Route path='/livestream' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

        {/* /logout path renders the Home component */}
        <Route path='/logout' element={
          <>
            <Home />
            {/* <Sidebar /> */}
          </>
        }/>

      </Routes>
    </>
  )
}

// Exporting the App component as default
export default App;
