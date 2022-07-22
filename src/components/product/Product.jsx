import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './product.css'

const data = [
    {
        id: 1,
        name: 'Build your resume easily',
        img: 'https://www.livecareer.com/wp-content/uploads/2020/11/resume-builder.png'
    },
    {
        id: 2,
        name: 'Check your existing resume',
        img: 'https://www.livecareer.com/wp-content/uploads/2020/11/resume-check.png'
    },
    {
        id: 3,
        name: 'Use our professional resume writing services',
        img: 'https://www.livecareer.com/wp-content/uploads/2020/11/professional-writing.png'
    },
    {
        id: 4,
        name: 'Customizable Cover Letters',
        img: 'https://www.livecareer.com/wp-content/uploads/2020/11/customizable-cv.jpg'
    },
    {
        id: 5,
        name: 'Convenient mobile app',
        img: 'https://www.livecareer.com/wp-content/uploads/2020/11/mobile-apps.jpg'
    },
    {
        id: 6,
        name: 'Job Apply tool',
        img: 'https://www.livecareer.com/wp-content/uploads/2021/07/Job_apply_tool.png'
    }
]

const Product = () => {
  return (
    <div className='product'>
        <div className="container">
            <div className="product_main">
                {
                    data.map(item => (
                        <div className='product_main_product' key={item.id}>
                            <Link to='/' className='product_main_product_img'>
                                <img src={item.img} alt="" />
                            </Link>
                            <Link to='/' className='product_main_product_link'>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
        <hr className='hr1'/>
    </div>
  )
}

export default Product