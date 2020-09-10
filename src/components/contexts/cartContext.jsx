import React, { createContext, Component } from "react";
export const CartContext = createContext();

export class CartProvider extends Component {
  setIs_superuser = (is_superuser) => {
    this.setState({
      is_superuser: is_superuser,
    });
  };
  setIs_logged_in = (is_logged_in) => {
    this.setState({
      is_logged_in: is_logged_in,
    });
  };

  setOrderItems = (orderItems) => {
    this.setState({ orderItems: orderItems, itemCount: orderItems.length });
  };
  state = {
    orderItems: localStorage.getItem("orderItems")
      ? JSON.parse(localStorage.getItem("orderItems"))
      : [],
    itemCount: localStorage.getItem("orderItems")
      ? JSON.parse(localStorage.getItem("orderItems")).length
      : 0,
    is_superuser: JSON.parse(localStorage.getItem("is_superuser")),
    is_logged_in: JSON.parse(localStorage.getItem("is_logged_in")),
    setOrderItems: this.setOrderItems,
    setIs_superuser: this.setIs_superuser,
    setIs_logged_in: this.setIs_logged_in,
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
