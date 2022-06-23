import React , {useRef, useEffect} from 'react'

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
            <li><a href="Home" class="navbar_links">Trang chủ</a></li>
            <li><a href="#" class="navbar_links">Về tôi</a></li>
            <li><a href="#" class="navbar_links">Kinh nghiệm</a></li>
            <li><a href="#" class="navbar_links">Dự án</a></li>
            <li><a href="#" class="navbar_links">Liên hệ</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header