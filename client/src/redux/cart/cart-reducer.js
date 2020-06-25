import cartActionType from './cart-actiontype';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    isAdding: false,
    token: [],
    paid: false,
    errorMessage: null
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
                cartItems: addItemToCart(state.cartItems, action.payload),
                isAdding: true
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
        };

        case cartActionType.CLEAR_TOKEN: 
            return {
                ...state,
                token: []
            }

        case cartActionType.GET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            }

        case cartActionType.GET_TOKEN:
            return {
                ...state,
                cartItems: [],
                paid: true,
                token: [...state.token, action.payload]
            }

        case cartActionType.GET_ORDERS_FROM_FIREBASE:
            return {
                ...state,
                token: action.payload
            }

        case cartActionType.SET_PAYMENT:
            return {
                ...state,
                paid: false
            }

        case cartActionType.SET_IS_ADDING: {
            return {
                ...state,
                isAdding: false
            }
        }
        default:
         return state;
    }
}

export default cartReducer;