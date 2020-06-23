import { takeLatest, takeEvery, call, all, put, select } from 'redux-saga/effects';

import { getUserCartRef, getUserOrderRef } from '../../firebase/firebase-utils';
import { selectCartItem, selectTokenOrderItems } from './cart-selector';
import { selectCurrentUser  } from '../user/user-selector'
import {  clearCart, getCartfromFirebase, getOrderFromFirebase, clearToken} from './cart-action';
import cartActionType from './cart-actiontype';
import userActionType from '../user/user-actiontype'

export function* cartItemUpdate() {
 const currentUser = yield select(selectCurrentUser);


 if(currentUser) {
     try {
         const cartRef = yield getUserCartRef(currentUser.id);
         const cartItem = yield select(selectCartItem)
        yield cartRef.update({ cartItem })
     } catch (error) {
         console.log(error)
     }
 }
};

export function* clearCartAfterSignOut() {
    yield put(clearCart())
    yield put (clearToken())
};

export function* getUserCartAndOrderFromFirebase({ payload: user }) {
   
    try {
        const cartRef = yield getUserCartRef(user.id);
        const snapShot = yield cartRef.get();
        yield put(getCartfromFirebase(snapShot.data().cartItem));

        const orderDocRef =  yield getUserOrderRef(user.id);
        const orderSnapshot = yield orderDocRef.get();
        yield put(getOrderFromFirebase(orderSnapshot.data().order));    

    } catch(error) {
        console.log(error)
    }
}


export function* setOrdertoFirebase() {
    const currentUser = yield select(selectCurrentUser);
    const userId = currentUser.id

    try {
        if(currentUser) {
            const orders = yield select(selectTokenOrderItems);
            console.log(orders, currentUser.id, { orders })
            const orderDocRef = yield getUserOrderRef(userId);
            yield orderDocRef.set({  order: orders }, { merge: true})
        }
    } catch (error) {
        console.log(error)
    }
}

export function* onCartUpdate() {
    yield takeLatest([
                     cartActionType.ADD_ITEM,
                     cartActionType.REMOVE_ITEM,
                     cartActionType.CLEAR_ITEM_FROM_CART,
                     cartActionType.GET_TOKEN
                    ], cartItemUpdate)
};

export function* onSignOut() {
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartAfterSignOut)
}

export function* onSignIn() {
    yield takeEvery(userActionType.SIGN_IN_SUCCESS, getUserCartAndOrderFromFirebase)
};

export function* onPayment() {
    yield takeLatest(cartActionType.GET_TOKEN, setOrdertoFirebase)
};


export function* cartSagas() {
    yield all([
        call(onCartUpdate),
        call(onSignOut),
        call(onPayment),
       call(onSignIn)
    ])
}