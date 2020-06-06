import React, { Component } from "react";
import AccountBalance from "./AccountBalance";

class Credits extends Component {
  render() {
    return (
      <div>
        <h1>Credits</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Credits;
