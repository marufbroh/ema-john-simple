import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  // if cart data is in database, you have to use async awaiat
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  // console.log(ids);

  const res = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await res.json();

  const savedCart = [];
  for (const id in storedCart) {
    const addedProducts = products.find((product) => product._id === id);
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
