
export const ServicesSection = ()=>{
    return (
        <section id="services" className="services section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Servicios</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <i className="bi bi-activity"></i>
                <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item position-relative">
                <i className="bi bi-bounding-box-circles"></i>
                <h4><a href="" className="stretched-link">Sed ut perspici</a></h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item position-relative">
                <i className="bi bi-calendar4-week"></i>
                <h4><a href="" className="stretched-link">Magni Dolores</a></h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item position-relative">
                <i className="bi bi-broadcast"></i>
                <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
    )
}