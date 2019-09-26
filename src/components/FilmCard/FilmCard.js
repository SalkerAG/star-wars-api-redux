import React from "react";
import { Link } from "react-router-dom";
import { flatten, last, map, match, pipe, split } from "ramda";

const FilmCard = ({ film }) => {

  const getIdFromFilmUrl = pipe(
    match(/films\/[0-9]*/gi),
    map(split("/")),
    flatten,
    last
  );

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{film.title}</h4>
            <div className="card-text">
              <p>Episodio: {film.episode_id}.</p>
              <p>Director: {film.director}</p>
              <p>Productor/es: {film.producer}</p>
              <p>Fecha de estreno: {film.release_date}</p>
              <Link
            to={`/film/detail/${getIdFromFilmUrl(film.url)}`}
            className="btn btn-primary"
          >
            ¡Más información!
          </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
