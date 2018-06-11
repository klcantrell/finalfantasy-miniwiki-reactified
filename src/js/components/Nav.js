import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/cloud-strife">Cloud Strife</NavLink>
      <NavLink to="/tifa-lockhart">Tifa Lockhart</NavLink>
      <NavLink to="/barret-wallace">Barret Wallace</NavLink>
    </nav>
  );
};

export default Nav;