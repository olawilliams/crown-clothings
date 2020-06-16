import React from 'react';
import Directory from '../../components/Directory/Directory-component';

import './homepage-styles.scss'


const Homepage = ({ history }) => {
    return (
        <div className="homepage">   
            <div className="new">
                <p>NEW DESIGNS IN EVERY COLLECTION</p>
            </div>
                <Directory />
        </div>
         
    );
}

export default Homepage;