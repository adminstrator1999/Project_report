import React, { Component } from "react";
import axios from "axios";
class ClientOrderItems extends Component {
  client_order_id = this.props.match.params.order_id;
  state = { client_order_items: [] };
  componentDidMount() {
    let obj = { client_order_id: this.client_order_id };
    axios.post("report/client-order-items/", obj).then((response) => {
      this.setState({ client_order_items: response.data });
    });
  }
  render() {
    let client_order_items = this.state.client_order_items;
    return (
      <div
        className="responsive-table"
        style={{
          overflow: "scroll",
        }}
      >
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product name</th>
              <th scope="col">Qauntity</th>
              <th scope="col">Price</th>
              <th scope="col">Total price</th>
            </tr>
          </thead>
          <tbody>
            {client_order_items.map((client_order_item) => (
              <tr key={client_order_items.indexOf(client_order_item) + 1}>
                <th scope="row">
                  {client_order_items.indexOf(client_order_item) + 1}
                </th>
                <td>
                  <a href="#">{client_order_item.product_name}</a>
                </td>
                <td>{client_order_item.quantity}</td>
                <td>{client_order_item.price}</td>
                <td>{client_order_item.quantity * client_order_item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientOrderItems;
