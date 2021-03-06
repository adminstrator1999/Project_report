import React, { Component } from "react";
import Modal from "react-modal";
import { CartContext } from "../contexts/cartContext";

class BuyItemModal extends Component {
  static contextType = CartContext;
  state = {
    buyItems: [],
    price: "",
    quantity: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let order_price = this.state.price;
    let order_quantity = this.state.quantity;
    let order_product_id = this.props.product_id;
    let order_product_name = this.props.product_name;
    let buying = this.props.buying;
    let obj = {
      price: order_price,
      quantity: order_quantity,
      product_id: order_product_id,
      product_name: order_product_name,
      buying: buying,
    };
    this.context.setOrderItems([...this.context.orderItems, obj]);
    localStorage.setItem(
      "orderItems",
      JSON.stringify([...this.context.orderItems, obj])
    );
    this.setState({ price: "", quantity: "" });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        style={{
          overlay: {
            zIndex: "1000",
          },
          content: {
            maxWidth: "500px",
            margin: "auto",
            maxHeight: "320px",
            zIndex: "1000",
          },
        }}
      >
        <h2 style={{ textAlign: "center" }}>{this.props.product_name}</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="col-md-4 col-form-label col-form-label-lg">
            Miqdori:
          </label>
          <input
            className="col-md-12 form-control"
            type="number"
            min="0"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <label className="col-md-4 col-form-label col-form-label-lg">
            Narxi:
          </label>
          <input
            className="col-md-12 form-control"
            type="number"
            min="0"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary m-2"
            style={{ float: "right" }}
            type="submit"
          >
            Saqlash
          </button>
        </form>
        <div>
          <button
            className="btn btn-secondary m-2"
            style={{ float: "right" }}
            onClick={this.props.handleClose}
          >
            Yopish
          </button>
        </div>
      </Modal>
    );
  }
}

export default BuyItemModal;
