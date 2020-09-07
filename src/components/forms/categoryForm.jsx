import React, { Component } from "react";

class CategoryForm extends Component {
  state = {
    name: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { name } = this.state;
    return (
      <div
        style={{ background: "blue", height: "100vh" }}
        className="signup-form"
      >
        <form className="box" onSubmit={this.handleSubmit}>
          <h1>Category </h1>
          <input
            className="txtb"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <button className="form__button" type="submit">
            Saqlang
          </button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
