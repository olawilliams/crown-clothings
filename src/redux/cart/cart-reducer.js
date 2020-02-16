import cartActionType from './cart-actiontype';
import { addItemToCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
};

const cartReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case cartActionType.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            }
        case cartActionType.ADD_ITEM :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
         return state;
    }
}

export default cartReducer;