import React from 'react';
// Higher order component. It's a function that takes a component and modifies it. 
// Returns new modified component.
import { withRouter } from 'react-router-dom'; // higher order component. it's basically a function that takes a component as an argument and modifies it

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

//By wrapping the exported component, this will give access to location, match, and history props.
export default withRouter(MenuItem);