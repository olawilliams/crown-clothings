import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clearCart } from './cart-action';

import userActionType from '../user/user-actiontype'

export function* clearCartOnSignOut() {
    yield put(clearCart());
};
export function* onClearCartSignOut() {
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut )
}

export function* cartSagas() {
    yield all([call(onClearCartSignOut)])
};