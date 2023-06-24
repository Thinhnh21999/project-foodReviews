import restClient from ".";

export const fetchCarts = (params) => {
  console.log(params);
  return restClient("get", "carts", params);
};
