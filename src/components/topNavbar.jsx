import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryModal from "./forms/categoryModal";
import { CartContext } from "./contexts/cartContext";
import axios from "axios";

class Navbar extends Component {
  static contextType = CartContext;
  state = {
    isOpen: false,
    display: "none",
  };
  handleClick = () => {
    axios.post("user/logout/").then(localStorage.clear());
    this.context.setIs_superuser(false);
    this.context.setIs_logged_in(false);
    if (window.innerWidth > 968) {
      this.setState({ display: "block" });
    } else if (this.state.display === "block") {
      this.setState({
        display: "none",
      });
    }
  };
  showModal = () => {
    this.setState({ isOpen: true });
  };
  hideModal = () => {
    this.setState({ isOpen: false });
  };
  handleNavClose = () => {
    if (window.innerWidth > 968) {
      this.setState({ display: "block" });
    } else if (this.state.display === "block") {
      this.setState({
        display: "none",
      });
    }
  };
  handleNavOpen = () => {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "none" });
    }
  };
  componentDidMount() {
    this.handleNavResponsive();
    console.log(this.style);
  }
  handleNavResponsive = () => {
    if (window.innerWidth < 968) {
      this.setState({ display: this.state.display });
    } else {
      this.setState({ display: "block" });
    }
  };
  render() {
    let button;
    let style = this.state.display;
    if (this.context.is_logged_in) {
      if (this.context.is_superuser) {
        button = (
          <ul>
            <li>
              <Link to="/register/">Register</Link>
            </li>
            <li>
              <Link to="/" onClick={this.handleClick}>
                Logout
              </Link>
            </li>
          </ul>
        );
      } else {
        button = (
          <ul>
            <li>
              <Link to="/" onClick={this.handleClick}>
                Chiqish
              </Link>
            </li>
          </ul>
        );
      }
    } else {
      button = (
        <ul>
          <li>
            <Link to="/login/">Kirish</Link>
          </li>
        </ul>
      );
    }
    return (
      <nav>
        <div className="logo">Bahromjon</div>
        <label htmlFor="btn" className="icon">
          <span className="fa fa-bars" onClick={this.handleNavOpen}></span>
        </label>
        <input type="checkbox" id="btn" />

        <ul style={{ display: style }}>
          <li>
            <Link to="/" onClick={this.handleNavClose}>
              <i className="fas fa-home m-2"></i>Bosh sahifa
            </Link>
          </li>
          <li>
            <label htmlFor="btn-1" className="show">
              Yaratish<i className="fas fa-plus m-2"></i>
            </label>
            <a href="#">
              <i className="fas fa-plus m-2"></i>Yaratish
            </a>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link to="/product/" onClick={this.handleNavClose}>
                  Mahsulot
                </Link>
              </li>
              <li>
                <CategoryModal
                  isOpen={this.state.isOpen}
                  handleClose={this.hideModal}
                />
                <a href="#" onClick={this.showModal}>
                  Kategoriya
                </a>
              </li>
            </ul>
          </li>

          <li>
            <label htmlFor="btn-2" className="show">
              Savdo<i className="fas fa-plus m-2"></i>
            </label>
            <a href="#">
              <i className="fas fa-plus m-2"></i>Savdo
            </a>
            <input type="checkbox" id="btn-2" />
            <ul>
              <li>
                <Link to="/order/list/" onClick={this.handleNavClose}>
                  Sotish{" "}
                </Link>
              </li>
              <li>
                <Link to="/buy/item/list/" onClick={this.handleNavClose}>
                  Sotib olish
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/history/" onClick={this.handleNavClose}>
              <i className="fas fa-history m-2"></i>Tarix
            </Link>
          </li>
          <li>
            <Link to="/report/" onClick={this.handleNavClose}>
              <i className="fas fa-book m-2"></i>Xisobot
            </Link>
          </li>
          <li>
            <Link to="/storage/" onClick={this.handleNavClose}>
              <i className="fas fa-database m-2"></i>Ombor
            </Link>
          </li>
          <li>
            <label htmlFor="btn-3" className="show">
              <i className="fas fa-user"></i>
            </label>
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
            <input type="checkbox" id="btn-3" />
            {button}
          </li>
          <li>
            <Link to="/order/cart/" onClick={this.handleNavClose}>
              <i className="fas fa-shopping-cart"></i>
              <span className="badge badge-pill badge-secondary">
                {this.context.itemCount}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
