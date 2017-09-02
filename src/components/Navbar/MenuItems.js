import React from 'react';
import { Link, IndexLink } from 'react-router';

const MenuItems = () =>(
  <div>
    <IndexLink className = "navbar-vertical-link" activeClassName = 'active' to='/dashboard'>
      <span className = "icon icon-gauge-full nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Dashboard</span>
    </IndexLink>
      <Link className = "navbar-vertical-link" activeClassName = 'active' to='/'>
        <span className = "icon icon-user nav-icon-style"></span>
        <span className = "navbar-vertical-link-title">Login</span>
      </Link>
      {/*
      <Link className = "navbar-vertical-link" activeClassName = 'active' to='/'>
        <span className = "icon icon-queue-settings nav-icon-style"></span>
        <span className = "navbar-vertical-link-title">Ammenities</span>
      </Link>
      <Link className = "navbar-vertical-link" activeClassName = 'active' to='/'>
        <span className = "icon icon-queue-settings nav-icon-style"></span>
        <span className = "navbar-vertical-link-title">Dining</span>
      </Link>*/}

  </div>
)

export default MenuItems;
