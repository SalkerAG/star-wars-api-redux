import { all, takeLatest } from "redux-saga/effects";

export default function* () {
  yield all([
    takeLatest(
      require("../reducers/films").requestList.type,
      require("./films").getFilms
    ),
    takeLatest(
      require("../reducers/films").requestDetail.type,
      require("./films").getFilmDetail
    ),
    takeLatest(
      require("../reducers/characters").requestList.type,
      require("./characters").getCharacter
    ),
    takeLatest(
      require("../reducers/characters").requestDetail.type,
      require("./characters").getCharacterDetail
    )
  ]);
}
