import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    selectCart,
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
);

export const selectCartItemCount = createSelector(
    selectCartItem,
    cartItems => cartItems.reduce((accumulator, cartItem) => 
    accumulator + cartItem.quantity
, 0)
);

export const selectCartTotal = createSelector(
    selectCartItem,
    cartItems => cartItems.reduce((accumulator, cartItem) => 
    accumulator + cartItem.quantity * cartItem.price
    , 0)
 );

 export const selectToken = createSelector(
     selectCart,
     cart => cart.token[cart.token.length -1]
 );

 export const selectPaid = createSelector(
     selectCart,
     cart => cart.paid
 );

 export const selectTokenOrderItems = createSelector(
     selectCart,
     cart => cart.token
 );

 const convertTokenArrayToObject = createSelector(
     selectTokenOrderItems,
     token => token.reduce((acc, order) => {
        acc[order.created] = order;
        return acc;
     }, {})
 );

 export const selectTokenForOrderDetails = orderIdUrlParam => createSelector(
     convertTokenArrayToObject,
     token => token[orderIdUrlParam]
 );

 export const selectAddingItems = createSelector(
     selectCart,
     cart => cart.isAdding
 )


