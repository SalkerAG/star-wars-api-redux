/* Global imports */
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import FilmCard from "../../components/FilmCard/FilmCard";
import { complement, defaultTo, either, isEmpty, isNil } from "ramda";

const responsive = {
  0: { items: 1 },
  1200: { items: 3 },
  1440: { items: 4 },
  700: { items: 2 }
};

const Carousel = ({ films }) => {
  const [carouselFilms, setCarouselFilms] = useState(defaultTo([], films));

  useEffect(() => {
    if (isNotEmpty(films)) {
      const carouselFilms = films.map((film, i) => (
        <FilmCard key={i} character={film} />
      ));

      setCarouselFilms(carouselFilms);
    }
  }, [films]);

  return (
    <>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={3000}
        fadeOutAnimation={true}
        items={carouselFilms}
        mouseDragEnabled={true}
        responsive={responsive}
        showSlideInfo={false}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
    </>
  );
};

export const isEmptyOrNull = either(isEmpty, isNil);
export const isNotEmpty = complement(isEmptyOrNull);

export default React.memo(Carousel);
