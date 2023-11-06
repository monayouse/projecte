import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import $ from 'jquery'
import './css/style.css'

export default class Navbar extends Component {



    h = () => {
        $('.nav-ancors').addClass('p-4')
        

        $('.nav1').click(function () {
            // this.classList.add('bg-danger', 'rounded-5');
            // #1ABC9C
            $(this).css('backgroundColor', '#1ABC9C');
            this.classList.add('rounded-4')
            $('.nav2').css('backgroundColor','transparent')
            $('.nav3').css('backgroundColor','transparent')
        })
        $('.nav2').click(function () {
            // #1ABC9C
            $(this).css('backgroundColor', '#1ABC9C');
            this.classList.add('rounded-4')
            $('.nav3').css('backgroundColor','transparent')
            $('.nav1').css('backgroundColor','transparent')

          
        })
        $('.nav3').click(function () {
            // #1ABC9C
            $(this).css('backgroundColor', '#1ABC9C');
            this.classList.add('rounded-4')
            $('.nav2').css('backgroundColor','transparent')
            $('.nav1').css('backgroundColor','transparent')

       
        })
       
     

    }



    componentDidMount() {
        this.h();
        $(window).scroll(function () {
            // const topSpaceFromSection  = $('#about').offset().top;
            const navbarheight = $('.nav-ancors').outerHeight();
            if ($(window).scrollTop() > navbarheight / 2) {

                $('.nav-ancors').removeClass('p-4')

                // $('.nav-ancors').animate({ padding: '0px' }, 100)
                // console.log('ok');
                // $('.nav-ancors').css('backgroundColor','black')


            }
            else {
                // $('.nav-ancors').animate({ padding: '20px' }, 100)
                $('.nav-ancors').addClass('p-4')

                // console.log('no');

            }
        })


    }




    render() {
        return (
            <div>


                {/* position-fixed */}

                <nav className="navbar navbar-expand-lg  nav-ancors  position-fixed top-0  w-100 ">
                    <div className="container">
                        <Link className="navbar-brand title" to="home">START FRAMEWORK</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  " id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                
                                <li className="nav-item">
                                    <Link className="nav-link  nav2 nav-ancors ms-2 " to="about">about</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  nav1 active   nav-ancors ms-2 " aria-current="page" to="portfolio">portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  nav3 nav-ancors ms-2 " to="contact">contact</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>



            </div>
        )
    }
}
