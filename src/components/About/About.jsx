import React from 'react'

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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <a href='#'>Liên hệ ngay</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About