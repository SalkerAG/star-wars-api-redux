/* Global imports */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Local imports */
import Main from "./Main";
// import FilmDetail from "./FilmDetail";
// import CharacterDetail from "./CharacterDetail";

/* Component definition */
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      {/* <Route path="/film/detail/:id" component={FilmDetail} />
      <Route path="/character/detail/:id" component={CharacterDetail} /> */}
    </Switch>
  </Router>
);

export default Root;
