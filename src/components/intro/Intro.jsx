import React from 'react'
import "./intro.css"
const intro = () => {
  return (
   <section className='banner' id='banner'>
    <div className="contain">
        <div className="banner-wrapper">
            <div className="banner-img">
                <img className="grayscale" src="/iconic.jpeg" alt="" />
            </div>
            <div className="banner-content">
                <h5>Hey, I'm </h5>
                <h3>Wasif Imtiaz</h3>
                <h2>Mern Stack Developer</h2>

                 <a className="btn" href='#projects'>About Me
                </a>
            </div>
        </div>
    </div>
   </section>
  );
}

export default intro