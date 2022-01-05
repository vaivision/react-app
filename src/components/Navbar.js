import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
      localStorage.clear()
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    const divalign = {
      align:"center",
      border:"1px",
      width:"300px",
      padding:"10px"
    }

    
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" style={divalign}>
            <img src="CollabrationCare.png" width="250" height="350" alt="hexal logo" />
        </div>

        <div id="navbarBasicExample" className="navbar-menu" style={divalign}>
          <div className="navbar-start">
          <div className="navbar-brand" style={divalign}>
          <img src="contact.png" width="250" height="350" alt="hexal logo" />
          </div>
          <div className="navbar-item" style={divalign}>
            <a href="/" className="navbar-item">
              Home
            </a>
            {/* <a href="/products" className="navbar-item">
              Products
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a> */}
            {this.props.auth.isAuthenticated && (
              
                  <a href="/patient" className="navbar-item">
                    Patient
                  </a>
              

                )}
                </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
