import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products){
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product){
  return {type:actionTypes.CREATE_PRODUCT_SUCCESS,payload:product}
}

export function updateProductSuccess(product){
  return {type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload:product}
}

export function getProducts(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if(categoryId){
        url = url+"?categoryId="+categoryId
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}

export function createProduct(){

}