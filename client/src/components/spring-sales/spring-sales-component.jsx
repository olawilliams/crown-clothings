import React from 'react';
import './spring-sales-styles.scss';
import { Link } from 'react-router-dom';

const SpringSales = () => (
    <div className='spring' >
        <Link to='/shop/jackets' >
            <p className='option'>SPRING SALES! 50% OFF ALL JACKETS</p>
        </Link>
    </div>
);

export default SpringSales;