import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="container">
       <div className="links">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="copyright">
        Created By Wasif
      </p>
    </div>
  </footer>
  )
}

export default Footer