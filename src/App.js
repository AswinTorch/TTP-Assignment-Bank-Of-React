import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import axios from "axios";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      debitTotal: 0,
      creditTotal: 0,
      debits: [],
      credits: [],
      currentUser: {
        userName: "clarkkent",
        memberSince: "04/08/98",
      },
    };
  }

  componentDidMount() {
    // Fetches debit data
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        let data = response.data;

        this.setState({
          debits: data,
        });

        let debitTotal = 0;

        for (let obj of data) {
          debitTotal += obj.amount;
        }

        this.setState({
          debitTotal,
        });
      }) // Error handling
      .catch((error) => {
        console.log(error);
      });

    // Fetches credit data
    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        let data = response.data;
        this.setState({
          credits: data,
        });

        let creditTotal = 0;
        for (let obj of data) {
          creditTotal += obj.amount;
        }

        this.setState({
          creditTotal,
        });
      }) // Error handling
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Looks for change in credits and updates totals as necessary
    if (prevState.credits !== this.state.credits) {
      let creditTotal = 0;
      for (let obj of this.state.credits) {
        creditTotal += obj.amount;
      }
      creditTotal = creditTotal.toFixed(2);

      this.setState({
        creditTotal,
      });
    }

    // Looks for change in debits and updates totals as necessary
    if (prevState.debits !== this.state.debits) {
      let debitTotal = 0;
      for (let obj of this.state.debits) {
        debitTotal += obj.amount;
      }
      debitTotal = debitTotal.toFixed(2);

      this.setState({
        debitTotal,
      });
    }

    // Looks for change in credit or debit totals and updates totals as necessary
    if (
      prevState.debitTotal !== this.state.debitTotal ||
      prevState.creditTotal !== this.state.creditTotal
    ) {
      let accountBalance = (
        this.state.creditTotal - this.state.debitTotal
      ).toFixed(2);
      this.setState({
        accountBalance,
      });
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  addCredit = (credit) => {
    credit.id = (Math.random() * 300).toString();
    const date = new Date();
    credit.date = date.toISOString();
    const newCredits = [credit, ...this.state.credits];

    this.setState({ credits: newCredits });
  };

  addDebit = (debit) => {
    debit.id = (Math.random() * 300).toString();
    const date = new Date();
    debit.date = date.toISOString();
    const newDebits = [debit, ...this.state.debits];

    this.setState({ debits: newDebits });
  };

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props}
      />
    );

    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        creditTotal={this.state.creditTotal}
        addCredit={this.addCredit}
      />
    );

    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
        debitTotal={this.state.debitTotal}
        addDebit={this.addDebit}
      />
    );

    return (
      <Router>
        <div className="container">
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
