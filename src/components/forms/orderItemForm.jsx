import React, { Component } from "react";
import axios from "axios";
import { MDBDataTableV5 } from "mdbreact";
class OrderItemForm extends Component {
  state = {
    product_list: [],
    errorMsg: "",
  };
  componentDidMount() {
    axios
      .get("order/order-item-list/")
      .then((response) => {
        this.setState({ product_list: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error happened while retrieving" });
      });
  }
  render() {
    const { product_list } = this.state;
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ paddingLeft: "25px" }}>
                Product name
              </th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col" style={{ margin: "auto" }}>
                Cart
              </th>
            </tr>
          </thead>
          <tbody>
            {product_list.map((product) => (
              <tr>
                <td style={{ paddingLeft: "25px" }}>{product.product_name}</td>
                <td>
                  <input placeholder={product.rest} />
                </td>
                <td>
                  <input placeholder={product.last_price} />
                </td>
                <td>
                  <button
                    className="btn btn-primary sm"
                    style={{ margin: "auto" }}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ paddingLeft: "25px" }}>apple</td>
              <td>12 dona</td>
              <td> 21000 so`m</td>
              <td>Add to Cart</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderItemForm;
