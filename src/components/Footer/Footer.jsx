import React from 'react'

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
            <li><a href="#"><i class='bx bxs-chevrons-right'></i>Home</a></li>
            <li><a href="#"><i class='bx bxs-chevrons-right'></i>Về tôi</a></li>
            <li><a href="#"><i class='bx bxs-chevrons-right'></i>Kinh nghiệm</a></li>
            <li><a href="#"><i class='bx bxs-chevrons-right'></i>Dự án</a></li>
            <li><a href="#"><i class='bx bxs-chevrons-right'></i>Liên hệ</a></li>
          </ul>
          <ul className="footer_social">
            <li><a href="#"><i class='bx bxl-facebook'></i>Facebook</a></li>
            <li><a href="#"><i class='bx bxl-instagram'></i>Instagram</a></li>
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