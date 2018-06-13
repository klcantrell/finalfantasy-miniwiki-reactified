import React, { Component } from 'react';
import CarouselControl from './CarouselControl';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  state = {
    activeItem: 0,
    prevActive: undefined,
  };
  
  handleChangeActive = (i) => {
   this.setState(prevState => (
   	{
    	activeItem: i,
      prevActive: prevState.activeItem,
    }
   ));
  }
  
  itemClassFromIdx(i) {
  	const { activeItem, prevActive } = this.state;
    const HIDDEN_RIGHT = 'carousel__item--hidden-right'
    const HIDDEN_LEFT = 'carousel__item--hidden-left';
    let skippedItemClasses = 'carousel__item--skipped';
  	if (i === activeItem) {
    	return 'carousel__item--active';
    }
    if (i === prevActive) {
    	return i > activeItem ?
      	HIDDEN_RIGHT :
        HIDDEN_LEFT;
    }
    if (i > activeItem) {
    	skippedItemClasses += ` ${HIDDEN_RIGHT}`;
    } else {
    	skippedItemClasses += ` ${HIDDEN_LEFT}`;
    }
    return skippedItemClasses;
  }
  
  controlClassFromIdx(i) {
  	const { activeItem } = this.state;
    return i === activeItem ?
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