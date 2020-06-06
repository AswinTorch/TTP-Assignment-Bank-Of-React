import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 mb-4">User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div className="mb-4">Member Since: {this.props.memberSince}</div>

        <Link className="btn btn-dark" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default UserProfile;
