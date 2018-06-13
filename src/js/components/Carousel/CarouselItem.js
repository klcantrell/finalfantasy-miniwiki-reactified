import React from 'react';

const CarouselItem = ({classes, children}) => (
	<div className={`carousel__item ${classes}`}>{children}</div>
);

export default CarouselItem;