import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Link from './Link';
import { fetchImg } from '../../helpers';
import cloudPic from '@/images/ff7/cloud-strife.jpg';
import tifaPic from '@/images/ff7/tifa-lockhart.jpg';
import barretPic from '@/images/ff7/barret-wallace.jpg';
import sephirothPic from '@/images/ff7/sephiroth.jpg';
import aerithPic from '@/images/ff7/aerith-gainsborough.jpg';
import vincentPic from '@/images/ff7/vincent-valentine.jpg';
import squallPic from '@/images/ff8/squall-leonhart.jpg';
import rinoaPic from '@/images/ff8/rinoa-heartilly.jpg';
import zellPic from '@/images/ff8/zell-dincht.jpg';
import quistisPic from '@/images/ff8/quistis-trepe.jpg';
import seiferPic from '@/images/ff8/seifer-almasy.jpg';
import selphiePic from '@/images/ff8/selphie-tilmitt.jpg';

const picMapping = {
  'cloud-strife': cloudPic,
  'tifa-lockhart': tifaPic,
  'barret-wallace': barretPic,
  'sephiroth': sephirothPic,
  'aerith-gainsborough': aerithPic,
  'vincent-valentine': vincentPic,
  'squall-leonhart': squallPic,
  'rinoa-heartilly': rinoaPic,
  'zell-dincht': zellPic,
  'quistis-trepe': quistisPic,
  'seifer-almasy': seiferPic,
  'selphie-tilmitt': selphiePic,
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