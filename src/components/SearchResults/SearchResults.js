/* Global imports */
import React from "react";
import Spin from "../Layout/Spin";

/* Local imports */
import Film from "../Film/Film";

/* Component definition */
const SearchResults = ({ results, loading }) => {
  return loading ? (
    <div className="card">
      <Spin />
    </div>
  ) : (
    <div className="card">{displayFilms(results)}</div>
  );
};

/* Local utility functions */
const displayFilms = results =>
  results.map((film, index) => {
    return <Film key={index} info={film} />;
  });

/* Styles */

export default SearchResults;
