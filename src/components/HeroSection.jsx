import heroImg from "../assets/img/hero-img.png"
export const HeroSection = ()=>{
    return(
      <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
          >
            <h1>Crece tu negocio con SGS</h1>
            <p>
              Nos dedicamos a la creación de aplicaciones y soluciones
              tecnológicas que te simplifiquen tus operaciones.
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Empezar</a>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center"
              ></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={heroImg}
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    
    )
}