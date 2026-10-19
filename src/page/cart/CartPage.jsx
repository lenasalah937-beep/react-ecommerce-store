import { useContext } from "react";
import { cartContext } from "../../components/context/cartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTrans from "../../components/PageTrans";

export default function CartPage() {
  const { CartItem, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(cartContext);
  const total = CartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <PageTrans>
      <div className="checkout">
        <div className="order-sum">
          <h1>Order Summary</h1>
          <div className="items">
            {CartItem.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              CartItem.map((item, index) => (
                <div className="item-cart" key={index}>
                  <div className="img-name">
                    <div className="imgD">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price-item">${item.price}</p>
                      <div className="quan-control">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="btn-summ">
            <div className="shop-table">
              <p>Total:</p>
              <span className="total-out">${total.toFixed(2)}</span>
            </div>

            <div className="last-btn">
              <button type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTrans>
  );
}
