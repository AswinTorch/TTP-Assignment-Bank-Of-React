import React, { Component } from "react";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">Debits</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div>
          <strong>Debit Total</strong>:{" "}
          <span className="badge badge-pill badge-danger">
            ${this.props.debitTotal}
          </span>
        </div>
      </div>
    );
  }
}

export default Debits;
