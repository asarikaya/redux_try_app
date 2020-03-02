import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function getProducts(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}

// yukarıda tanımladığım create ve update actionları için ortak bir save fonksiyonu yazıyorum
export function saveProduct(product) {
  // ekleme veya düzenleme için veri tabanımıza product id yi gönderiyoruz yada boş gönderiyorum neye göre olduğunu method ta belirtiyorum
  return fetch("http://localhost/3000/products/" + (product.id || ""), {
    // eğer product id varsa bir düzenlemedir ve PUT ile gönderiyorum eğer product id yoksa bir eklemedir ve POST ile gönderiyoruz
    method: product.id ? "PUT" : "POST",
    // eklemek yada düzenlemek için göndereceğimiz datayı body ile "stringleştirerek" gönderiyoruz çünkü request ler string olarak gönderilir
    body: JSON.stringify(product)
  });
}
