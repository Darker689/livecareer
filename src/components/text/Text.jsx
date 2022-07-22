import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './text.css'

const Text = () => {
  return (
    <div className='text'>
        <div className="container">
            <div className="text_main">
                <p className='text_main_p'>The right resume is the key to advancing your career, but these days it takes more than a resume to get a great job. LiveCareer is here to get you hired, no matter your industry or level of experience. With resume help and other career resources crafted by certified resume writers, we offer everything you need to create application materials that will help you land the role you want.</p>
                <p className='text_main_p1'>
                    It takes more than a sleek resume to get the job thats right for you. Our extensive resources,How-to articles, and advice from real career experts will help you find the right career path and answer your lingering job questions. Our library of 
                    <Link to='/' className='text_main_p_link'>resume examples,</Link> 
                    our easy-to-use 
                    <Link to='/' className='text_main_p_link'>Resume Builder,</Link>
                    our step-by-step writing guides, and 
                    <Link to='/' className='text_main_p_link'>professional resume writing services </Link> 
                    will help you every step of the way in your career journey.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Text