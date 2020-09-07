import React, { Component } from "react";
class BuyForm extends Component {
  state = {};
  render() {
    return (
      <div className="form__style">
        <form>
          <h1>Product</h1>
          <input
            required
            name="name"
            className="txtb"
            type="text"
            // value={this.state.product.name}
            // onChange={this.handleChange}
          />
          <select
            name="measaure_type"
            // value={this.state.product.measure_type}
            // onChange={this.handleMeasureType}
            className="txtb"
          >
            <option value="kg">kilogramm</option>
            <option value="m">metr</option>
            <option value="ta">dona</option>
            <option value="l">litr</option>
          </select>
          {/* <select
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
          </select> */}

          <button className="form__button" type="submit">
            Saqlash
          </button>
        </form>
      </div>
    );
  }
}

export default BuyForm;
