import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="bg-color:blue">
              <b>Welcome to the BIT MESRA CLUBS section </b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Join us to get the latest updates on the clubs and events happening in BIT Mesra.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable red accent-4"
              >
                Sign Up
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
