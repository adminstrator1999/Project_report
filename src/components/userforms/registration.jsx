import React, { Component } from "react";
import axios from "axios";
class Registration extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    company: "",
    password: "",
    confirmation_password: "",
    errors: "",
    company_list: [],
  };
  componentDidMount() {
    axios.get("product/company/").then((response) => {
      this.setState({ company_list: response.data });
    });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  handleCompany = (event) => {
    this.setState({ company: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("user/register/", this.state)
      .then((response) => {
        if (response.status === 201) {
          this.props.history.push("/");
          this.setState({});
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          let key = Object.keys(error.response.data)[0];
          this.setState({ errors: error.response.data[key] });
        }
      });
  };
  render() {
    let company_list = this.state.company_list;
    return (
      <React.Fragment>
        <div className="form__style userBox">
          {this.state.errors ? (
            <div className="alert alert-danger" role="alert">
              {this.state.errors}
            </div>
          ) : (
            <div></div>
          )}
          <form onSubmit={this.handleSubmit}>
            <h1 style={{ marginBottom: "20px" }}>Registration</h1>
            <div className="row">
              <input
                required
                name="first_name"
                className="txtb col-md-5 userInput"
                type="text"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
              <input
                required
                name="last_name"
                className="txtb col-md-5 userInput"
                type="text"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
            </div>
            <div className="row">
              <input
                required
                name="username"
                className="txtb col-md-5 userInput"
                type="tel"
                placeholder="Phone number"
                onChange={this.handleChange}
                value={this.state.phone}
              />
              <select
                value={this.state.company}
                name="company"
                onChange={this.handleCompany}
                className="txtb col-md-5 userInput"
              >
                {company_list.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>

              {/* <input
                required
                name="company"
                className="txtb col-md-5 userInput"
                type="text"
                placeholder="Company name"
                onChange={this.handleChange}
                value={this.state.company}
              /> */}
            </div>
            <div className="row">
              <input
                required
                name="password"
                className="txtb col-md-5 userInput"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <input
                required
                name="confirmation_password"
                className="txtb col-md-5 userInput"
                type="password"
                placeholder="Confirmation password"
                onChange={this.handleChange}
                value={this.state.confirmation_password}
              />
            </div>
            <button className="form__button userButton" type="submit">
              Ro'yxatdan o'tish
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;
