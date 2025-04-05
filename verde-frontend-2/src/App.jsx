// App.jsx

// import libraries
import {Routes, Route} from "react-router"
// import files
import AppBackground from "./startup_components/AppBackground";
import WelcomeScreen from "./startup_components/WelcomeScreen";
import Login from "./startup_components/login_components/LogIn";
import SignUp from "./startup_components/login_components/SignUp"

function App() {
  return (
    <>
      <AppBackground />
      
      <Routes>
        <Route path='/' element={
          <WelcomeScreen />
          }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>

    </>
  )
}

export default App
