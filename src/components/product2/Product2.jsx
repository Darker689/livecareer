// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './product2.css'
// Carusel
import React from "react";
import Slider from "react-slick";
// Icon
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'


const data1 = [
    {
        id: 1,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/district-manager-pacific-resume-template.svg',
        btn_name: 'USE THIS TEMLATE'
    },
    {
        id: 2,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/professional-sales-manager-resume-sample.svg',
        btn_name: 'USE THIS TEMLATE'
    },
    {
        id: 3,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/district-operations-manager-essence-resume-example.svg',
        btn_name: 'USE THIS TEMLATE'
    },
    {
        id: 4,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/operations-executive-refined-resume-template.svg',
        btn_name: 'USE THIS TEMLATE'
    },
    {
        id: 5,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/operations-manager-standout-resume-sample.svg',
        btn_name: 'USE THIS TEMLATE'
    },
    {
        id: 6,
        img1: 'https://www.livecareer.com/wp-content/uploads/2021/07/professional-operations-executive-resume-example.svg',
        btn_name: 'USE THIS TEMLATE'
    }
]

const Product2 = () => {


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
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

  return (
    <div className=" product1_main_carusel">
        <Slider {...settings} className='flex container1'>
            {
                data1.map(item => (
                    <div className='product1_main_carusel_div' key={item.id}>
                        <div className="product1_main_carusel_div_img">
                            <img src={item.img1} alt="" />
                        </div>
                        <Link to='/' className='btn product1_main_carusel_div_btn'>{item.btn_name}</Link>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default Product2;


const NextArrow = ({onClick}) => {
    return (
      <div className='next_me next_left'  onClick={onClick}>
        <IoIosArrowForward/>
      </div>
    )
  }
  
  
  const PrevArrow = ({onClick}) => {
    return (
      <div className='next_me prev_left' onClick={onClick}>
        <IoIosArrowBack/>
      </div>
    )
  }