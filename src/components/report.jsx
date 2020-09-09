import React, { Component } from "react";
import axios from "axios";
class Report extends Component {
  state = { products: [], start_date: "", end_date: "", date: "" };
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
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let start_date = this.state.start_date;
    let end_date = this.state.end_date;
    let date = this.state.date;
    let obj = {
      start_date: start_date,
      end_date: end_date,
      date: date,
    };
    axios.post("report/", obj).then((response) => {
      this.setState({ products: response.data });
    });
  };
  render() {
    let products = this.state.products;
    let total_expenditure = products.reduce((initialVal, currentVal) => {
      return initialVal + currentVal.expenditure;
    }, 0);
    let total_income = products.reduce((initialVal, currentVal) => {
      return initialVal + currentVal.income;
    }, 0);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <div className="report_submit">
              <h4>Jami chiqim: {total_expenditure} so'm</h4>
              <h4>Jami kirim: {total_income} so'm</h4>
              <h4>Jami foyda: {total_income - total_expenditure} so'm</h4>
            </div>
            <div className="report_submit">
              <form onSubmit={this.handleSubmit}>
                <h3 style={{ textAlign: "center" }}>Sort</h3>
                <label className="col-md-4 col-form-label col-form-label-sm">
                  Qachondan:
                </label>
                <input
                  style={{ margin: "10px 0" }}
                  className="col-md-12 form-control"
                  type="date"
                  name="start_date"
                  value={this.state.start_date}
                  onChange={this.handleChange}
                />
                <label className="col-md-12 col-form-label col-form-label-sm">
                  Qachongacha:
                </label>
                <input
                  style={{ margin: "10px 0" }}
                  className="col-md-12 form-control"
                  type="date"
                  name="end_date"
                  value={this.state.end_date}
                  onChange={this.handleChange}
                />
                <label className="col-md-12 col-form-label col-form-label-sm">
                  Necha kunlik:
                </label>
                <input
                  style={{ margin: "10px 0" }}
                  className="col-md-12 form-control"
                  type="number"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary sm "
                  style={{
                    marginTop: "0px",
                    marginBottom: "5px",
                  }}
                >
                  Sort
                </button>
              </form>
            </div>
          </div>
          <div className="table-responsive table_report col-md-8">
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
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
