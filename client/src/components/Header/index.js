import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiNavLink from '../LiNavLink';

import './style.css';

class Header extends Component {
  render() {
    return (
      <div role="navigation" className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><Link to="/" className="navbar-brand">Program Name</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <LiNavLink activeClassName='active' exact={true} to="/">Home</LiNavLink>
              <LiNavLink activeClassName='active' exact={true} to="/about">About</LiNavLink>
              <LiNavLink activeClassName='active' exact={true} to="/contact">Contact</LiNavLink>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;