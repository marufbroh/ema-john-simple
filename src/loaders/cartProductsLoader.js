import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const res = await fetch("products.json");
  const products = await res.json();

  // if cart data is in database, you have to use async awaiat
  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProducts = products.find((product) => product.id === id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }
//   console.log(storedCart);

  return savedCart;
};
export default cartProductsLoader;
