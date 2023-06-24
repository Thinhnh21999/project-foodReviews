import { actionType } from "../action";

const initialAuthState = {
  isAuth: false,
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case actionType.SET_LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
}
