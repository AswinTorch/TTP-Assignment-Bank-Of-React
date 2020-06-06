import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        password: "",
      },
      redirect: false,
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    return (
      <div>
        {/* Header */}
        <div className="d-flex form-inline justify-content-between mt-4 mb-4">
          <h1 className="">Login</h1>
          <Link className="btn btn-dark" to="/">
            Back to Home
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.user.userName}
              className="form-control mb-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control mb-3"
            />
          </div>
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
