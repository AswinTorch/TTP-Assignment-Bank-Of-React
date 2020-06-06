import React, { Component } from "react";

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <strong>Balance</strong>: ${this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;
