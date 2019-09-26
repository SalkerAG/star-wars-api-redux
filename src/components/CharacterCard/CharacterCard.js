import React from "react";

import { Link } from "react-router-dom";
import { flatten, last, map, match, pipe, split } from "ramda";

const CarouselCardCharacter = ({ character }) => {

    const getIdFromFilmUrl = pipe(
        match(/people\/[0-9]*/gi),
        map(split("/")),
        flatten,
        last
      );

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{character.name}</h4>
          <div className="card-text">
            <p>Género: {character.gender}</p>
            <p>Peso: {character.mass} kgs.</p>
            <p>Altura: {character.height} cms.</p>
            <p>Fecha de nacimiento: {character.birth_year}</p>
          </div>
          <Link
            to={`/character/detail/${getIdFromFilmUrl(character.url)}`}
            className="btn btn-primary"
          >
            ¡Más información!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCardCharacter;
