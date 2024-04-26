import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
const Footer = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  return (
    <div className="Connect" id="Connect">
      <Container className="subscriptionContainer">
        <div className="subscription">
          <h4>Let's see the details of your project</h4>
          <div className="subscriptionInput">
            <form>
              <input
                type="email"
                playsHolder="Enter Email"
                className="SubscriptionInputForm"
              />
              <button type="submit">Subscription</button>
            </form>
          </div>
        </div>
      </Container>

      <div className="footer pt-5 pb-5 text-white-50 text-start text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info">
                <h2>Acos</h2>
                <p className="mb-5">
                  Design and development of websites and web applications and
                  support them with SEO
                </p>
                <div className="copryt">
                  Created By <span>Acos</span>
                  <div className="">
                    2022 - <span>Abdelhadi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <a href="#Services">Servces</a>
                  </li>
                  <li>
                    <a href="#Skills">Skills</a>
                  </li>
                  <li>
                    <a href="#Experiences">Experiences</a>
                  </li>
                  <li>
                    <a href="#Portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#Testimonials">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="link">
                <h5 className="text-light">Important </h5>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <>
                      <Alert show={show1} variant="success" className="Alert">
                        <div className="alertHeder">
                          <h1>About Us</h1>

                          <div className="AlertClos">
                            <span
                              onClick={() => setShow1(false)}
                              variant="outline-success"
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                          </div>
                        </div>

                        <div className="alertInfo">
                          <div className="alertImg">
                            <Image
                              alt="brandImg"
                              loading="lazy"
                              src="sources/svgIcon/fuul logo b .svg"
                              fluid
                            />
                          </div>
                          <div className="alertTitle aboutUs">
                            <p>
                              I'm Abdelhadi from acos, a web developer and UI/UX
                              designer, with two years experience in web
                              development, UIUX design. I worked on Developing
                              my business to an excellent level, and improving
                              the level of my services.
                            </p>
                          </div>
                        </div>
                      </Alert>

                      {!show1 && (
                        <span onClick={() => setShow1(true)}>About Us</span>
                      )}
                    </>
                  </li>
                  <li>
                    <>
                      <Alert show={show2} variant="success" className="Alert">
                        <div className="alertHeder">
                          <h1>Meetings</h1>

                          <div className="AlertClos">
                            <span
                              onClick={() => setShow2(false)}
                              variant="outline-success"
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                          </div>
                        </div>

                        <div className="alertInfo Meetings">
                          <ul>
                            <li>
                              <span>1 determining the goal</span>
                            </li>
                            <li>
                              <span>2 Identify participants</span>
                            </li>
                            <li>
                              <span>3 Choose a suitable time</span>
                            </li>
                            <li>
                              <span>
                                4 Use appropriate means of communication
                              </span>
                            </li>
                            <li>
                              <span>5 Submit the agenda</span>
                            </li>
                          </ul>
                        </div>
                      </Alert>

                      {!show2 && (
                        <span onClick={() => setShow2(true)}>Meetings</span>
                      )}
                    </>
                  </li>

                  <li>
                    <>
                      <Alert show={show4} variant="success" className="Alert">
                        <div className="alertHeder">
                          <h1>Work time</h1>

                          <div className="AlertClos">
                            <span
                              onClick={() => setShow4(false)}
                              variant="outline-success"
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                          </div>
                        </div>
                        <div className="alertInfo WorkTime">
                          <p>
                            every day
                            <br />
                            + 1 GMT/Coordinated Universal Time (UTC+01:00)
                            <br />
                            <span>From 8 am to 10 pm</span>
                          </p>
                        </div>
                      </Alert>

                      {!show4 && (
                        <span onClick={() => setShow4(true)}>Work time </span>
                      )}
                    </>
                  </li>
                  <li>
                    <>
                      <Alert show={show5} variant="success" className="Alert">
                        <div className="alertHeder">
                          <h1>stages of work</h1>

                          <div className="AlertClos">
                            <span
                              onClick={() => setShow5(false)}
                              variant="outline-success"
                            >
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                          </div>
                        </div>

                        <div className="stage">
                          <div className="stageBox">
                            <Image
                              alt="Meetings"
                              loading="lazy"
                              src="sources/img/Meetings.png"
                              fluid
                            />
                            <h5>Meetings</h5>
                          </div>
                          <div className="stageBox">
                            <Image
                              alt="requirements"
                              loading="lazy"
                              src="sources/img/requirements.png"
                              fluid
                            />
                            <h5>Study project requirements</h5>
                          </div>
                          <div className="stageBox">
                            <Image
                              alt="Implementation"
                              loading="lazy"
                              src="sources/img/Implementation.png"
                              fluid
                            />
                            <h5>Implementation project</h5>
                          </div>
                        </div>
                      </Alert>

                      {!show5 && (
                        <span onClick={() => setShow5(true)}>
                          stages of work{" "}
                        </span>
                      )}
                    </>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="contect">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">
                  Contact us to create your own website or web application, our
                  email and official accounts
                </p>
                <div>
                  <a
                    className="main-btn btn btn-primary rounded-pill w-100"
                    href="#"
                  >
                    abdelhadikaba64@gmail.com
                  </a>
                  <ul className="d-flex mt-5 list-unstyled gap-3 align-items-center">
                    <li>
                      <a
                        target="_blank"
                        className="d-block text-light"
                        href="https://www.facebook.com/profile.php?id=100091746498169&locale=ar_AR"
                      >
                        <i className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="d-block text-light"
                        href="https://www.instagram.com/stories/a.cos._/3298153712037571194/?hl=ar"
                      >
                        <i className="fa-brands fa-instagram fa-lg instagram rounded-circle p-2"></i>
                      </a>
                    </li>

                    <li>
                      <span className="d-block text-light" href="#">
                        <i className="fa-brands fa-whatsapp fa-lg whatsapp rounded-circle p-2"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
