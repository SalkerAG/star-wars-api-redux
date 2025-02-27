import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container mt-5">
        <legend className="text-center">Buscador Peliculas Star Wars</legend>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 justify-content-center mt-3 mb-3">
            <Link to={"/films"} className="btn btn-danger d-block ">
              Peliculas
            </Link>
          </div>
          <div className="col-sm-6 justify-content-center mt-3 mb-3">
            <Link to={"/characters"} className="btn btn-danger d-block">
              Personajes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
