import React from 'react';

import './custom-button.styles.scss';

//stateless functional component
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;