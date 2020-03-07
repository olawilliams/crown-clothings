import React from 'react';
import { Route } from 'react-router-dom';

import { connect }from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';

import CollectionPage from '../collections/collectionpage-component';
import CollectionOverview from '../../components/collection-overview/collection-overview-component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';

import WithSpinner from '../../components/withspinner/withspinner-component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOvervewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {
    state= {
        loading : true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
           
        collectionRef.get().then(snapshot => {
           
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
          this.setState({ loading: false});
        });
    }

    render() {
        const { match } = this.props;   
        const { loading } = this.state; 
        return (
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render= {props => (
         <CollectionOvervewWithSpinner isLoading={loading} {...props} />
            )}
        />
        <Route exact path={`${match.path}/:collectionId`} render = {props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
         />
    </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
    
export default connect(null, mapDispatchToProps)(ShopPage);