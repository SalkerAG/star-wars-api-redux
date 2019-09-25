import autodux from "autodux";

export const {
  reducer,
  initial,
  slice,
  actions: { failureForm, requestForm, successForm },
  selectors: { getError, getCurrent }
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failureForm: state => ({ ...state, loading: false, error: true }),
    requestForm: state => ({ ...state, loading: false }),
    successForm: (state, search) => ({
      ...state,
      loading: false,
      current: search
    })
  },

  // The initial value of your reducer state
  initial: {
    current: null,
    loading: false,
    error: false
  },

  // No need to select the state slice -- it's done for you.
  selectors: {},

  // the slice of state your reducer controls
  slice: "forms"
});
