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

export const addItemStart = () => ({
    type: cartActionType.ADD_ITEM_START
});

export const addItemSuccess = (item) => ({
    type: cartActionType.ADD_ITEM_SUCCESS,
    payload: item
});

export const addItemFailure = error => ({
    type: cartActionType.ADD_ITEM_FAILURE,
    payload: error
});

export const clearCart = () => ({
    type: cartActionType.CLEAR_CART
});

export const getCartfromFirebase = cartItems  => ({
    type: cartActionType.GET_CART_FROM_FIREBASE,
    payload:cartItems
});

export const getOrderFromFirebase = orderItems => ({
    type: cartActionType.GET_ORDERS_FROM_FIREBASE,
    payload: orderItems
});

export const clearToken = () => ({
    type: cartActionType.CLEAR_TOKEN
});

export const isAddingItem = () => ({
    type: cartActionType.SET_IS_ADDING
})
