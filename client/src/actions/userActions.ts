import { userConstants } from '../constants';
import { userAPI } from '../api/user';
import { alertActions } from './alertActions';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    remove,
};

//FIXME: REMOVE "ANY" TYPES.

function login(data: any) {
    return (dispatch: any) => {
        dispatch(request({ data }));

        userAPI.login(data).then(
            user => {
                dispatch(success(user));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user: any) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user: any) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error: any) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userAPI.logout();
    return { type: userConstants.LOGOUT };
}

function register(data: any) {
    return (dispatch: any) => {
        dispatch(request(data));

        userAPI.register(data).then(
            data => {
                dispatch(success(data));
                dispatch(alertActions.success('Registration successful'));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user: any) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user: any) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error: any) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}

function getAll() {
    return (dispatch: any) => {
        dispatch(request());

        userAPI.getAll().then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
        );
    };

    function request() {
        return { type: userConstants.GETALL_REQUEST };
    }
    function success(users: any) {
        return { type: userConstants.GETALL_SUCCESS, users };
    }
    function failure(error: any) {
        return { type: userConstants.GETALL_FAILURE, error };
    }
}

function remove(id: any) {
    return (dispatch: any) => {
        dispatch(request(id));

        userAPI.remove(id).then(
            user => dispatch(success(id)),
            error => dispatch(failure(id, error.toString()))
        );
    };

    function request(id: any) {
        return { type: userConstants.DELETE_REQUEST, id };
    }
    function success(id: any) {
        return { type: userConstants.DELETE_SUCCESS, id };
    }
    function failure(id: any, error: any) {
        return { type: userConstants.DELETE_FAILURE, id, error };
    }
}
