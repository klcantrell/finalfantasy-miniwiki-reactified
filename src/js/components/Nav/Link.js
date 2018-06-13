import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Link extends Component {
  state = {
    fullLoaded: false,
  };

  fullImageLoaded = () => {
    this.setState({
      fullLoaded: true,
    })
  }

  render() {
    const { path, pic } = this.props;
    const { fullLoaded } = this.state;
    return (
      <NavLink activeStyle={{	borderBottom: "8px solid rgba(186, 213, 234, 1)" }} className="nav__hero-container" to={path}>
        <img className="nav__hero-preview" src={pic.placeholder} />
        <img onLoad={this.fullImageLoaded} className={`nav__hero ${fullLoaded ? 'nav__hero--loaded' : ''}`} sizes='(min-width: 750px) 240px, 150px' srcSet={pic.srcSet} src={pic.src} />
      </NavLink>
    );
  }
}


export default Link;