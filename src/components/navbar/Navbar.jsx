import React, { useState } from 'react'
// Css
import './navbar.css'
// react-router-dom
import { Link } from 'react-router-dom'
// Icon
import {AiFillAudio} from 'react-icons/ai'
import {IoSearch, IoClose} from 'react-icons/io5'
import {MdOutlineLogin, MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md'
import {IoIosChatbubbles} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const handleMenu = () => setMenu(!menu)

  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar_main">
          <i className='navbar_main_menu' onClick={handleMenu}>
            <GiHamburgerMenu />
          </i>
          <Link to='/' className="navbar_main_img">
            <img src="https://www.livecareer.com/wp-content/themes/livecareer/images/logo.svg" alt="" />
          </Link>
          <div className={menu ? "navbar_main_links nav_active" : "navbar_main_links"}>
            <Link to='/' className="navbar_main_img padding_top">
              <img src="https://www.livecareer.com/wp-content/themes/livecareer/images/logo.svg" alt="" />
            </Link>
            <i className='navbar_main_menu close' onClick={handleMenu}>
              <IoClose/>
            </i>
            <div className="navbar_main_links_div">
              <Link to='/' className='navbar_main_link'>RESUMES <MdKeyboardArrowDown className='navbar_main_link_icon'/></Link>
              <div className="navbar_main_links_div1">
                <p className='navbar_main_links_div1_p'>Resume Builder</p>
                <div className='navbar_main_links_div1_div'>
                  <p className='navbar_main_links_div1_p'>Resume Example <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                  <div className='navbar_main_links_div1_div1'>
                    <p className='navbar_main_links_div1_p'>Nursing</p>
                    <p className='navbar_main_links_div1_p'>Costumer Service</p>
                    <p className='navbar_main_links_div1_p'>Education</p>
                    <p className='navbar_main_links_div1_p'>Sales</p>
                    <p className='navbar_main_links_div1_p'>Manager</p>
                    <p className='navbar_main_links_div1_p'>View All</p>
                  </div>
                </div>
                <p className='navbar_main_links_div1_p'>Resume Search</p>
                <div className='navbar_main_links_div1_div'>
                  <p className='navbar_main_links_div1_p'>Resume Templates <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                  <div className='navbar_main_links_div1_div2'>
                    <p className='navbar_main_links_div1_p'>Microsoft Word</p>
                    <p className='navbar_main_links_div1_p'>Professional</p>
                    <p className='navbar_main_links_div1_p'>Modern</p>
                    <p className='navbar_main_links_div1_p'>Traditional</p>
                    <p className='navbar_main_links_div1_p'>Creativ</p>
                    <p className='navbar_main_links_div1_p'>View All</p>
                  </div>
                </div>
                <p className='navbar_main_links_div1_p'>Resume Services </p>
                <div className='navbar_main_links_div1_div'>
                  <p className='navbar_main_links_div1_p'>Resume Formats <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                  <div className='navbar_main_links_div1_div3'>
                    <p className='navbar_main_links_div1_p'>Chronological</p>
                    <p className='navbar_main_links_div1_p'>Functional</p>
                    <p className='navbar_main_links_div1_p'>Combination</p>
                  </div>
                </div>
                <p className='navbar_main_links_div1_p'>Resume Review</p>
                <div className='navbar_main_links_div1_div'>
                  <p className='navbar_main_links_div1_p'>How To Write A Resume <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                  <div className='navbar_main_links_div1_div4'>
                    <p className='navbar_main_links_div1_p'>Summaary</p>
                    <p className='navbar_main_links_div1_p'>Experiense</p>
                    <p className='navbar_main_links_div1_p'>Education</p>
                    <div className='navbar_main_links_div1_div_div'>
                      <p className='navbar_main_links_div1_p'>Skills <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                      <div className="navbar_main_links_div1_div_div1">
                        <p className='navbar_main_links_div1_p'>Hard Skills</p>
                        <p className='navbar_main_links_div1_p'>Soft Skills</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='navbar_main_links_div1_p'>Resume Objectives</p>
              </div>
            </div>
            <div className="navbar_main_links_div">
              <Link to='/' className='navbar_main_link'>CV <MdKeyboardArrowDown className='navbar_main_link_icon'/></Link>
              <div className="navbar_main_links_div1">
                <p className='navbar_main_links_div1_p'>CV Examples</p>
                <p className='navbar_main_links_div1_p'>CV Formats</p>
                <p className='navbar_main_links_div1_p'>CV Templates</p>
                <p className='navbar_main_links_div1_p'>How to Write a CV</p>
              </div>
            </div>
            <div className="navbar_main_links_div">
              <Link to='/' className='navbar_main_link'>COVER LETTERS <MdKeyboardArrowDown className='navbar_main_link_icon'/></Link>
              <div className="navbar_main_links_div1">
                <p className='navbar_main_links_div1_p'>Cover Letter Builder</p>
                <div className='navbar_main_links_div1_div'>
                  <p className='navbar_main_links_div1_p'>Cover Letter Examples <MdKeyboardArrowRight className='navbar_main_links_div1_p_icon'/></p>
                  <div className='navbar_main_links_div1_div1'>
                    <p className='navbar_main_links_div1_p'>Customer Service</p>
                    <p className='navbar_main_links_div1_p'>Marketing</p>
                    <p className='navbar_main_links_div1_p'>Sales</p>
                    <p className='navbar_main_links_div1_p'>Education</p>
                    <p className='navbar_main_links_div1_p'>Accounting</p>
                    <p className='navbar_main_links_div1_p'>View All</p>
                  </div>
                </div>
                <p className='navbar_main_links_div1_p'>Cover Letter Services</p>
                <p className='navbar_main_links_div1_p'>Cover Letter Templates</p>
                <p className='navbar_main_links_div1_p'>Cover Letter Formats</p>
                <p className='navbar_main_links_div1_p'>How to Write a Cover Letter</p>
              </div>
            </div>
            <Link to='/' className='navbar_main_link'>QUESTIONS</Link>
            <Link to='/' className='navbar_main_link'>RESOURCES</Link>
            <div className="navbar_main_links_div">
              <Link to='/' className='navbar_main_link'>ABOUT <MdKeyboardArrowDown className='navbar_main_link_icon'/></Link>
              <div className="navbar_main_links_div1">
                <p className='navbar_main_links_div1_p'>Reviews</p>
              </div>
            </div>
            <hr className='hr'/>
            <div className="hr">
              <div className="navbar_main_links_contact">
                <Link to='/' className='navbar_main_links_contact_link'>
                  <IoIosChatbubbles className='navbar_main_links_contact_link_icon'/>
                  Contact
                </Link>
              </div>
              <div className='navbar_main_links_contact'>
                <MdOutlineLogin className='navbar_main_links_contact_link_icon'/>
                Sign In
              </div>
            </div>
          </div>
          <div className="navbar_main_input">
            <input type="text" />
            <i className='navbar_main_input_i'>
              <AiFillAudio/>
            </i>
            <i className='navbar_main_input_i'>
              <IoSearch/>
            </i>
          </div>
          <IoSearch className='navbar_main_input_i1'/>
          <div className="navbar_main_sign">
            <Link to='/' className='navbar_main_sign_link'>
              <IoIosChatbubbles/>
            </Link>
            <div className='navbar_main_sign_div'>
              <MdOutlineLogin className='navbar_main_sign_div_i'/>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar