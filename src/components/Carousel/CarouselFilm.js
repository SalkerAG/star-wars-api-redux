import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FilmCard from "../../components/FilmCard/FilmCard";
import { complement, either, isEmpty, isNil } from "ramda";

const responsive = {
  0: { items: 1 }
};
const Carousel = ({ films }) => {
  const [carouselFilms, setCarouselFilms] = useState([]);

  useEffect(() => {
    if (isNotEmpty(films)) {
      const carouselFilms = films.map((film, i) => (
        <FilmCard key={i} film={film} />
      ));
      setCarouselFilms(carouselFilms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Object.keys(carouselFilms).length === 0 ? (
        <h4 className="text-center">No has conultado ninguna pelicula aún</h4>
      ) : (
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval={3000}
          fadeOutAnimation={false}
          responsive={responsive}
          items={carouselFilms}
          mouseDragEnabled={true}
          showSlideInfo={false}
          dotsDisabled={true}
          buttonsDisabled={true}
        />
      )}
    </>
  );
};

export const isEmptyOrNull = either(isEmpty, isNil);
export const isNotEmpty = complement(isEmptyOrNull);

export default React.memo(Carousel);
