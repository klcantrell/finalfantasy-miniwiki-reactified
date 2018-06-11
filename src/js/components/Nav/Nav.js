import React from 'react';
import Link from './Link';
import cloudPic from '../../../images/cloud-strife.jpg';
import tifaPic from '../../../images/tifa-lockhart.jpg';
import barretPic from '../../../images/barret-wallace.jpg';

const Nav = () => {
  return (
    <nav className="nav__heros">
      <Link path="/cloud-strife" pic={cloudPic} />
      <Link path="/tifa-lockhart" pic={tifaPic} />
      <Link path="/barret-wallace" pic={barretPic} />
    </nav>
  );
};

export default Nav;