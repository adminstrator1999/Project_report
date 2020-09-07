import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { HistoryContext } from "./contexts/historyContext";
import ClientOrders from "./clientOrders";
class History extends Component {
  state = { clients: [], client_orders: [] };
  // static contextType = HistoryContext;
  handleSearch = () => {
    this.setState();
  };
  // handleClick = (client_id) => {
  //   this.props.history.push(`/history/${client_id}/`);
  //   // let obj = { client_id: client_id };
  //   // axios
  //   //   .post("http://127.0.0.1:8000/report/history/", obj)
  //   //   .then((response) => {
  //   //     this.setState({ client_orders: response.data });
  //   //   });
  // };
  componentDidMount() {
    axios
      .get("report/history/")
      .then((response) => {
        this.setState({ clients: response.data });
        // this.context.setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let clients = this.state.clients;
    // let clients = this.context.clients;
    return (
      <React.Fragment>
        <div
          className="row"
          style={{ margin: "auto", maxWidth: "600px", marginTop: "25px" }}
        >
          <input
            type="text"
            onChange={this.handleSearch}
            className="form form-control"
            style={{
              height: "35px",
              maxWidth: "85%",
              //   margin: "auto",
            }}
            placeholder="Search"
          />
          <button type="submit" style={{ width: "15%" }}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div
          className="responsive-table"
          style={{
            margin: "auto",
            maxWidth: "800px",
            marginTop: "30px",
            maxHeight: "500px",
            overflow: "scroll",
          }}
        >
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr style={{ borderRadius: "10px" }}>
                <th scope="col">#</th>
                <th scope="col">Client name</th>
                <th scope="col">Savdo turi</th>
                <th scope="col">Nasiya miqdori</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.client_id}>
                  <th scope="row">{clients.indexOf(client) + 1}</th>
                  <td>
                    <Link
                      to={{
                        pathname: `/history/${client.client_id}`,
                      }}
                    >
                      {client.name}
                    </Link>
                  </td>
                  <td>{client.type}</td>
                  <td>{client.unpaid_portion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default History;
