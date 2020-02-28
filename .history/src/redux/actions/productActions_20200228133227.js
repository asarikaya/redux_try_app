import * as actionTypes from "./actionTypes"

export function getProductsSuccess(categories){
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getProducts() {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}