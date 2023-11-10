import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Category from "./components/Category";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Product Title 1",
          desc: "Description for Product 1",
          img: "home-prod-1.jpg",
          category: "cleaning",
          price: "10.99",
        },
        {
          id: 2,
          title: "Product Title 2",
          desc: "Description for Product 2",
          img: "home-prod-2.jpg",
          category: "cleaning",
          price: "12.99",
        },
        {
          id: 3,
          title: "Product Title 3",
          desc: "Description for Product 3",
          img: "home-prod-3.jpg",
          category: "room",
          price: "8.99",
        },
        {
          id: 4,
          title: "Product Title 4",
          desc: "Description for Product 4",
          img: "home-prod-4.jpg",
          category: "room",
          price: "15.99",
        },
        {
          id: 5,
          title: "Product Title 5",
          desc: "Description for Product 5",
          img: "home-prod-5.jpg",
          category: "shower",
          price: "14.99",
        },
        {
          id: 6,
          title: "Product Title 6",
          desc: "Description for Product 6",
          img: "home-prod-6.jpg",
          category: "shower",
          price: "9.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  onUpdateQuantity = (itemId, quantity) => {
    const updatedOrders = this.state.orders.map((order) =>
      order.id === itemId
        ? { ...order, quantity: order.quantity + quantity }
        : order
    );

    const filteredOrders = updatedOrders.filter((order) => order.quantity > 0);

    this.setState({ orders: filteredOrders });
  };

  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          onUpdateQuantity={this.onUpdateQuantity}
        />
        <Category chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    const orderId = item.id;
    const orderItem = this.state.orders.find((order) => order.id === orderId);

    if (orderItem) {
      const updatedOrders = this.state.orders.map((order) =>
        order.id === orderId
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );

      this.setState({ orders: updatedOrders });
    } else {
      this.setState({
        orders: [...this.state.orders, { ...item, quantity: 1 }],
      });
    }
  }
}

export default App;
