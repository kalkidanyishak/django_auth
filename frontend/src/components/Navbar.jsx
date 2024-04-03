import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({logout, isAuthenticated}) => {

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout}>Logout</a>
        </li>
    );
  return (
    <nav className="">
      <Link className="" to="/">
        Auth System
      </Link>
      <button
        className=""
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className=""></span>
      </button>
      <div className="" id="navbarNav">
        <ul className="">
          <li className="">
            <Link className="" to="/">
              Home <span className=""></span>
            </Link>
          </li>
          {isAuthenticated ? authLinks() : guestLinks()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);
