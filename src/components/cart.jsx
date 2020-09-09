import React, { Component } from "react";
import axios from "axios";
import { CartContext } from "./contexts/cartContext";
class Cart extends Component {
  static contextType = CartContext;
  state = {
    client: "",
    payed_portion: "",
    deadline: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let orderItems = this.context.orderItems;
    let client = this.state.client;
    let deadline = this.state.deadline;
    let payed_portion = this.state.payed_portion;
    if (payed_portion === "") {
      payed_portion = this.Total_price;
    }
    let obj = {
      orderItems: orderItems,
      client: client,
      payed_portion: payed_portion,
      deadline: deadline,
    };
    axios
      .post("order/completed-order/", obj)
      .then((response) => {
        if (response.status == 201) {
          this.props.history.push("/");
          this.context.setOrderItems([]);
          this.setState({ client: "", payed_portion: "", deadline: "" });
        }
      })
      .catch((error) => {
        if (error.response.status == 400) {
          this.setState({ storage_error: error.response.data });
        }
      });
  };
  Total_price = this.context.orderItems.reduce((initialVal, currentVal) => {
    return initialVal + currentVal.price * currentVal.quantity;
  }, 0);
  render() {
    let orderItems = this.context.orderItems;
    let storage_error = this.state.storage_error;
    let items;
    if (!this.context.itemCount) {
      items = <h1 className="cart_text">Bo'sh</h1>;
    }
    return (
      <React.Fragment>
        {storage_error ? (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ textAlign: "center" }}
          >
            {storage_error.storage_error}
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ marginTop: "40px" }}>
          <div className="cart_table">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Mahsulot nomi</th>
                  <th scope="col">Narxi</th>
                  <th scope="col">Miqdori</th>
                  <th scope="col">Umumiy narxi</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((orderItem) => (
                  <tr key={orderItems.indexOf(orderItem)}>
                    <th scope="row">{orderItems.indexOf(orderItem) + 1}</th>
                    <td>{orderItem.product_name}</td>
                    <td>{orderItem.price} so'm</td>
                    <td>{orderItem.quantity}</td>
                    <td>{orderItem.price * orderItem.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {items}
          </div>
          <div className="cart_submit ">
            <form onSubmit={this.handleSubmit}>
              <h3 style={{ textAlign: "center" }}>Order</h3>
              <label className="col-md-4 col-form-label col-form-label-sm">
                Client:
              </label>
              <input
                style={{ margin: "10px 0" }}
                className="col-md-12 form-control"
                type="text"
                name="client"
                value={this.state.client}
                onChange={this.handleChange}
              />
              <label className="col-md-12 col-form-label col-form-label-sm">
                To'langan qismi:
              </label>
              <input
                style={{ margin: "10px 0" }}
                className="col-md-12 form-control"
                type="number"
                name="payed_portion"
                value={this.state.payed_portion}
                placeholder={this.Total_price}
                onChange={this.handleChange}
              />
              <label className="col-md-12 col-form-label col-form-label-sm">
                To'lash muddati:
              </label>
              <input
                style={{ margin: "10px 0" }}
                className="col-md-12 form-control"
                type="date"
                name="deadline"
                value={this.state.deadline}
                onChange={this.handleChange}
              />
              <h4 style={{ padding: "10px" }}>
                Total price: {this.Total_price} so'm
              </h4>
              <button
                type="submit"
                className="btn btn-primary sm "
                style={{ float: "right", margin: "10px", marginTop: "0px" }}
              >
                Order confirmed
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
