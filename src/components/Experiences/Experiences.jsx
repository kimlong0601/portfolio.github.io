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
          <div className="frontend_box">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Khá</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Khá</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Trung bình</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Trung bình</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Trung bình</small>
                </div>
              </article>
            </div>
          </div>
          <div className="backend_box">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>Nodejs</h4>
                  <small className='text-light'>Trung bình</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>ASP .NET MVC</h4>
                  <small className='text-light'>Cơ bản</small>
                </div>
              </article>
              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Cơ bản</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Trung Bình</small>
                </div>
              </article>

              <article className='experience_details'>
                <i class='bx bxs-badge-check'></i> 
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Cơ bản</small>
                </div>
              </article>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences