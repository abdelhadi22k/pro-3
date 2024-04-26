import React from "react";
import { Col, Row } from "react-bootstrap";

const NavPortfolyo = ({ showcatgry, allCat }) => {
  const onfeand = (cato, buttonId) => {
    showcatgry(cato);
  };

  return (
    <div>
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          {allCat.length !== 0 ? (
            allCat.map((elm) => {
              return (
                <div className="showcatgrys">
                  <button onClick={() => onfeand(elm)} className="btnx">
                    {elm}
                  </button>
                </div>
              );
            })
          ) : (
            <h2>No Project</h2>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NavPortfolyo;
