
import client1img from '../assets/img/clients/client-1.png'
import client2img from '../assets/img/clients/client-2.png'
import client3img from '../assets/img/clients/client-3.png'
import client4img from '../assets/img/clients/client-4.png'
import client5img from '../assets/img/clients/client-5.png'
import client6img from '../assets/img/clients/client-6.png'
export const ClientsSection = ()=>{
  return (
    <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client1img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client2img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client3img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client4img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client5img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={client6img}
                className="img-fluid"
                alt=""
              />
            </div>
            {/* <!-- End Client Item --> */}
          </div>
        </div>
      </section>
  )
}