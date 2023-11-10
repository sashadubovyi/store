import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import Order from "./order";
import logo from "../image/logo.png";

const calculateTotal = (orders) => {
  if (!orders) return 0;

  let total = 0;

  orders.forEach((el) => {
    if (el.quantity) {
      total += Number.parseFloat(el.price) * el.quantity;
    } else {
      total += Number.parseFloat(el.price);
    }
  });

  return total.toFixed(2);
};

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={el.id}
          item={el}
          onDelete={props.onDelete}
          onUpdateQuantity={props.onUpdateQuantity}
        />
      ))}
      <p className="totalSum">
        Total: {new Intl.NumberFormat().format(calculateTotal(props.orders))} $
      </p>
      <button className="payment">Go to payment</button>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <p>Your cart is empty</p>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="logo" />
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Account</li>
        </ul>
        <BiCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
