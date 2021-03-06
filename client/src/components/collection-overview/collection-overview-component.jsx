import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionForPreview } from '../../redux/shop/shop-selectors';

import CollectionPreview from '../colletion-preview/collection-preview-component';

import './collection-overview-styles.scss';

const CollectionOverview = ({ collections }) =>{
  if(collections === {}) {
    console.log('empty')
 
  }
return  (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);