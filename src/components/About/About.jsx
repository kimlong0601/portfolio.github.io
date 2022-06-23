import React from 'react';
import {Link} from 'react-scroll';

import avatar2 from '../../assets/images/me_1.jpg';

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="about_box">
                <div className="about_img">
                    <img src={avatar2} alt="about_me" />
                </div>
                <div className="about_details">
                    <div className="about_details_title">
                        <h1>Về tôi</h1>
                    </div>
                    <div className="about_details_desc">
                    <p>Xin chào! Tôi là Long, tên đầy đủ là Trần Nguyễn Kim Long, hiện tại đã được 21 tuổi. Hiện tại tôi đang là một
                        lập trình viên Fresher Frontend với đam mê, nhiệt huyết và tinh thần trách nhiệm cao trong công việc. Mục tiêu 
                        ngắn hạn của tôi là có thể trở thành một Frontend Developer chuyên nghiệp và mục tiêu dài hạn là trở thành một Fullstack
                        Developer chuyên nghiệp trong tương lai.
                    </p>

                        <p>Xin cảm ơn bạn đã dành thời gian quý báu của mình để đọc qua profile của tôi, hiện tại tôi đang tìm kiếm một công việc với vị trí 
                            Fresher Frontend (ReactJS). Nếu các bạn có hứng thú, hãy liên lạc với tôi ngay bên dưới nhé
                        </p>
                    </div>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} class="desc_btn">Liên hệ ngay</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About