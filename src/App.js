/* Global imports */
import React from "react";
// import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import Root from "./containers";
import "./index.css";

/* Local imports */
import store from "./store";

/* Component definition */

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

/* Styles */

export default App;
