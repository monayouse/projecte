import React, { Component } from 'react'
import './css/style.css'
import $ from 'jquery'

export default class Portpfolio extends Component {




  layer = () => {
    for (let i = 0; i < 6; i++) {



      document.querySelectorAll('.port-inner')[i].addEventListener('click', function (e) {

        // console.log(document.querySelectorAll('.portofolio img')[i].getAttribute('src'));

        document.querySelector('.img-layers').classList.replace('d-none', 'd-block');


        // console.log(document.querySelector('.port-inner img').getAttribute('src'));

        // document.querySelector('.new-layer .img-img img').setAttribute('src',require('../../imags/port2.png'))
        document.querySelector('.new-layer .img-img img').setAttribute('src', document.querySelectorAll('.portofolio img')[i].getAttribute('src'))

      })


    }


    document.querySelector('.new-layer').addEventListener('click', function (e) {

      console.log(e.target);


      if (e.target === this) {
        document.querySelector('.img-layers').classList.replace('d-block', 'd-none');
      }

    })

  }
  componentDidMount() {
    this.layer();
  }











  render() {


    return <>

      <div className=" img-layers position-fixed bg-primary  bg-opacity-25 d-none   top-0 bottom-0 end-0 start-0">

        <div   className="d-flex justify-content-center align-items-center h-100 w-100 new-layer">
          <div className="img-img  ">
            <img className='w-100' alt="poert1" />
          </div>
        </div>

      </div>






      <div className="portofolio container-fluid mt-5   ">

        <div className="container py-5">


          <h2 className='mt-5 text-center'>PORTFOLIO COMPONENT</h2>

          <div className="lines d-flex justify-content-center  align-items-center">

            <div className="line "></div>
            <i className="fa-solid fa-star mx-2 "></i>
            <div className="line "></div>

          </div>

          <div className="row g-5 mt-5">

            <div className="col-md-4 ">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/poert1.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/port2.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/port3.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/poert1.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/port2.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="port-inner  position-relative">
                <img className='w-100 rounded-3' src={require('../../imags/port3.png')} alt="poert1" />
                <div className=" layer position-absolute top-0 end-0 start-0 bottom-0  d-flex justify-content-center align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>

                </div>
              </div>
            </div>




          </div>








        </div>












      </div>













    </>

  }
}
