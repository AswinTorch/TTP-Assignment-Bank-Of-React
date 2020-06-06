import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import InfoCard from "./InfoCard";

class Credits extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">Credits</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div className="mb-4">
          <strong>Debit Total</strong>:{" "}
          <span className="badge badge-pill badge-success">
            ${this.props.creditTotal}
          </span>
        </div>
        {/* View Debits */}
        <div className="row">
          {this.props.credits.map((credit) => {
            let date = new Date(credit.date);
            return (
              <div className="col-4 mb-4" key={credit.id}>
                <InfoCard
                  description={credit.description}
                  amount={credit.amount}
                  date={date.toLocaleDateString()}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Credits;
