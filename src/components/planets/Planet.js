import React from "react";
import { Link } from "react-router-dom";

const Planet = (props) => {
  //   console.log(props.planet);
  const { planet } = props;
  console.log(planet);
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h4 className="display-4">{planet.name}</h4>
          <p className="lead">
            <strong>
              <i className="fas fa-people-arrows"></i> {planet.population}
            </strong>
            <br />
            <strong>
              <i className="fas fa-water"></i> {planet.terrain}
            </strong>
            <br />
            <strong>
              <i className="fas fa-cloud-sun-rain"></i> {planet.climate}
            </strong>
            <br />
            <strong>
              <i className="fas fa-grip-lines"></i> {planet.diameter}
            </strong>
            <br />
            {/* TODO */}
            {/* {planet.residents.map((item) => (
              <strong>
                <i className="fas fa-space-shuttle"></i> {item}
              </strong>
              //   <br />
            ))} */}
          </p>
          <Link to={`people`} className="btn btn-dark">
            <i className="chevron chevron-right"></i> View Residents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planet;
