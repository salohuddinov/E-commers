
let cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];



const favouriteNumber = document.querySelector("#count-favourite");
const favoriteNumberShowMobile = document.querySelector('.fav-counter');

let favoriteProductsJson = localStorage.getItem(FAVORITE);
let favoriteProducts = JSON.parse(favoriteProductsJson) || [];


