import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect }from 'react-redux';

import CollectionPage from '../collections/collectionpage-component';
import CollectionOverview from '../../components/collection-overview/collection-overview-component';

import { fetchCollectionsStart} from '../../redux/shop/shop-actions'
import { selectIsCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/withspinner/withspinner-component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOvervewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = ({ fetchCollectionsStart, match, isCollectionsFetching, isCollectionsLoaded }) => {
    useEffect( () => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
    
        return (
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render= {props => (
         <CollectionOvervewWithSpinner 
            isLoading={isCollectionsFetching} 
            {...props} 
         />
            )}
        />
        <Route exact path={`${match.path}/:collectionId`} render = {props => (
            <CollectionPageWithSpinner 
                isLoading={!isCollectionsLoaded} 
                {...props}
            />
        )}
         />
    </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())  
});
    
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);