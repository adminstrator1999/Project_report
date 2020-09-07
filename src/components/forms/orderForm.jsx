import React, { Component } from "react";
// import axios from "axios";

class OrderForm extends Component {
  state = {
    order_types: "",
    deadline: "",
    unpaid_portion: "",
    client: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // axios.post();
  };
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <label className="col-md-2">deadline</label>
          <input
            type="text"
            name="name"
            className="form-control col-md-8"
            value={name}
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-danger sm m-2">
          Submit
        </button>
      </form>
    );
  }
}

export default OrderForm;
