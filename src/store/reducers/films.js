import autodux from "autodux";

export const {
  reducer,
  initial,
  slice,
  actions: {
    failureDetail,
    failureList,
    requestDetail,
    requestList,
    successDetail,
    successList,
    cleanForm
  },
  selectors: { getCurrent, getError, getFetching, getList }
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failureDetail: state => ({ ...state, fetching: false }),
    failureList: state => ({ ...state, error: true, fetching: false }),
    requestDetail: state => ({ ...state, fetching: true }),
    requestList: state => ({ ...state, error: false, fetching: true }),
    successDetail: (state, film) => ({
      ...state,
      current: film,
      fetching: false
    }),
    successList: (state, list) => ({
      ...state,
      error: false,
      fetching: false,
      list
    }),
    cleanForm: state => ({ ...state, list: [] })
  },

  // The initial value of your reducer state
  initial: {
    current: null,
    error: false,
    fetching: false,
    list: []
  },

  // No need to select the state slice -- it's done for you.
  selectors: {},

  // the slice of state your reducer controls
  slice: "films"
});
