
import statsImg from "../assets/img/stats-img.svg"
import CountUp from 'react-countup';
export const StatsSection = ()=>{
    
      
    return(
        <section id="stats" className="stats section" >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-5">
              <img src={statsImg} alt="" className="img-fluid" />
            </div>

            <div className="col-lg-7">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-emoji-smile flex-shrink-0"></i>
                    <div>
                     <CountUp className="purecounter" enableScrollSpy={true} scrollSpyDelay={1} start={0} end={232} redraw={true} />
                      <p>
                        <strong>Clientes satisfechos</strong>
                        <span>consequuntur quae</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-journal-richtext flex-shrink-0"></i>
                    <div>
                    <CountUp className="purecounter" enableScrollSpy={true} scrollSpyDelay={1} start={0} end={521} redraw={true} />
                      <p>
                        <strong>Proyectos</strong>
                        <span>adipisci atque cum quia aut</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-headset flex-shrink-0"></i>
                    <div>
                      <CountUp className="purecounter" enableScrollSpy={true} scrollSpyDelay={1} start={0} end={1453} redraw={true} />
                      <p>
                        <strong>Hours Of Support</strong>
                        <span>aut commodi quaerat</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-people flex-shrink-0"></i>
                    <div>
                    <CountUp className="purecounter" enableScrollSpy={true} scrollSpyDelay={1} start={0} end={32} redraw={true} />
                      <p>
                        <strong>Hard Workers</strong>
                        <span>rerum asperiores dolor</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}
              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
}