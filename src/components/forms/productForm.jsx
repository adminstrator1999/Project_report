import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class ProductForm extends Component {
  state = {
    product: {
      name: "",
      measure_type: "kg",
      category: 1,
    },

    category_list: [],
    errorMsg: "",
  };
  handleMeasureType = (event) => {
    event.persist();
    this.setState((prevState) => {
      let product = Object.assign({}, prevState.product);
      product.measure_type = event.target.value;
      return { product };
    });
  };
  handleCategory = (event) => {
    event.persist();
    this.setState((prevState) => {
      let product = Object.assign({}, prevState.product);
      product.category = event.target.value;
      return { product };
    });
  };
  handleChange = (event) => {
    event.persist();
    this.setState((prevState) => {
      let product = Object.assign({}, prevState.product);
      product.name = event.target.value;
      return { product };
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("product/", this.state.product)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/");
    this.setState((prevState) => {
      let product = Object.assign({}, prevState.product);
      product = { name: "", measure_type: "", category: "" };
      return { product };
    });
  };
  componentDidMount() {
    axios
      .get("product/category/")
      .then((response) => {
        this.setState({ category_list: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error happened while retrieving" });
      });
  }

  render() {
    const { category_list } = this.state;
    return (
      <div className="form__style" style={{ width: "300px" }}>
        <form onSubmit={this.handleSubmit}>
          <h1>Maxsulot</h1>
          <input
            required
            name="name"
            className="txtb"
            type="text"
            placeholder="mahsulot nomi"
            value={this.state.product.name}
            onChange={this.handleChange}
          />
          <select
            name="measaure_type"
            value={this.state.product.measure_type}
            onChange={this.handleMeasureType}
            className="txtb"
          >
            <option value="kg">kilogramm</option>
            <option value="m">metr</option>
            <option value="ta">dona</option>
            <option value="l">litr</option>
          </select>
          <select
            value={this.state.product.category}
            name="category"
            onChange={this.handleCategory}
            className="txtb"
          >
            {category_list.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <button className="form__button" type="submit">
            Saqlash
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ProductForm);
