const cartsState = {
  carts: [],
  params: {
    _page: 1,
    _limit: 12,
    _totalRows: 0,
    search: "",
    sort: "",
  },
};

export default function cartsReducer(state = cartsState, action) {
  switch (action.type) {
    case "SET_CARTS":
      return {
        ...state,
        carts: action.payload,
      };
    case "SET_PARAMS":
      return {
        ...state,
        // params: {
        //   ...state.params,
        //   _totalRows: action.payload._totalRows,
        // },
      };
    default:
      return state;
  }
}
