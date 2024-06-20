import React from 'react'

function Description() {
  return (
    <div>
      <section className='description-section'>
      <div className='description-container'>
        <div className='description-intro-container'>
          <h2 className='description-intro-title'>Free, open, simple</h2>
          <p className='description-intro-text'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
</p>
        </div>
        <div className='description-power-container'>
          <h2 className='description-power-title'>Powerful tooling</h2>
          <p className='description-power-text'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
capable of producing even the most complicated sites.</p>
        </div>
       </div>
    </section>
    </div>
  )
}

export default Description
