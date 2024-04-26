import React from "react";
import { Container, Image } from "react-bootstrap";
import "animate.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <Container className="homeSection">
        <div className="homeimg">
          <Image
            alt="brandImg"
            loading="lazy"
            src="sources/svgIcon/main logo w 1.svg"
            fluid
          />
        </div>

        <div className="homeinfo">
          <h1 className="animate__animated animate__flash">
            Build your <span> website </span>with us: where design meets
            technology
          </h1>
          <p>
            We are here to improve your digital website with advanced design and
            programming, with a focus on SEO Call today to develop your website
            and achieve a strong digital presence
          </p>
          <div className="mainButtom">
            <span className="mainButton">
              <a href="#Connect"> Let's work</a>
            </span>
            <span className="mainButton1">
              Check me out <i class="fa-solid fa-arrow-right"></i>
            </span>
            <span className="mainButton2">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-dribbble"></i>
              <i class="fa-brands fa-behance"></i>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
