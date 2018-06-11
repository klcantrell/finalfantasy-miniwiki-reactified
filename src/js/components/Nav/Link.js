import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({path, pic}) => {
  return (
    <NavLink className="nav__hero-container" to={path}>
      <img className="nav__hero" srcSet={pic.srcSet} src={pic.src} />
    </NavLink>
  );
};

export default Link;