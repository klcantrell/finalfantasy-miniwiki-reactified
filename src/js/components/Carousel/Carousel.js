import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePage } from '../../actionCreators';
import CarouselControl from './CarouselControl';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  
  itemClassFromIdx(i) {
    const { activePage, prevActive } = this.props;
    const HIDDEN_RIGHT = 'carousel__item--hidden-right'
    const HIDDEN_LEFT = 'carousel__item--hidden-left';
    let skippedItemClasses = 'carousel__item--skipped';
  	if (i === activePage) {
    	return 'carousel__item--active';
    }
    if (i === prevActive) {
    	return i > activePage ?
      	HIDDEN_RIGHT :
        HIDDEN_LEFT;
    }
    if (i > activePage) {
    	skippedItemClasses += ` ${HIDDEN_RIGHT}`;
    } else {
    	skippedItemClasses += ` ${HIDDEN_LEFT}`;
    }
    return skippedItemClasses;
  }
  
  controlClassFromIdx(i) {
  	const { activePage } = this.props;
    return i === activePage ?
    	'carousel__control--active' :
      '';
  }
  
  render() {
  	const { children: items, updatePage } = this.props;
  	return (
    	<div className="carousel">
        <div className="carousel__items">
          {items.map((item, idx) => (
          	<CarouselItem
              key={idx}
              classes={this.itemClassFromIdx(idx)}
            >
          	  {item}  
          	</CarouselItem> 
          ))}
          <div className="carousel__controls">
            {items.map((item, idx) => (
              <CarouselControl
                key={idx}
                itemId={idx}
                handleClick={() => updatePage(idx)}
                classes={this.controlClassFromIdx(idx)}
              />
            ))}
          </div>
        </div>
    	</div>
    )
  }
}

const mapStateToProps = ({activePage, prevActive}) => {
  return {
    activePage,
    prevActive,
  };
}

export default withRouter(connect(mapStateToProps, { updatePage })(Carousel));