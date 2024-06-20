import React from 'react'

function Design() {
  return (
    <div>
      <section className='design-section'>
      <h1 className='design-title'>Designed for the future</h1>
      <div className='design-container'>
        <div className='design-intro-container'>
          <h2 className='design-intro-title'>Introducing an extensible editor</h2>
          <p className='design-intro-text'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
change the looks of a blog.</p>
        </div>
        <div className='design-content-container'>
          <h2 className='design-content-title'>Robust content management</h2>
          <p className='design-content-text'>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
        </div>
       </div>
    </section>
    </div>
  )
}

export default Design
