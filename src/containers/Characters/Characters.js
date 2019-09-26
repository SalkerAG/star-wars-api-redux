import React, { useEffect } from "react";
import CarouselCharacters from "../../components/Carousel/CarouselCharacters";
import { Link } from "react-router-dom";

const Characters = props => {
  const { getCharacters, loadingCharacters, characters } = props;

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <>
      <div className="container mt-5">
        <CarouselCharacters
          characters={characters}
          loadingCharacters={loadingCharacters}
        />
        <Link to={"/"} className="btn-crawl btn btn-primary mt-5 mb-3">
          Volver al buscador
        </Link>
      </div>
    </>
  );
};

export default Characters;
