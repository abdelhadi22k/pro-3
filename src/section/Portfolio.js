import { Container } from "react-bootstrap";
import { project } from "../data/project";
import { useState } from "react";
import NavPortfolyo from "../components/product/NavPortfolyo";
import Project from "../components/product/Project";

const ProjectsSection = () => {

  
  const allcategory = ["All", ...new Set(project.map((el) => el.category))];

  const [data, sitdata] = useState(project);

  const catgry = (cat) => {
    if (cat === `All`) {
      sitdata(project);
    } else {
      const newAerre = project.filter((elment) => elment.category === cat);
      sitdata(newAerre);
    }
  };
 
  return ( 
    <div className="projectSection" id="Portfolio">
      <Container className="project">
        <h1>Latest Projects</h1>

        <div className="projectContainer">
          <div className="projectNavbar">
            <NavPortfolyo
              showcatgry={catgry}
              allCat={allcategory}
            ></NavPortfolyo>
          </div>
          <div className="projectHolder">
            <Project project={data}></Project>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
