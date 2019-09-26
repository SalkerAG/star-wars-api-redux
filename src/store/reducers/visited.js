import autodux from "autodux";

import { compose, concat, uniq, evolve } from "ramda";

export const {
  reducer,
  initial,
  slice,
  actions: { addItem },
  selectors: { getList }
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    addItem: (state, film) => evolve({ list: addToArray(film) }, state)
  },

  // The initial value of your reducer state
  initial: {
    list: []
  },

  // No need to select the state slice -- it's done for you.
  selectors: {},

  // the slice of state your reducer controls
  slice: "visited"
});

export const addToArray = visit =>
  compose(
    uniq,
    concat([visit])
  );
