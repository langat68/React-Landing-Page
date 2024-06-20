import React from 'react'

function Footer() {
  return (
    <div>
      <section className='footer'>
      <img className='footer-logo' src='/images/logo.svg' alt='Logo'></img>
      <div className='footer-column'>
        <h3 className='footer-column-title'>Product</h3>
        <p className='footer-column-element'>Overview</p>
        <p className='footer-column-element'>Pricing</p>
        <p className='footer-column-element'>Marketplace</p>
        <p className='footer-column-element'>Features</p>
        <p className='footer-column-element'>Integrations</p>
      </div>
      <div className='footer-column'>
        <h3 className='footer-column-title'>Company</h3>
        <p className='footer-column-element'>About</p>
        <p className='footer-column-element'>Team</p>
        <p className='footer-column-element'>Blog</p>
        <p className='footer-column-element'>Careers</p>
      </div>
      <div className='footer-column'>
        <h3 className='footer-column-title'>Connect</h3>
        <p className='footer-column-element'>Contact</p>
        <p className='footer-column-element'>Newsletter</p>
        <p className='footer-column-element'>LinkedIn</p>
      </div>
    </section>

    </div>
  )
}

export default Footer
