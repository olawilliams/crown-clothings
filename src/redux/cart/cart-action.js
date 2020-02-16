import cartActionType from './cart-actiontype';

export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})