import React, { useEffect } from "react";
import Spin from "../../components/Layout/Spin";
import { Link } from "react-router-dom";

const CharacterDetail = ({
  getCharacterById,
  characterDetail,
  match,
  loading
}) => {
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    getCharacterById(id);
  }, [getCharacterById, id]);

  return loading || !characterDetail ? (
    <Spin />
  ) : (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <h2>INFORMACIÓN DEL PERSONAJE</h2>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-12">
            <h2>{characterDetail.name}</h2>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{characterDetail.name}</h5>
                <div className="card-text">
                  <p>Año de nacimiento: {characterDetail.birth_year}.</p>
                  <p>Color de ojos: {characterDetail.eye_color}</p>
                  <p>Género: {characterDetail.gender}</p>
                  <p>Color de pelo: {characterDetail.hair_color}</p>
                  <p>Altura: {characterDetail.height} cms.</p>
                  <p>Peso: {characterDetail.mass} kgs.</p>
                  <p>Color de piel: {characterDetail.skin_color}</p>
                </div>
              </div>
            </div>
            <div className="btn-crawl mt-3 m-3">
              <Link to={"/"} className="btn-crawl btn btn-primary">
                {" "}
                Volver al buscador{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CharacterDetail);
