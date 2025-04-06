// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// // Import  Libraries
// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// // Import  pages here
// import App from './App.jsx';
// import AppBackground from "./app_components/AppBackground";
// import WelcomeScreen from "./app_components/WelcomeScreen";

// // import Login from './pages/Login';

// // Defining Layout
// const LoginLayout = () => {
//   return (
//     <div>
//       <App />
//       {/* <WelcomeScreen /> */}
//       <Outlet />
//     </div> 
//   )
// }

// // Defining Routes
// const router = createBrowserRouter([{
//   path: '/',
//   element: <LoginLayout/>,
//   children:[
//     {
//       path: '/',
//       element: <App/>,
//     },
//     {
//       path: '/login',
//       element: <Login/>,
//     },
//   ]
// }])


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );