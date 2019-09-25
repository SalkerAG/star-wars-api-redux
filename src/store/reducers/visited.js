import autodux from "autodux";
import { evolve } from "ramda";
import { concat, flip, compose, uniq } from "ramda";
const fconcat = flip(concat);

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
    addItem: (state, visit) => evolve({ list: addToArray(visit) }, state)
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
