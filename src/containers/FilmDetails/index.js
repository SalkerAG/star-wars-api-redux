/* Global imports */
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

/* Local imports */
import {
  getCurrent as getCurrentFilmDetail,
  requestDetail as requestFilmDetail,
  getLoading as getCurrentFilmDetailLoading,
} from "../../store/reducers/films";
import {
  addItem as addVisit,
} from "../../store/reducers/visited";
import FilmDetail from "../FilmDetails/FilmDetails";

/* Local utility functions */

const mapStateToProps = state => ({
  filmDetail: getCurrentFilmDetail(state),
  loading:    getCurrentFilmDetailLoading(state),
})

const mapDispatchToProps = dispatch => ({
  getFilmById: id => dispatch(requestFilmDetail(id)),
  addVisit: url => dispatch(addVisit(url))
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(FilmDetail);
