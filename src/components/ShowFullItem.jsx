import React, { Component } from "react";
import { BiCartAdd } from "react-icons/bi";

export class ShowFullItem extends Component {
  render() {
    return (
      <div
        className="full-item"
        onClick={() => this.props.onShowItem(this.props.item)}
      >
        <div>
          <img
            src={"./images/" + this.props.item.img}
            alt={this.props.item.title}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price} $</b>
          <BiCartAdd
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          />
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
