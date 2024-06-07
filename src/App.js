import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Compenents/login/Login';
import Register from './Compenents/register/Register';
import Home from './Compenents/Home';
// Import other components as needed

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Home",
      element: <Home/>
    }
    // Add additional routes here
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
      {/* Ensure all components using routing context are within RouterProvider */}
    </div>
  );
}

export default App;
