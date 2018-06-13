import React from 'react';

const CarouselControl = ({classes, itemId, handleClick}) => (
	<div
    className="carousel__control-container"
    onClick={() => handleClick(itemId)}
  >
    <div className={`carousel__control ${classes}`} />
	</div>
);

export default CarouselControl;