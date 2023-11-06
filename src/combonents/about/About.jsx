import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import './css/style.css'

export default class About extends Component {
  render() {
    return <>

      <div className="my-about  container-fluid mt-5 text-white   py-5 ">


        <div className=" p-5 about-content container flex-column my-5  d-flex justify-content-center  align-items-center">
          <h2 className='pt-5'>ABOUT COMPONENT</h2>
          <div className="lines d-flex justify-content-center  align-items-center py-3">

            <div className="line "></div>
            <i className="fa-solid fa-star mx-2 text-white"></i>
            <div className="line "></div>

          </div>

          <div className="row gy-2">
            <div className="col-md-6">
              <div className="about-inner">
                <p>Freelancer is a free bootstrap theme
                  created by Route. The download includes
                  the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-inner">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>

  }
}
