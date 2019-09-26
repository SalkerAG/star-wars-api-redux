/* Global imports */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Local imports */
import Main from "./Main";
import FilmDetails from "./FilmDetails";
import CharacterDetails from "./CharacterDetails";
import Characters from "./Characters";
import Films from "./Films";

/* Component definition */
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/films" exact component={Films} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/film/detail/:id" exact component={FilmDetails} />
      <Route path="/character/detail/:id" exact component={CharacterDetails} />
    </Switch>
  </Router>
);

export default Root;
