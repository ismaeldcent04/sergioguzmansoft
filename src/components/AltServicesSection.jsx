import service1 from "../assets/img/services-1.jpg"
import service2 from "../assets/img/services-2.jpg"
import service3 from "../assets/img/services-3.jpg"
import service4 from "../assets/img/services-4.jpg"
export const AltServicesSection = ()=>{
    return(
        <section id="alt-services" className="alt-services section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="img">
                  <img
                    src={service1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details">
                  <a href="service-details.html" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="img">
                  <img
                    src={service2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details">
                  <a href="service-details.html" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="img">
                  <img
                    src={service3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details">
                  <a href="service-details.html" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="img">
                  <img
                    src={service4}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="details">
                  <a href="service-details.html" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="service-details.html" className="stretched-link"></a>
                </div>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
    )
}