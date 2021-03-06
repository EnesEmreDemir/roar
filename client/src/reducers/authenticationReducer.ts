import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('userCredentials') || '{}');
const initialState = user ? { loggedIn: true, user } : {};

export function authenticationReducer(state = initialState, action: any) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
