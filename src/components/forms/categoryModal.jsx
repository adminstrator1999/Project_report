import Modal from "react-modal";
import React, { Component } from "react";
import axios from "axios";
Modal.setAppElement("#root");
class CategoryModal extends Component {
  state = {
    name: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("product/category/", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "" });
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
            margin: "auto",
            maxWidth: "400px",
            height: "250px",
            zIndex: "1000",
          },
        }}
      >
        <h2 style={{ textAlign: "center" }}>Category</h2>
        <form onSubmit={this.handleSubmit}>
          <label className="col-md-4 col-form-label col-form-label-lg">
            {" "}
            Name:{" "}
          </label>
          <input
            className="col-md-12 form-control"
            type="text"
            name="name"
            value={this.state.name}
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
            Close
          </button>
        </div>
      </Modal>
    );
  }
}
export default CategoryModal;
