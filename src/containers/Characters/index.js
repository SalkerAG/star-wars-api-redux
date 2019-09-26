import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

import {
  requestList as requestPeopleList,
  getList as getCharactersList,
  getLoading as getCharacterListLoading
} from "../../store/reducers/characters";
import Characters from "./Characters";

const mapStateToProps = state => ({
  loadingCharacters: getCharacterListLoading(state),
  characters: getCharactersList(state)
});

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(requestPeopleList())
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Characters);
