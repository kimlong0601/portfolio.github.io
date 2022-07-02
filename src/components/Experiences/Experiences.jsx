import React from 'react'

const Experiences = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="experience_title">
          <span>Tôi có những kỹ năng gì</span>
          <h1>Những kinh nghiệm của tôi</h1>
        </div>
        <div className="experience_box">
          <div className="box_1">
            <h2>HTML</h2>
            <i class='bx bxl-html5' ></i>
          </div>
          <div className="box_1">
            <h2>CSS</h2>
            <i class='bx bxl-css3'></i>
          </div>
          <div className="box_1">
            <h2>Javascript</h2>
            <i class='bx bxl-javascript' ></i>
          </div>
          <div className="box_1">
            <h2>ReactJS</h2>  
            <i class='bx bxl-react' ></i>
          </div>
          <div className="box_1">
            <h2>Figma</h2>
            <i class='bx bxl-figma' ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences