/* Global imports */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Local imports */
import Main from "./Main";
import FilmDetails from "./FilmDetails"
import CharacterDetails from "./CharacterDetails";

/* Component definition */
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/film/detail/:id" exact component={FilmDetails} />
      <Route path="/character/detail/:id" exact component={CharacterDetails} />

    </Switch>
  </Router>
);

export default Root;
