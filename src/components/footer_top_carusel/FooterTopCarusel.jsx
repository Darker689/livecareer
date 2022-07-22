// Css
import './footertopcarusel.css'
// react-router-dom
import { Link } from 'react-router-dom'
// img
import img from '../../images/img.png'
// icon
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {MdStarRate} from 'react-icons/md'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
// Carusel
import React from "react";
import Slider from "react-slick";

const data1 = [
    {
        id: 1,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    },
    {
        id: 2,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    },
    {
        id: 3,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    },
    {
        id: 4,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    },
    {
        id: 5,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    },
    {
        id: 6,
        icon: [
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>,
            <BsFillBookmarkStarFill/>
        ],
        name: 'Amazing Cover page...',
        name1: 'I definetily believe my cover page created...',
        name2: 'Lashanda G.',
        sana: 'August2'
    }
]

const FooterTopCarusel = () => {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    }

  return (
    <div className='footer_top_carusel'>
        <div className="container">
            <div className="footer_top_carusel_main">
                <p className='footer_top_carusel_main_p'>Our customers prove our resume builder is better!</p>
                <div className="footer_top_carusel_main_div">
                    <div className="footer_top_carusel_main_div_left">
                        <p className='footer_top_carusel_main_div_left_p'>Great</p>
                        <img src={img} alt="" className='footer_top_carusel_main_div_left_img'/>
                        <p className='footer_top_carusel_main_div_left_p1'>Based on <Link to='/' className='footer_top_carusel_main_div_left_p1_link'>1,396 reviews</Link></p>
                        <Link to='/' className='footer_top_carusel_main_div_left_p'>
                            <MdStarRate className='footer_top_carusel_main_div_left_p_icon'/>Trustpilot
                        </Link>
                    </div>
                    <div className="footer_top_carusel_main_div_right">
                        <Slider {...settings} className='flex1'>
                            {
                                data1.map(item => (
                                    <div className='product1_main_carusel_div1' key={item.id}>
                                        <div className='product1_main_carusel_div1_div'>
                                            <div className='product1_main_carusel_div1_left'>
                                                <p className='product1_main_carusel_div1_left_p'>
                                                    {
                                                        item.icon.map((star, index)=>(
                                                            <span key={index}>{star}</span>
                                                        ))
                                                    }
                                                    </p>  
                                                <p className='product1_main_carusel_div1_left_p1'>{item.name}</p>
                                                <p className='product1_main_carusel_div1_left_p2'>{item.name1}</p>
                                                <p className='product1_main_carusel_div1_left_p3'>{item.name2}</p>
                                            </div>
                                            <div className="product1_main_carusel_div1_right">
                                                <p>{item.sana}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterTopCarusel;


const NextArrow = ({onClick}) => {
    return (
      <div className='next_me1 next_left'  onClick={onClick}>
        <IoIosArrowForward/>
      </div>
    )
  }
  
  
  const PrevArrow = ({onClick}) => {
    return (
      <div className='next_me1 prev_left' onClick={onClick}>
        <IoIosArrowBack/>
      </div>
    )
  }