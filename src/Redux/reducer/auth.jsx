const initialAuthState = {
  isAuth: true,
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
}
