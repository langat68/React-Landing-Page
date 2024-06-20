import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
 
 <section className='header-section'>
      <div className='header-content'>
        <Navbar />
        <div className='header-description'>
          <h1 className='header-title'>A modern publishing platform</h1>
          <p className='header-text'>Grow your audience and build your online brand</p>
          <div className='main-btns'>
            <div className='start-btn'>Start for Free</div>
            <div className='learn-more-btn'>Learn More</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Header
