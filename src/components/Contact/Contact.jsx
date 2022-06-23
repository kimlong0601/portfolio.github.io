import React, {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_56es043', 'template_77d0cnm', form.current, 'W9PbEU_EJLvyrpmW2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact">
        <div className="container">
            <div className="contact_title">
                <h1>Liên hệ ngay</h1>
            </div>
            <div className="contact_area">
                <div className="contact_box">
                    <div className="box">
                        <i class='bx bxl-gmail'></i>
                        <h3>Email của tôi</h3>
                        <span>kimlongt40@gmail.com</span>
                    </div>
                    <div className="box">
                        <i class='bx bxl-facebook-circle' ></i>
                        <h3>Facebook của tôi</h3>
                        <span>Trần Nguyễn Kim Long</span>
                    </div>
                    <div className="box">
                        <i class='bx bx-phone'></i>
                        <h3>SĐT của tôi</h3>
                        <span>0373380709</span>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Tên của bạn'/>
                    <input type="text" name='email' placeholder='Email của bạn'/>
                    <textarea rows="6" cols="50"  name='message' placeholder='Tin nhắn'></textarea>
                    <button type="submit" value="send">Gửi</button>
                </form>

                <div className="toast">
                    <div className="toast_content">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact