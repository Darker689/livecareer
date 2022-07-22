import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './producttext.css'

const ProductText = () => {
  return (
    <div className='producttext'>
        <div className="container">
            <div className='free_main_div'>
                <p className='product1_main_text_p1'>Custom cover letters</p>
                <p className='text_main_p product1_main_text_p2'>Forty-five percent of applicants make the mistake of skipping a
                <Link to='/' className='text_main_p_link'>cover letter.</Link> LiveCareer makes it quick and easy to create a cover letter that will set you apart from the competition.</p>
            </div>
        </div>
    </div>
  )
}

export default ProductText