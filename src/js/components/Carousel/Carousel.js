import React, { Component } from 'react';
import CarouselControl from './CarouselControl';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  
  handleChangeActive = (i) => {
    this.props.syncPage(i);
  }
  
  itemClassFromIdx(i) {
    const { currentPage, prevPage } = this.props;
    const HIDDEN_RIGHT = 'carousel__item--hidden-right'
    const HIDDEN_LEFT = 'carousel__item--hidden-left';
    let skippedItemClasses = 'carousel__item--skipped';
  	if (i === currentPage) {
    	return 'carousel__item--active';
    }
    if (i === prevPage) {
    	return i > currentPage ?
      	HIDDEN_RIGHT :
        HIDDEN_LEFT;
    }
    if (i > currentPage) {
    	skippedItemClasses += ` ${HIDDEN_RIGHT}`;
    } else {
    	skippedItemClasses += ` ${HIDDEN_LEFT}`;
    }
    return skippedItemClasses;
  }
  
  controlClassFromIdx(i) {
  	const { currentPage } = this.props;
    return i === currentPage ?
    	'carousel__control--active' :
      '';
  }
  
  render() {
  	const { children: items } = this.props;
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
        </div>
        <div className="carousel__controls">
          {items.map((item, idx) => (
          	<CarouselControl
              key={idx}
              itemId={idx}
              handleClick={this.handleChangeActive}
              classes={this.controlClassFromIdx(idx)}
            />
          ))}
        </div>
    	</div>
    )
  }
}

export default Carousel;