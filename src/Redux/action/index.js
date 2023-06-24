export const actionType = {
  SET_LOGIN: "SET_LOGIN",
  SET_PARAMS: "SET_PARAMS",
  SET_CARTS: "SET_CARTS",
  SET_META: "SET_META",
  GET_CARTS_SAGA: "GET_CARTS_SAGA",
};

export const setAuthAction = (isAuth) => {
  return {
    type: actionType.SET_LOGIN,
    payload: isAuth,
  };
};

export const setPramsAction = (params) => {
  return {
    type: actionType.SET_PARAMS,
    payload: params,
  };
};

export const setCartsAction = (carts) => {
  return {
    type: actionType.SET_CARTS,
    payload: carts,
  };
};

export const setMetaAction = (params) => {
  return {
    type: actionType.SET_META,
    payload: params,
  };
};

export const getCartsAction = (carts) => {
  return {
    type: actionType.GET_CARTS_SAGA,
    payload: carts,
  };
};
