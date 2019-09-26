import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

import {
  requestAllFilms as requestFilmList,
  getList as getFilmList,
  getLoading as getFilmListLoading,
  cleanForm
} from "../../store/reducers/films";
import Films from "./Films";

const mapStateToProps = state => ({
  loadingFilms: getFilmListLoading(state),
  films: getFilmList(state)
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(requestFilmList()),
  cleanForm: () => dispatch(cleanForm())
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Films);
