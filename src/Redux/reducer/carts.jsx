import { actionType } from "../action";

const cartsState = {
  carts: [],
  params: {
    _page: 1,
    _limit: 12,
    _totalRows: 0,
    title_like: "",
    _sort: "",
    _order: "",
  },
};

export default function cartsReducer(state = cartsState, action) {
  switch (action.type) {
    case actionType.SET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    case actionType.SET_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          _totalRows: action.payload._totalRows,
        },
      };
    case actionType.SET_META:
      return {
        ...state,
        params: action.payload,
      };
    default:
      return state;
  }
}
