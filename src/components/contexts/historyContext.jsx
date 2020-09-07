import React, { Component, createContext } from "react";
export const HistoryContext = createContext();

class HistoryProvider extends Component {
  setClients = (clients) => {
    this.setState({ clients: clients });
  };
  setClientOrders = (client_orders) => {
    this.setState({ client_orders: client_orders });
  };
  setClientOrderItems = (client_order_items) => {
    this.setState({ client_order_items: client_order_items });
  };
  state = {
    clients: [],
    client_orders: [],
    client_order_items: [],
    setClients: this.setClients,
    setClientOrders: this.setClientOrders,
    setClientOrderItems: this.setClientOrderItems,
  };
  render() {
    return (
      <HistoryContext.Provider value={this.state}>
        {this.props.children}
      </HistoryContext.Provider>
    );
  }
}

export default HistoryProvider;
