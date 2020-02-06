import React from 'react';
import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/colletion-preview/collection-preview-component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
     render(){
         const { collections } = this.state;
        return (
            <div>
               {
                   collections.map(({id, title, routename, items }) => {
                    return  (
                        <CollectionPreview key={id} title={title} routename={routename} items={items} />
                       )}
                    )
                }
            </div>
        );
    }  
}

export default ShopPage;