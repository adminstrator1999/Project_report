import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryModal from "./forms/categoryModal";
import { CartContext } from "./contexts/cartContext";
import axios from "axios";
import { UserContext } from "./contexts/userContext";

class Navbar extends Component {
  static contextType = CartContext;
  state = {
    isOpen: false,
  };
  handleClick = () => {
    axios.post("user/logout/").then(localStorage.clear());
    this.context.setIs_superuser(false);
    this.context.setIs_logged_in(false);
  };
  showModal = () => {
    this.setState({ isOpen: true });
  };
  hideModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    let button;

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
          <span className="fa fa-bars"></span>
        </label>
        <input type="checkbox" id="btn" />
        <ul>
          <li>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li>
            <label htmlFor="btn-1" className="show">
              Yaratish+
            </label>
            <a href="#">Yaratish</a>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link to="/product/">Mahsulot</Link>
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
              Savdo+
            </label>
            <a href="#">Savdo</a>
            <input type="checkbox" id="btn-2" />
            <ul>
              <li>
                <Link to="/order/list/">Sotish </Link>
              </li>
              <li>
                <Link to="/buy/item/list/">Sotib olish</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/history/">Tarix</Link>
          </li>
          <li>
            <Link to="/report/">Xisobot</Link>
          </li>
          <li>
            <Link to="/storage/">Ombor</Link>
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
            <Link to="/order/cart/">
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
