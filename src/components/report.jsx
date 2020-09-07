import React, { Component } from "react";
import axios from "axios";
class Report extends Component {
  state = { products: [] };
  componentDidMount() {
    axios
      .get("report/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let products = this.state.products;
    return (
      <div
        className="table-responsive"
        style={{ overflow: "scroll", maxHeight: "500px", marginTop: "30px" }}
      >
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mahsulot nomi</th>
              <th scope="col">Sotilgan miqdori</th>
              <th scope="col">Kirim</th>
              <th scope="col">Chiqim</th>
              <th scope="col">Foyda</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={products.indexOf(product)}>
                <th scope="row">{products.indexOf(product) + 1}</th>
                <td>{product.product_name}</td>
                <td>{product.sold_quantity}</td>
                <td>{product.income}</td>
                <td>{product.expenditure}</td>
                <td>{product.income - product.expenditure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report;
