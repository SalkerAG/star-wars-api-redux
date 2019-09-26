import React, { useEffect } from "react";
import CarouselFilm from "../../components/Carousel/CarouselFilm";
import { Link } from "react-router-dom";
import Spin from "../../components/Layout/Spin";

const Films = props => {
  const { getFilms, films, cleanForm, loadingFilms } = props;

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <>
      {loadingFilms ? (
        <Spin />
      ) : (
        <div className="container mt-5">
          <CarouselFilm films={films} />
          <Link
            to={"/"}
            className="btn-crawl btn btn-primary mt-5 mb-3"
            onClick={() => cleanForm()}
          >
            Volver al buscador
          </Link>
        </div>
      )}
    </>
  );
};

export default Films;
