// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './product1.css'
// Carusel
import React from "react";





const Product1 = () => {



  return (
    <div className='product1'>
        <div className="container">
            <div className="product1_main">
                <div className="product1_main_text free_main_div">
                    <p className='free_main_p product1_main_text_p'>More award-winning tools to get you hired</p>
                    <p className='product1_main_text_p1'>A library of  resume examples and career resources</p>
                    <p className='text_main_p product1_main_text_p2'>LiveCareer’s 
                    <Link to='/' className='text_main_p_link'>Resource Center</Link> 
                    helps job seekers at every stage of their careers. Our hundreds of articles contain in-depth resume help, job interview best practices, advice from industry experts, and more. Our tips make it even easier to create a resume in our builder.</p>
                    <p className='product1_main_text_p1'>Modifiable resume designs</p>
                    <p className='text_main_p product1_main_text_p2'>Our library of professionally designed templates are attractive, pre-formatted and ATS-friendly to take the headache out of resume writing.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product1;