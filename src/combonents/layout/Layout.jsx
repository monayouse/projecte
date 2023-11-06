import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'



export default class Layout extends Component {
  render() {
    return <>

      <Navbar />

      <Outlet />



      <div className="my-end  pt-5">


        <div className="container mt-4 py-5  ">

          <div className="row gy-3">
            <div className="col-md-4">
              <div className="inner  d-flex justify-content-center  align-items-center flex-column text-white">

                <h3 >LOCATION</h3>
                <p >2215 John Daniel Drive</p>
                <p >Clark, MO 65243</p>

              </div>
            </div>




            <div className="col-md-4">
              <div className="inner">
                <h3 className=" text-white  d-flex justify-content-center  align-items-center flex-column text-white text-center">AROUND THE WEB</h3>
                <div className="layout-icons  d-flex justify-content-center  align-items-center">

                  <div className="icon d-flex justify-content-center  align-items-center text-white ms-2 p-3">
                    <i className="fa-brands fa-facebook  "></i>
                  </div>

                  <div className="icon d-flex justify-content-center  align-items-center text-white ms-2 p-3">
                    <i className="fa-brands fa-twitter "></i>
                  </div>
                  <div className="icon d-flex justify-content-center  align-items-center text-white ms-2 p-3">
                    <i className="fa-brands fa-linkedin-in   "></i>
                  </div>
                  <div className="icon d-flex justify-content-center  align-items-center text-white ms-2 p-3">
                    <i className="fa-solid fa-globe  "></i>
                  </div>
                </div>

              </div>
            </div>




            <div className="col-md-4">
              <div className="inner  d-flex justify-content-center  align-items-center flex-column text-white text-center">

                <h3 >ABOUT FREELANCER</h3>
                <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>

              </div>
            </div>
          </div>


        </div>

        <div className="coppy py-3  d-flex justify-content-center  align-items-center flex-column text-white">
          <p>Copyright © Your Website 2021</p>
        </div>

      </div>

    </>

  }
}
