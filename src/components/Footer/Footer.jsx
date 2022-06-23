import React from 'react';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_me">
            <h1>Trần Nguyễn Kim Long</h1>
            <p>Fresher Frontend Developer</p>
          </div>
          <ul className="footer_menu">
            <li><Link to="hero_banner" spy={true} smooth={true} offset={50} duration={500}><i class='bx bxs-chevrons-right'></i>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}><i class='bx bxs-chevrons-right'></i>Về tôi</Link></li>
            <li><Link to="experience" spy={true} smooth={true} offset={50} duration={500}><i class='bx bxs-chevrons-right'></i>Kinh nghiệm</Link></li>
            <li><Link to="project" spy={true} smooth={true} offset={50} duration={500}><i class='bx bxs-chevrons-right'></i>Dự án</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}><i class='bx bxs-chevrons-right'></i>Liên hệ</Link></li>
          </ul>
          <ul className="footer_social">
            <li><a href="https://www.facebook.com/kimlong.trannguyen.585"><i class='bx bxl-facebook'></i>Facebook</a></li>
            <li><a href="https://www.instagram.com/kimlong_0601/"><i class='bx bxl-instagram'></i>Instagram</a></li>
            <li><a href="#"><i class='bx bxl-twitter' ></i>Twitter</a></li>
          </ul>
        </div>
        <div className="footer_coppyright">
            <p>Design by Tran Nguyen Kim Long</p>
          </div>
      </div>
    </div>
  )
}

export default Footer