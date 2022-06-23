import React , {useRef, useEffect} from 'react';
import { Link } from 'react-scroll';

const Header = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('shrink')
      }
      else{
        headerRef.current.classList.remove('shrink')
      }
    })
    return () => {
      window.removeEventListener("scroll")
    };
  }, []);

  const menuClose = useRef(null)
  const menuToggle = () => menuClose.current.classList.toggle('active')

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="navbar">
          <div className="navbar_logo">
            <h1>My Portfolio</h1>
          </div>
          <div className="menu_toggle" onClick={menuToggle}>
            <i class='bx bx-menu'></i>
          </div>
          <ul className="navbar_menu" ref={menuClose}>
            <div className="navbar_menu_close" onClick={menuToggle}>
              <i class='bx bx-x' ></i>
            </div>
            <li>
              <Link to="hero_banner" spy={true} smooth={true} offset={50} duration={500} class="navbar_links">Trang chủ</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} class="navbar_links">Về tôi</Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true} offset={50} duration={500} class="navbar_links">Kinh nghiệm</Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true} offset={50} duration={500} class="navbar_links">Dự án</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} class="navbar_links">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header