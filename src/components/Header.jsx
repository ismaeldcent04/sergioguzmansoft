

import logoimg from "../assets/img/logo.png"
export const Header = ()=>{
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
 
    return(
        <header id="header" className="header d-flex align-items-center sticky-top">
        <div
          className="container-fluid container-xl position-relative d-flex align-items-center"
        >
          <a href="../index.html" className="logo d-flex align-items-center me-auto">
            {/* <!-- Uncomment the line below if you also wish to use an image logo -->
            <!-- <img src="assets/img/logo.png" alt=""> --> */}
  
            <img className="logo" src={logoimg} />
          </a>
  
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">Inicio<br /></a>
              </li>
              <li><a href="#about">Sobre Nosotros</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Portafolio</a></li>
              <li><a href="#team">Equipo</a></li>
              <li className="dropdown">
                <a href="#"
                  ><span>Dropdown</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"
                      ><span>Deep Dropdown</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i
                    ></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={mobileNavToogle}></i>
          </nav>
  
          <a className="btn-getstarted" href="index.html#about">Empezar</a>
        </div>
      </header>
    )
}