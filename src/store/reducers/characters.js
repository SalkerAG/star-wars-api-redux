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
    successList
  },
  selectors: { getCurrent, getError, getLoading, getList }
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failureDetail: state => ({ ...state, loading: false }),
    failureList: state => ({ ...state, error: true, loading: false }),
    requestDetail: (state) => ({ ...state, loading: true }),
    requestList: state => ({ ...state, error: false, loading: true }),
    successDetail: (state, character) => ({
      ...state,
      current: character,
      loading: false
    }),
    successList: (state, list) => ({
      ...state,
      error: false,
      loading: false,
      list
    })
  },

  // The initial value of your reducer state
  initial: {
    error: false,
    loading: false,
    current: null,
    list: []
  },

  // No need to select the state slice -- it's done for you.
  selectors: {},

  // the slice of state your reducer controls
  slice: "characters"
});
