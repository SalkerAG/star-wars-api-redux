import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

import {
  getCurrent as getCurrentCharacterDetail,
  requestDetail as requestCharacterDetail,
  getLoading as getCurrentCharacterLoading
} from "../../store/reducers/characters";
import CharacterDetails from "./CharacterDetails";

const mapStateToProps = state => ({
  characterDetail: getCurrentCharacterDetail(state),
  loading: getCurrentCharacterLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getCharacterById: id => dispatch(requestCharacterDetail(id))
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(CharacterDetails);
