import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// Css
import './free.css'

const data = [
    {
        id: 1,
        img: 'https://www.livecareer.com/wp-content/uploads/2022/02/resume-example-icon.png',
        name: 'View hundreds of resume examples'
    },
    {
        id: 2,
        img: 'https://www.livecareer.com/wp-content/uploads/2022/02/professional-template-icon.png',
        name: 'View hundreds of resume examples'
    },
    {
        id: 3,
        img: 'https://www.livecareer.com/wp-content/uploads/2022/02/industry-report-icon.png',
        name: 'View hundreds of resume examples'
    },
    {
        id: 4,
        img: 'https://www.livecareer.com/wp-content/uploads/2022/02/how-to-write-icon.png',
        name: 'View hundreds of resume examples'
    },
    {
        id: 5,
        img: 'https://www.livecareer.com/wp-content/uploads/2022/02/career-resources-icon.png',
        name: 'View hundreds of resume examples'
    }
]

const Free = () => {
  return (
    <div className='free'>
        <div className="container">
            <div className="free_main">
                <div className='free_main_div'>
                    <p className='free_main_p'>Free Career Resources for all application levels</p>
                    <p className='text_main_p1'>LiveCareer offers a bevy of tools to help you land the job you want. In addition to our award-winning Resume Builder and Cover Letter Builder, we offer the following tools to help you figure out what job is right for you and how to get hired.</p>
                </div>
                <div className="free_main_div1">
                    {
                        data.map(item => (
                            <div className='free_main_div1_div' key={item.id}>
                                <div className="free_main_div1_div_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <Link to='/' className='free_main_div1_div_p'>{item.name}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Free
