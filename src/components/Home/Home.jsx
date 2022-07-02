import React from 'react';
import avatar from '../../assets/images/avatar_1.png';
import cv from '../../assets/images/CV_Trần Nguyễn Kim Long_ReactJS.pdf';

const Home = () => {
  return (
    <div className="hero_banner">
      <div className="container">
        <div className="banner">
          <div className="banner_info">
            <div className="banner_info_title">
              <h1>Xin chào! <br/>
              Tôi tên là <span>Trần Nguyễn Kim Long</span><br/>
              một <span>Fresher Front-end Developer</span>
              </h1>
            </div>
            <div className="banner_info_desc">
              <span>Là một fresher front-end trẻ đầy đam mê, nhiệt huyết, tinh thần trách nhiệm cao trong công việc
                và không ngừng phấn đấu để hoàn thiện bản thân mỗi ngày .Nếu các bạn có hứng thú, có thể xem qua CV của tôi ngay bên dưới nhé.
              </span>
            </div>
            <div className="banner_info_btn">
              <div className="btn_cv">
                <span>Tải CV: <br/></span>
                
                <a href={cv} download>Download CV</a>
              </div>
              <div className="btn_findme">
                <span>Tìm tôi ở: <br/></span>
                <a href='https://www.facebook.com/kimlong.trannguyen.585/'>
                  <i class='bx bxl-facebook'></i>
                </a>
                <a href='https://www.instagram.com/kimlong_0601/'>
                  <i class='bx bxl-instagram'></i>
                </a>
                
              </div>
            </div>
          </div>
          <div className="banner_image">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home