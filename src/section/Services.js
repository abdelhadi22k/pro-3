import { Container, Image } from "react-bootstrap";


const Services = () => {
  return ( 
    <section className="services" id='Services'>
      <Container>
        <div className="Services">
          <div className="ServicesTitle">
            <div className="ServicesInfo">
              <h1 className="title">Service offer</h1>
              <p className="mainParagraph">
                <span>00/ </span> We will devote our efforts to improving your
                site experience. We are here to provide you with advanced design
                services and professional programming, with the aim of achieving
                maximum performance and improving your site.
              </p> 
            </div>
            <div className="Servicesimg">
              <Image
                alt="brandImg"
                loading="lazy"
                src="sources/img/Devices-bro (1) 2.png"
                fluid
              />
            </div>
          </div>

          <div className="mainServices">
            <div className="servicesBox">
              <div className="servicesBoxInfo">
                <h2>Web Development </h2>
                <h6>web application & website </h6>
              </div>
              <div className="servicesBoxIcon">
                <lord-icon
                  src="https://cdn.lordicon.com/rokunbup.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#f2e2d9"
                  style={{ width: "90px", height: "90px" }}>
                </lord-icon>
                <h6>details</h6>
              </div>
            </div>
            <div className="servicesBox">
              <div className="servicesBoxInfo">
                <h2>UIUX Design</h2>
                <h6>Web & Mobile </h6>
              </div>
              <div className="servicesBoxIcon">
                <lord-icon
                  src="https://cdn.lordicon.com/bvymuvni.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#f2e2d9"
                  style={{ width: "90px", height: "90px" }}
                >
                </lord-icon>

                <h6>details</h6>
              </div>
            </div>
            <div className="servicesBox">
              <div className="servicesBoxInfo">
                <h2>SEO</h2>
                <h6>For Website & web application</h6>
              </div>
              <div className="servicesBoxIcon">
                <lord-icon
                  src="https://cdn.lordicon.com/jtkfemwz.json"
                  trigger="morph"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#f2e2d9"
                  state="morph-check"
                  style={{ width: "90px", height: "90px" }}>
                </lord-icon>
                <h6>details</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Services;
