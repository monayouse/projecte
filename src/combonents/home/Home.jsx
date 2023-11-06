import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import myImage from '../../imags/avataaars.svg'
import './css/style.css'
export default class Home extends Component {
  render() {
    return (
      <div>Home
      <div className="my-home py-5 mt-5   text-white">
        <div className=" my-img flex-column mt-5  d-flex justify-content-center  align-items-center">
          <img src={myImage} alt="man" className='' />
        </div>

        <div className="home-content flex-column    d-flex justify-content-center  align-items-center">

          <h2>START FRAMEWORK</h2>

          <div className="lines d-flex justify-content-center  align-items-center">

            <div className="line "></div>
            <i className="fa-solid fa-star mx-2 text-white"></i>
            <div className="line "></div>

          </div>
          <p>Graphic Artist - Web Designer - Illustrato</p>

        </div>
      </div>









   


       
      </div>
    )
  }
}
