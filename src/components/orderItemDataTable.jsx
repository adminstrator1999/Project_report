import React, { Component } from "react";
import { MDBDataTableV5, MDBLink, MDBBtn } from "mdbreact";
import OrderItemModal from "./forms/orderItemModal";
import axios from "axios";
class OrderItemDatatable extends Component {
  state = {
    datatable: {
      columns: [
        {
          label: "Product name",
          field: "product_name",
          width: 400,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Product name",
          },
        },
        {
          label: "Rest",
          field: "rest",
          width: 400,
          sort: "disabled",
        },
        {
          label: "Price",
          field: "last_price",
          width: 400,
          sort: "disabled",
        },
        {
          label: "Sell",
          field: "sell",
          width: 400,
          sort: "disabled",
        },
      ],
      rows: [],
    },
    errorMsg: "",
    isOpen: false,
    product_name: "",
    product_id: 0,
  };
  showModal = (product) => {
    this.setState({
      isOpen: true,
      product_name: product.product_name,
      product_id: product.product_id,
    });
  };
  hideModal = () => {
    this.setState({ isOpen: false });
  };
  componentDidMount() {
    axios
      .get("order/order-item-list/")
      .then((response) => {
        this.setState((prevState) => {
          let datatable = Object.assign({}, prevState.datatable);
          datatable.rows = response.data.map((product) => {
            return {
              product_name: product.product_name,
              rest: product.rest,
              last_price: product.last_price,
              sell: (
                <MDBBtn
                  className="btn btn-primary sm"
                  onClick={() => this.showModal(product)}
                >
                  sell
                </MDBBtn>
              ),
            };
          });
          return { datatable };
        });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error happened while retrieving" });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "30px" }}>
          <OrderItemModal
            handleClose={this.hideModal}
            isOpen={this.state.isOpen}
            product_name={this.state.product_name}
            product_id={this.state.product_id}
          />
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={this.state.datatable}
            fullPagination
            searchTop
            searchBottom={false}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default OrderItemDatatable;
