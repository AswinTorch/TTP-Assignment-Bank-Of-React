import React, { Component } from "react";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  render() {
    return (
      <div>
        <h1>Debits</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Debits;
