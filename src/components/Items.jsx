import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((item) => (
          <Item
            onShowItem={this.props.onShowItem}
            item={item}
            key={item.id}
            onAdd={this.props.onAdd}
          />
        ))}
      </main>
    );
  }
}

export default Items;
