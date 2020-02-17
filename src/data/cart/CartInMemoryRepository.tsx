import Cart from "../../domain/cart/Cart";
import CartRepository from "../../domain/cart/CartRepository";

export default class CartInMemoryRepository implements CartRepository {
  cart = new Cart([]);

  get(): Promise<Cart> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.cart);
      }, 100);
    });
  }

  save(cart: Cart): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.cart = cart;
        resolve(true);
      }, 100);
    });
  }
}
