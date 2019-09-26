import React from "react";

import { flatten, last, map, match, pipe, split } from "ramda";

import { Link } from "react-router-dom";

const Film = ({ info }) => {
  const { title, director, producer, release_date, episode_id, url } = info;

  return (
    <>
      <h2 className="h2-form text-center mt-2">
        ¡Se ha encontrado una película!
      </h2>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ color: "black" }}>
            {title}
          </h4>
          <div className="card-text" style={{ color: "black" }}>
            <p>Episodio: {episode_id}.</p>
            <p>Director: {director}</p>
            <p>Producida: {producer}</p>
            <p>Lanzamiento: {release_date}</p>
            <Link
              to={`/film/detail/${getIdFromFilmUrl(url)}`}
              className="btn btn-primary"
            >
              ¡Más información!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const getIdFromFilmUrl = pipe(
  match(/films\/[0-9]*/gi),
  map(split("/")),
  flatten,
  last
);

export default Film;
