import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
   <>
   <div className="Container-fluid-nav-bg">
      <div className='row'>
         <div className="col-10 max-auto">
         
    <header className="header" id="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <i className="ri-home-fill"></i>INNOVAIT-ON            
        </NavLink>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink activeClassName="menu_active"
              to="/" 
              className="nav__link active-link">
                <i className="ri-home-line"></i>
                <span> HOME </span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink activeClassName="menu_active"
              to="events" className="nav__link">
              <i className="ri-calendar-event-fill"></i>
                <span> EVENTS </span>
              </NavLink>
            </li>


            <li className="nav__item">
              <NavLink activeClassName="menu_active"
              to="newsletter" className="nav__link">
              <i className="ri-newspaper-line"></i>
                <span> NEWSLETTER </span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink activeClassName="menu_active"
              to="members" className="nav__link">
                <i className="ri-group-line"></i>
                <span> MEMBERS </span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav__actions">
          {/* <!-- search button --> */}
          <i className="ri-search-line search-button" id="search-button"></i>

          {/* <!-- login button --> */}
          <i className="ri-user-add-line login-button" id="login-button"></i>

          {/* <!-- theme button --> */}
          <i className="ri-moon-line change-theme" id="theme-button"></i>
        </div>
      </nav>
    </header>
    </div>
   </div>
   </div>
    </>
  );
};

export default Navbar;
