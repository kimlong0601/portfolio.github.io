import React from 'react'

import project1 from '../../assets/images/project_1.png';
import project2 from '../../assets/images/project_2.PNG';
import project3 from '../../assets/images/project_3.PNG';
import project4 from '../../assets/images/project_4.jpg';

const Projects = () => {
  return (
    <div className="project">
        <div className="container">
          <div className="project_title">
            <span>Tôi đã làm được những gì?</span>
            <h1>Những dự án của tôi</h1>
          </div>
            <div className="project_box">
                <div className="box_content">
                    <div className="box_img">
                      <img src={project1} alt="project file image" />
                    </div>
                    <div className="box_details">
                      <h2>MERN Stack website thương mại diện tử (hoàn thành)</h2>
                    </div>
                    <div className="box_btn">
                      <div className="github"><a href="#">Github</a></div>
                      <div className="view"><a href="https://client-side-figureshop.herokuapp.com">View</a></div>
                    </div>
                </div>
                <div className="box_content">
                    <div className="box_img">
                      <img src={project3} alt="project file image" />
                    </div>
                    <div className="box_details">
                      <h2>Templates website Portfolio (hoàn thành)</h2>
                    </div>
                    <div className="box_btn">
                      <div className="github"><a href="https://github.com/kimlong0601/portfolio.github.io">Github</a></div>
                      <div className="view"><a href="https://kimlong0601.github.io/portfolio.github.io/">View</a></div>
                    </div>
                </div>
                <div className="box_content">
                    <div className="box_img">
                      <img src={project4} alt="project file image" />
                    </div>
                    <div className="box_details">
                      <h2>Template website trung tâm tiếng Anh (trong tiến trình)</h2>
                    </div>
                    <div className="box_btn">
                      <div className="github"><a href="#">Github</a></div>
                      <div className="view"><a href="#">View</a></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects