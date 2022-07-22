import React from 'react'
import { Link } from 'react-router-dom'
// Css
import './footer.css'
// Icon
// import {MdStarRate} from 'react-icons/md'
// img
// import img from '../../images/img.png'
import img1 from '../../images/img1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_main">
          <div className="footer_main_left">
            <div className="footer_main_left_div">
              <Link to='/' className='footer_main_left_div_link'>Resume</Link>
              <Link to='/' className='footer_main_left_div_link1'>Resume Builder</Link>
              <Link to='/' className='footer_main_left_div_link1'>Resume Examples</Link>
              <Link to='/' className='footer_main_left_div_link1'>Resume Templates</Link>
              <Link to='/' className='footer_main_left_div_link1'>Resume Formats</Link>
              <Link to='/' className='footer_main_left_div_link1'>Resume Objectives</Link>
              <Link to='/' className='footer_main_left_div_link1'>How to Write a Resume</Link>
            </div>
            <div className="footer_main_left_div">
              <Link to='/' className='footer_main_left_div_link'>Cover Letter</Link>
              <Link to='/' className='footer_main_left_div_link1'>Cover Letter Builder</Link>
              <Link to='/' className='footer_main_left_div_link1'>Cover Letter Examples</Link>
              <Link to='/' className='footer_main_left_div_link1'>Cover Letter Templates</Link>
              <Link to='/' className='footer_main_left_div_link1'>Cover Letter Formats</Link>
              <Link to='/' className='footer_main_left_div_link1'>How to Write a Cover Letter</Link>
            </div>
            <div className="footer_main_left_div">
              <Link to='/' className='footer_main_left_div_link'>About</Link>
              <Link to='/' className='footer_main_left_div_link1'>About Us</Link>
              <Link to='/' className='footer_main_left_div_link1'>Privacy Policy</Link>
              <Link to='/' className='footer_main_left_div_link1'>Terms of Use</Link>
              <Link to='/' className='footer_main_left_div_link1'>Sitemaps</Link>
            </div>
            <div className="footer_main_left_div">
              <Link to='/' className='footer_main_left_div_link'>Help & Support</Link>
              <Link to='/' className='footer_main_left_div_link1'>Work Here</Link>
              <Link to='/' className='footer_main_left_div_link1'>Contact Us</Link>
              <Link to='/' className='footer_main_left_div_link1'>FAQs</Link>
              <Link to='/' className='footer_main_left_div_link1'>Accessibility</Link>
            </div>
            <div className="footer_main_left_div footer_main_left_div1">
              <Link to='/' className='footer_main_left_div_link'>CV</Link>
              <Link to='/' className='footer_main_left_div_link1'>CV Examples</Link>
              <Link to='/' className='footer_main_left_div_link1'>CV Templates</Link>
              <Link to='/' className='footer_main_left_div_link1'>CV Formats</Link>
            </div>
            <div className="footer_main_left_div_links footer_main_left_div2">
              <p className='footer_main_left_div_link'>Languages</p>
              <div className='div_footer_main_left_div_links'>
                <div className='birinchi'>
                  <Link to='/' className='footer_main_left_div_link1'>En</Link>
                  <Link to='/' className='footer_main_left_div_link1'>UK</Link>
                  <Link to='/' className='footer_main_left_div_link1'>ES</Link>
                  <Link to='/' className='footer_main_left_div_link1'>FR</Link>
                  <Link to='/' className='footer_main_left_div_link1'>IT</Link>
                </div>
                <div className="ikkinchi birinchi">
                  <Link to='/' className='footer_main_left_div_link1'>DE</Link>
                  <Link to='/' className='footer_main_left_div_link1'>NL</Link>
                  <Link to='/' className='footer_main_left_div_link1'>PT</Link>
                  <Link to='/' className='footer_main_left_div_link1'>PL</Link>

                </div>
              </div>
            </div>
          </div>
          <div className="footer_main_right">
            <img src="https://www.livecareer.com/wp-content/themes/livecareer/images/site-jabber-2021.png" alt="" className='footer_main_right_img'/>
            <Link to='/'>
              <img src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer