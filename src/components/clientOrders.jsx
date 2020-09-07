import React, { Component } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import axios from "axios";

class ClientOrders extends Component {
  state = {
    isOpen: false,
    client_orders: [],
    paid_portion: "",
    client_order_id: "",
  };
  client_id = this.props.match.params.id;
  componentDidMount() {
    let obj = { client_id: this.client_id };
    axios.post("report/history/", obj).then((response) => {
      this.setState({ client_orders: response.data });
    });
  }
  handleUpdate = (client_order_id) => {
    this.setState({ isOpen: true, client_order_id: client_order_id });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isOpen: false });
    let obj = {
      client_order_id: this.state.client_order_id,
      paid_portion: this.state.paid_portion,
    };
    axios.put("report/history/", obj);
    this.setState({ client_order_id: "", paid_portion: "" });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    let client_orders = this.state.client_orders;
    return (
      <React.Fragment>
        <div className="responsive-table">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order type</th>
                <th scope="col">Savdo sanasi</th>
                <th scope="col">Nasiya miqdori</th>
                <th scope="col">Deadline</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {client_orders.map((client_order) => (
                <tr key={client_order.order_id}>
                  <th scope="row">{client_orders.indexOf(client_order) + 1}</th>
                  <td>
                    <Link
                      to={{
                        pathname: `/client-order/${client_order.order_id}`,
                      }}
                    >
                      {client_order.order_type}
                    </Link>
                  </td>
                  <td>{client_order.created_date}</td>
                  <td>{client_order.unpaid_portion}</td>
                  <td>{client_order.deadline}</td>
                  <td>
                    <button
                      className="btn btn-primary sm"
                      onClick={() => this.handleUpdate(client_order.order_id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleClose}
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
          <h2 style={{ textAlign: "center" }}>To'lagan qismi:</h2>
          <form onSubmit={this.handleSubmit}>
            <label className="col-md-4 col-form-label col-form-label-lg">
              Summa
            </label>
            <input
              className="col-md-12 form-control"
              type="number"
              name="paid_portion"
              value={this.state.paid_portion}
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
              onClick={this.handleClose}
            >
              Close
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ClientOrders;
