
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use 'react-router-dom' for React Router v6
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
// import Projects from './Pages/Projects.jsx';

// const router = createBrowserRouter([
  // {
  //   path:'/',
  //   //element: {user ? <Navigate to="/dashboard" : <Login/>}
  //   element: <homd/>
  // },
  // {
  //   path:'/',
  //  element: <Home/>
  // },
  // {
  //   path:'/about',
  //  element: <About/>
  // }
  // ,
  // {
  //   path:'/projects',
  //  element: <Projects/>
  // }
  //,
  // {
  //   path:'/signin',
  //   element:<Signin/>
  // },
  // {
  //   path:'/dashboard',
  //   element:<Dashboard/>
  // }

// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router}></RouterProvider> */}
  </React.StrictMode>
)