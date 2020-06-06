import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import InfoCard from "./InfoCard";

class Debits extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">Debits</h1>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div className="mb-4">
          <strong>Debit Total</strong>:{" "}
          <span className="badge badge-pill badge-danger">
            ${this.props.debitTotal}
          </span>
        </div>
        {/* View Debits */}
        <div className="row">
          {this.props.debits.map((debit) => {
            let date = new Date(debit.date);

            return (
              <div className="col-4 mb-4" key={debit.id}>
                <InfoCard
                  description={debit.description}
                  amount={debit.amount}
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

export default Debits;
