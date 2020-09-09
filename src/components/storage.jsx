import React, { Component } from "react";
import axios from "axios";
class Storage extends Component {
  state = { products: [] };
  componentDidMount() {
    axios
      .get("storage/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let products = this.state.products;
    let total_price = products.reduce((initialVal, currentVal) => {
      return initialVal + currentVal.total_price;
    }, 0);
    return (
      <React.Fragment>
        <div
          style={{
            margin: "10px",
          }}
        >
          <h3>Ombordagi tovarlarning umumiy summasi: {total_price} so'm</h3>
        </div>
        <div className="table-responsive table_storage">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mahsulot nomi</th>
                <th scope="col">Qolgan miqdori</th>
                <th scope="col">Oxirgi narxi</th>
                <th scope="col">Bozor narxi</th>
                <th scope="col">Umumiy narxi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={products.indexOf(product)}>
                  <th scope="row">{products.indexOf(product) + 1}</th>
                  <td>{product.product_name}</td>
                  <td>{product.rest}</td>
                  <td>{product.last_price}</td>
                  <td>{product.market_price}</td>
                  <td>{product.total_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Storage;
