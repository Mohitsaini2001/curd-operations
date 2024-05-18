import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'
import{useAuth0} from '@auth0/auth0-react'



function Menu() {

  let{loginWithPopup,loginWithRedirect,logout,user,isAuthenticated}=useAuth0()

  return (

    
    <>
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link "  to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/create" activeClassName="active">UserCreate</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/search" activeClassName="active">UserSearch</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/update" activeClassName="active">UserUpdate</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/read" activeClassName="active">UserRead</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " onClick={loginWithPopup}  to='/Loginpop' activeClassName="active">Login withpop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " onClick={loginWithRedirect} to='Loginred' activeClassName="active">Login withredirect</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " onClick={logout} to='/Logout' activeClassName="active">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    <div>
{isAuthenticated?"welcome "+user.name:
"logout"
}

    </div>
    </>
  );
}

export default Menu;
