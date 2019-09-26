import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FilmCard from "../../components/FilmCard/FilmCard";
import { complement, defaultTo, either, isEmpty, isNil } from "ramda";

const responsive = {
  0:    { items: 1 }
};
const Carousel = ({ films }) => {
  const [carouselFilms, setCarouselFilms] = useState(defaultTo([], films));

  useEffect(() => {
    if (isNotEmpty(films)) {
      const carouselFilms = films.map((film, i) => (
        <FilmCard key={i} film={film} />
      ));

      setCarouselFilms(carouselFilms);
    }
  }, [films]);

  return (
    <>
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
    </>
  );
};

export const isEmptyOrNull = either(isEmpty, isNil);
export const isNotEmpty = complement(isEmptyOrNull);

export default React.memo(Carousel);
