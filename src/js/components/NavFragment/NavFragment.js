import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Link from './Link';
import cloudPic from '../../../images/cloud-strife.jpg';
import tifaPic from '../../../images/tifa-lockhart.jpg';
import barretPic from '../../../images/barret-wallace.jpg';
import sephirothPic from '../../../images/sephiroth.jpg';
import aerithPic from '../../../images/aerith-gainsborough.jpg';
import vincentPic from '../../../images/vincent-valentine.jpg';

const picMapping = {
  'cloud-strife': cloudPic,
  'tifa-lockhart': tifaPic,
  'barret-wallace': barretPic,
  'sephiroth': sephirothPic,
  'aerith-gainsborough': aerithPic,
  'vincent-valentine': vincentPic,
}

const NavFragment = ({characters, currentGame}) => {
  return (
    <div className="nav__heroes">
      {characters.map((c,i) => (
        <Link key={i} path={`/${currentGame}/${c}`} pic={picMapping[c]} />
      ))}
    </div>
  );
};

const mapStateToProps = ({currentGame}) => {
  return {
    currentGame,
  };
}

export default withRouter(connect(mapStateToProps)(NavFragment));