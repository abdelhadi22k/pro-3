import React from "react";
import { Container, Image } from "react-bootstrap";

const Experience = () => {
  return (
    <section className="experience" id='Experiences'> 
      <Container className="experienceContainer">
        <div className="experienceImg">
          <div>
            <h1 className="title">Experience</h1>
            <p className="mainParagraph">
              <span>00/ </span> We will devote our efforts to improving your
              site experience. We are here to provide you with advanced design
              services and professional programming, with the aim of achieving
              maximum performance and improving your site.
            </p>
          </div>
          <div>
            <Image
              alt="brandImg"
              loading="lazy"
              src="sources/img/Work in progress-rafiki 1.png"
              fluid
            />
          </div>
        </div>
        <div className="experienceInfo">
        <div className="line"></div>
          <div className="experienceTitle">
            <h5>2021 - Present</h5>
            <div>
              <h2>Web Developer </h2>
              <h6>Freelancer </h6>
            </div>
          </div>
        <div className="line"></div>
          <div className="experienceTitle">
            <h5>2021 - Present</h5>
            <div>
              <h2>UIUX Design</h2>
              <h6>Freelancer </h6>
            </div>
          </div>
        <div className="line"></div>
          <div className="experienceTitle">
            <h5>2021 - Present</h5>
            <div>
              <h2>SEO</h2>
              <h6>Freelancer </h6>
            </div>
          </div>
        <div className="line"></div>
          <div className="experienceTitle">
            <h5>2021 - Present</h5>
            <div>
              <h2>+60 Completed project </h2>
              <h6>Freelancer </h6>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
