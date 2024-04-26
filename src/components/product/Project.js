import React, { useState } from "react";
import { Image } from "react-bootstrap";

const itemsPerPage = 4;

const Project = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="ProjectContainer">
        {currentItems.length !== 0 ? (
          currentItems.map((elment) => {
            return (
              <div key={elment.id} className="mb-2">
                <div className="projectBox">
                  <h6>{elment.title}</h6>
                  <Image
                    className="projectImg"
                    src={elment.imgUrl}
                    alt={elment.title}
                    fluid
                  />
                </div>
                <div className="line lineProject"></div>
              </div>
            );
          })
        ) : (
          <h3>No Project</h3>
        )}
      </div>
      <div className="totalPages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="PagesButton"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Project;
