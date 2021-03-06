import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/topNavbar";
import Index from "./components/index";
import ProductForm from "./components/forms/productForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderItemDatatable from "./components/orderItemDataTable";
import Cart from "./components/cart";
import { CartProvider } from "./components/contexts/cartContext";
import BuyItemDatatable from "./components/buyItemDatatable";
import Report from "./components/report";
import Storage from "./components/storage";
import History from "./components/history";
import ClientOrders from "./components/clientOrders";
import ClintOrderItems from "./components/clientOrderItems";
import Registration from "./components/userforms/registration";
import Login from "./components/userforms/login";
class App extends Component {
  render() {
    return (
      <Router>
        <CartProvider>
          <Navbar />
          <Route path="/" exact component={Index} />
          <Route path="/order/cart/" component={Cart}></Route>
          <Route path="/order/list/" component={OrderItemDatatable} />
          <Route path="/buy/item/list/" component={BuyItemDatatable} />
          <Route path="/product/" component={ProductForm} />
          <Route path="/report/" component={Report} />
          <Route path="/storage/" component={Storage} />
          <Route exact path="/history/" component={History} />
          <Route exact path="/history/:id/" component={ClientOrders} />
          <Route path="/client-order/:order_id" component={ClintOrderItems} />
          <Route path="/register/" component={Registration} />
          <Route path="/login/" component={Login} />
        </CartProvider>
      </Router>
    );
  }
}

export default App;
