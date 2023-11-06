import React, { Component } from 'react'
import './css/style.css'
import $ from 'jquery'

export default class Contact extends Component {
  h = () => {

    for (let i = 1; i < 5; i++) {
      $(`.t${i}`).keyup(function () {
        $(`.p${i}`).animate({ top: '15px' }, 300)
        console.log('rmam');
      })

    }

    //     $('.t1').keyup(function(){
    //       $('.p1').animate({top:'15px'},300)
    // console.log('rmam');
    //     })
  }
  componentDidMount() {
    this.h();
  }

  render() {




    return (
      <div>Contact


        <div className="container-fluid mt-5 p-5 contact d-flex justify-content-center  align-items-center flex-column">
          <h2 className='h pt-3 contact-content'>CONATCT SECTION</h2>
          <div className="lines d-flex justify-content-center  align-items-center py-3">

            <div className="line "></div>
            <i className="fa-solid fa-star mx-2"></i>
            <div className="line "></div>

          </div>



          <div className="container cont flex-column d-flex justify-content-center  align-items-center">

            <div className="w-50 mt-3 overflow-hidden ">
              <p className='position-relative p1'>userName :</p>
              <input placeholder="userName" className='t1  w-100 rounded-2 py-3' type="text" />
            </div>
            <div className="w-50 mt-3 overflow-hidden ">
              <p className='p2 position-relative  '>userAge :</p>
              <input placeholder="userAge" className='w-100 rounded-2 py-3 t2' type="text" />
            </div>

            <div className="w-50 mt-3 overflow-hidden">
              <p className='p3 position-relative '>userEmail :</p>
              <input placeholder="userEmail" className='w-100 rounded-2 py-3 t3' type="text" />
            </div>
            <div className="w-50 mt-3 overflow-hidden">
              <p className='p4 position-relative '>userPassword :</p>
              <input placeholder="userPassword" className='w-100 rounded-2 py-3 t4' type="text" />
            </div>

            <div className="w-50">
              <button className=" mt-4 text-white p-2 rounded-2 border-0" > send Message </button>

            </div>

          </div>



        </div>
      </div>
    )
  }
}
