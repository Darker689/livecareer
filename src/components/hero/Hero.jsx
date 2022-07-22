import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './hero.css'

const Hero = () => {
  return (
    <div className='home_hero'>
      <div className="container">
        <div className="home_hero_main">
          <div className="home_hero_main_left">
            <p className='home_hero_main_left_p'>Get hired faster <br className='br'/> <span className='home_hero_main_left_p1'>with our resume builder!</span></p>
            <Link to='/' className='btn home_hero_main_left_btn'>Build A Resume</Link>
          </div>
          <div className="home_hero_main_right">
            <Link to='/' className="home_hero_main_right_img">
              <img src="https://www.livecareer.com/wp-content/uploads/2022/02/Administrative_Assistant_Acclaimed_Chronological.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Hero