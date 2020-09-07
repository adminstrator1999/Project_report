import React, { Component } from "react";
import axios from "axios";
import { CartContext } from "../contexts/cartContext";
class Login extends Component {
  static contextType = CartContext;
  state = { username: "", password: "" };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("user/login/", this.state)
      .then((response) => {
        if (response.status == 200) {
          this.context.setIs_superuser(JSON.parse(response.data.is_superuser));
          this.context.setIs_logged_in(JSON.parse(response.data.is_logged_in));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_superuser", response.data.is_superuser);
          localStorage.setItem("is_logged_in", response.data.is_logged_in);
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        if (error.response.status == 400) {
          let key = Object.keys(error.response.data)[0];
          this.setState({ errors: error.response.data[key] });
        }
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="form__style" style={{ width: "300px" }}>
          {this.state.errors ? (
            <div className="alert alert-danger" role="alert">
              {this.state.errors}
            </div>
          ) : (
            <div></div>
          )}
          <form onSubmit={this.handleSubmit}>
            <h1 style={{ marginBottom: "20px" }}>Login</h1>
            <input
              required
              name="username"
              className="txtb"
              type="tel"
              placeholder="Phone number"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <input
              required
              name="password"
              className="txtb"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button className="form__button " type="submit">
              Tizimga kirish
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
