import React, { Component, createContext } from "react";
export const UserContext = createContext();
class UserProvider extends Component {
  setIs_superuser = (is_superuser) => {
    this.setState({
      is_superuser: is_superuser,
    });
  };
  setIs_logged_in = (is_logged_in) => {
    this.setState({
      is_logged_in: is_logged_in,
    });
  };
  state = {
    is_superuser: "",
    is_logged_in: "",
    setIs_superuser: this.setIs_superuser,
    setIs_logged_in: this.setIs_logged_in,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
