import React from "react";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="skills" id='Skills'>
      <Container className="skillsContainer">
      <div className="skillsTitle">
      <h1 className="title">Our skills</h1> 
      <p className="mainParagraph"> 
        <span>00/ </span> We will devote our efforts to improving your
        site experience. We are here to provide you with advanced design
        services and professional programming, with the aim of achieving
        maximum performance and improving your site.
      </p>
      </div>
        <div className="skillHolder">
          <div className="skillTitle">
            {" "}
            <lord-icon 
              src="https://cdn.lordicon.com/bvymuvni.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span> UX Design</span>
          </div>
          <div className="skillTitle">
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/dqrpfjei.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>UI Design</span>
          </div>
          <div className="skillTitle">
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/tcqjuymo.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>Wireframe</span>
          </div>
          <div className="skillTitle">
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/nmguxqka.json"
              trigger="hover"
              state="hover-squeeze"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>Prototype</span>
          </div>
          <div className="skillTitle">
            <lord-icon
              src="https://cdn.lordicon.com/ffoywhrm.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>FullStack</span>
          </div>
          <div className="skillTitle">
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/kgwqxfas.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>Front-End</span>
          </div>
          <div className="skillTitle">
            <lord-icon
              src="https://cdn.lordicon.com/pgveulug.json"
              trigger="hover"
              colors="primary:#8cabff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>Back-End</span>
          </div>
          <div className="skillTitle">
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/jtkfemwz.json"
              trigger="morph"
              state="morph-check"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span>SEO</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
