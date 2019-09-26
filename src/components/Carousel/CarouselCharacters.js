import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { complement, defaultTo, either, isEmpty, isNil } from "ramda";
import Spin from "../../components/Layout/Spin";

const responsive = {
  0: { items: 1 }
};

const Carousel = ({ characters, loadingCharacters }) => {
  const [carouselCharacters, setCarouselCharacters] = useState(
    defaultTo([], characters)
  );

  useEffect(() => {
    if (isNotEmpty(characters)) {
      const carouselCharacters = characters.map((character, i) => (
        <CharacterCard key={i} character={character} />
      ));
      setCarouselCharacters(carouselCharacters);
    }
  }, [characters]);

  return (
    <>
      {loadingCharacters ? (
        <Spin />
      ) : (
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval={3000}
          fadeOutAnimation={false}
          responsive={responsive}
          items={carouselCharacters}
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
