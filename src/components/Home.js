import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="mt-4 mb-4">
        <div className="form-inline mb-4">
          <img
            src="http://1.bp.blogspot.com/-nXgPhmECfAQ/T5_AMJI1V0I/AAAAAAAAALk/91cvlzlN78Q/s1600/Bank.jpg"
            alt="bank"
            style={{ width: 50, height: 50 }}
            className="mr-2"
          />
          <h1>Bank of React</h1>
        </div>

        <Link to="/userProfile">User Profile</Link>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
