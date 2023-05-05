export const setAuthAction = (isAuth) => {
  return {
    type: "LOGIN",
    payload: isAuth,
  };
};

export const setPramsAction = (params) => {
  return {
    type: "SET_PARAMS",
    payload: params,
  };
};

export const setCartsAction = (carts) => {
  return {
    type: "SET_CARTS",
    payload: carts,
  };
};
