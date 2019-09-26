
import React, { useEffect, useState } from "react";
import { flatten, last, map, match, pipe, split } from "ramda";
import Select from "react-select";

import { Link } from "react-router-dom";


import SearchResults from "../../components/SearchResults/SearchResults";
import Header from "../../components/Layout/Header";
import CarouselFilms from "../../components/Carousel/CarouselFilm";
import CarouselCharacters from "../../components/Carousel/CarouselCharacters";

const Main = props => {
  const options = [
    { value: "A New Hope", label: "A New Hope" },
    { value: "Attack of the Clones", label: "Attack of the Clones" },
    { value: "The Phantom Menace", label: "The Phantom Menace" },
    { value: "Revenge of the Sith", label: "Revenge of the Sith" },
    { value: "Return of the Jedi", label: "Return of the Jedi" },
    { value: "The Empire Strikes Back", label: "The Empire Strikes Back" },
    { value: "The Force Awakens", label: "The Force Awakens" }
  ];
  const {
    getFilms,
    getCharacters,
    loading,
    films,
    loadingCharacters,
    characters,
    visited,
    errorForm,
    failureForm,
    successForm,
    requestForm,
    cleanForm
  } = props;
  const [title, setTitle] = useState("");

  const submitFilm = e => {
    e.preventDefault();

    requestForm();
    if (title.value === undefined || title.value.trim() === "") {
      failureForm();
      return;
    }
    successForm();
    getFilms({ search: title.value });
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <>
      <Header />
      <div className="row justify-content-inherit mt-5">
        <div className="col-md-3">
          <h2 className="text-center">PELICULAS VISITADAS</h2>
          <CarouselFilms films={loadVisitsLink(visited)} />
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="h2-form text-center mb-4">
                    ¡Encuentra tu película!
                  </h2>
                </div>

                <form
                  className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                  onSubmit={submitFilm}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <Select
                          placeholder="Título..."
                          className="text-dark"
                          options={options}
                          value={title}
                          onChange={value => setTitle(value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control btn btn-primary float-right"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <button
                          type="reset"
                          onClick={() => cleanForm()}
                          className="form-control btn btn-primary float-right"
                        >
                          Limpiar
                        </button>
                      </div>
                    </div>
                  </div>
                  {errorForm ? (
                    <div className="font-weight-bold alert alert-danger text-center mt-4">
                      Todos los campos son obligatorios
                    </div>
                  ) : (
                    <>
                      {Object.keys(films).length === 0 ? null : (
                        <SearchResults results={films} loading={loading} />
                      )}
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2 className="text-center">CARRUSEL PERSONAJES</h2>
           <CarouselCharacters characters={characters} loadingCharacters={loadingCharacters} />
        </div>
      </div>
    </>
  );
};

const loadVisitsLink = visited => {
  return visited.map((v, i) => {
    return <Link to={`film/detail/${getIdFromFilmUrl(v.url)}`}>{v.title}</Link>;
  });
};

const getIdFromFilmUrl = pipe(
  match(/films\/[0-9]*/gi),
  map(split("/")),
  flatten,
  last
);

export default React.memo(Main);
