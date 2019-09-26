/* Global imports */
import React, { useEffect } from "react";
import Spin from "../../components/Layout/Spin";
import { Link } from "react-router-dom";

/* Component definition */
const FilmDetails = ({
  getFilmById,
  addVisit,
  filmDetail,
  match,
  loading,
  cleanForm
}) => {
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    getFilmById(id);
  }, [getFilmById, id]);

  useEffect(() => {
    if (filmDetail) {
      addVisit(filmDetail);
    }
  }, [addVisit, filmDetail]);

  return loading || !filmDetail ? (
    <Spin />
  ) : (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <h2>INFORMACIÓN DE LA PELÍCULA</h2>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-8">
            <section className="body-crawl star-wars mt-5">
              <div className="crawl">
                <div className="title">
                  <p>Episode {filmDetail.episode_id}</p>
                  <h1>{filmDetail.title}</h1>
                </div>
                <p>{filmDetail.opening_crawl}</p>
              </div>
            </section>
            <div className="btn-crawl mt-3 m-3">
              <Link
                to={"/"}
                className="btn-crawl btn btn-primary"
                onClick={() => cleanForm()}
              >
                {" "}
                Volver al buscador{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <h2>{filmDetail.title}</h2>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{filmDetail.title}</h4>
                <div className="card-text">
                  <p>Episodio: {filmDetail.episode_id}.</p>
                  <p>Director: {filmDetail.director}</p>
                  <p>Producida: {filmDetail.producer}</p>
                  <p>Lanzamiento: {filmDetail.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(FilmDetails);
