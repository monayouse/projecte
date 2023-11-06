import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './combonents/home/Home';
import About from './combonents/about/About';
import Navbar from './combonents/navbar/Navbar';
import Layout from './combonents/layout/Layout';
import Contact from './combonents/contact/Contact';
import Portpfolio from './combonents/portofoli/Portpfolio';




// createBrowserRouter
const router = createHashRouter([

  {
    path: '', element: <Layout />, children: [
      {  path: '', element: <Home /> },
      {  path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portpfolio /> }
      

    ]
  },


]);

export default class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
}
