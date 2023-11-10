import React, { Component } from "react";
import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./images/" + this.props.item.img}
          alt={this.props.item.title}
        />
        <div className="order-info">
          <h2>{this.props.item.title}</h2>
          <div className="quantity-controls">
            <BiPlus
              className="quantity-control"
              onClick={() => this.props.onUpdateQuantity(this.props.item.id, 1)}
            />
            <p className="quantity-number">{this.props.item.quantity}</p>
            <BiMinus
              className="quantity-control"
              onClick={() =>
                this.props.onUpdateQuantity(this.props.item.id, -1)
              }
            />
          </div>
        </div>
        <p>{this.props.item.price * this.props.item.quantity} $</p>
        <BiTrash
          className="deleteItem"
          onClick={() => {
            this.props.onDelete(this.props.item.id);
          }}
        />
      </div>
    );
  }
}

export default Order;
