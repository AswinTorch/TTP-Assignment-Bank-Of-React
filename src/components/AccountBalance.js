import React, { Component } from "react";

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <strong>Account Balance</strong>:{" "}
        <span className="badge badge-pill badge-light">
          ${this.props.accountBalance}
        </span>
      </div>
    );
  }
}

export default AccountBalance;
