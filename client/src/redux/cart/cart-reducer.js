import cartActionType from './cart-actiontype';
import { addItemToCart, removeItemFromCart } from './cart-utils';

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
            };
        case cartActionType.ADD_ITEM :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case cartActionType.REMOVE_ITEM :
            return {
                ...state, 
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case cartActionType.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id)
            };
        case cartActionType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
         return state;
    }
}

export default cartReducer;