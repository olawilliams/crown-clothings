import { userActionType } from './user-actiontype';

export const setCurrentUser = user => ({
    type: userActionType.SET_CURRENT_USER,
    payload: user
});