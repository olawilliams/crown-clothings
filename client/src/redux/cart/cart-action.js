import cartActionType from './cart-actiontype';

export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionType.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: cartActionType.REMOVE_ITEM,
    payload: item
});

export const clearItem = (item) => ({
    type: cartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const getToken = token => ({
    type: cartActionType.GET_TOKEN,
    payload: token
});

export const setPayment = () => ({
    type: cartActionType.SET_PAYMENT
});