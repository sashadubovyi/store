import React, { Component } from "react";

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "cleaning",
          name: "Cleaning",
        },
        {
          key: "room",
          name: "Room",
        },
        {
          key: "shower",
          name: "Shower",
        },
      ],
      activeCategory: "all",
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div
            key={el.key}
            className={el.key === this.state.activeCategory ? "active" : ""}
            onClick={() => this.handleCategoryClick(el.key)}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }

  handleCategoryClick(key) {
    this.setState({ activeCategory: key });
    this.props.chooseCategory(key.toLowerCase());
  }
}

export default Category;
