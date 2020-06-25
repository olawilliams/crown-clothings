import React from 'react'

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';

import DirectoryStyled from './directory-styled-component';
import MenuItem from '../menu-item/menu-item-component';

const Directory = ({ sections }) => (
    <DirectoryStyled>{
            sections.map(({ id, title, imageUrl, size, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))
         }
    </DirectoryStyled>    
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});       

export default connect(mapStateToProps)(Directory);