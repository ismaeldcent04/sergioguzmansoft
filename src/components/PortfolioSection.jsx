import appImg1 from "../assets/img/portfolio/app-1.jpg"
import productImg1 from "../assets/img/portfolio/product-1.jpg"
import brandingImg1 from "../assets/img/portfolio/branding-1.jpg"
import bookImg1 from "../assets/img/portfolio/books-1.jpg"
import appImg2 from "../assets/img/portfolio/app-2.jpg"
import productImg2 from "../assets/img/portfolio/product-2.jpg"
import brandingImg2 from "../assets/img/portfolio/branding-2.jpg"
import bookImg2 from "../assets/img/portfolio/books-2.jpg"
import appImg3 from "../assets/img/portfolio/app-3.jpg"
import productImg3 from "../assets/img/portfolio/product-3.jpg"
import brandingImg3 from "../assets/img/portfolio/branding-3.jpg"
import bookImg3 from "../assets/img/portfolio/books-3.jpg"
export const PortfolioSection = ()=>{
    return(
        <section id="portfolio" className="portfolio section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portafolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Product</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-books">Books</li>
            </ul>
            {/* <!-- End Portfolio Filters --> */}

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={appImg1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={appImg1}
                      title="App 1"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={productImg1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={productImg1}
                      title="Product 1"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={brandingImg1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={brandingImg1}
                      title="Branding 1"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={bookImg1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={bookImg1}
                      title="Branding 1"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={appImg2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={appImg2}
                      title="App 2"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={productImg2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={productImg2}
                      title="Product 2"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={brandingImg2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={brandingImg2}
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={bookImg2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={bookImg2}
                      title="Branding 2"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={appImg3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={appImg3}
                      title="App 3"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={productImg3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={productImg3}
                      title="Product 3"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={brandingImg3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={brandingImg3}
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}

              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={bookImg3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Books 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={bookImg3}
                      title="Branding 3"
                      data-gallery="portfolio-gallery-book"
                      className="glightbox preview-link"
                      ><i className="bi bi-zoom-in"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                      ><i className="bi bi-link-45deg"></i
                    ></a>
                  </div>
                </div>
              </div>
              {/* <!-- End Portfolio Item --> */}
            </div>
            {/* <!-- End Portfolio Container --> */}
          </div>
        </div>
      </section>
    )
}