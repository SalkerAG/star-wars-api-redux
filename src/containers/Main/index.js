/* Global imports */
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

/* Local imports */
import {
  requestList as requestFilmsList,
  getList as getFilmList,
  getLoading as getFilmListLoading,
  cleanForm
} from "../../store/reducers/films";

import {
  requestList as requestPeopleList,
  getList as getCharactersList,
  getLoading as getCharacterListLoading
} from "../../store/reducers/characters";

import { getList as getVisitedList } from "../../store/reducers/visited";

import Main from "./Main.js";
import {
  getError as getErrorForm,
  requestForm,
  failureForm,
  successForm
} from "../../store/reducers/forms";
/* Local utility functions */

const mapStateToProps = state => ({
  films: getFilmList(state),
  loading: getFilmListLoading(state),
  loadingCharacters: getCharacterListLoading(state),
  characters: getCharactersList(state),
  visited: getVisitedList(state),
  errorForm: getErrorForm(state)
});

const mapDispatchToProps = dispatch => ({
  getFilms: params => dispatch(requestFilmsList(params)),
  getCharacters: () => dispatch(requestPeopleList()),
  cleanForm: () => dispatch(cleanForm()),
  requestForm: () => dispatch(requestForm()),
  failureForm: () => dispatch(failureForm()),
  successForm: () => dispatch(successForm())
});
/* Styles */

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Main);
