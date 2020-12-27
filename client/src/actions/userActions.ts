import { userAPI } from '../api/user';
import { userConstants } from '../constants';
import { ILogin, IRegister } from '../types/userInterfaces';
import { history } from '../utils';
import { alertActions } from '../actions';

export const userActions = {
    login,
    logout,
    register,
    getAll,
};

function login(data: ILogin) {
    return (dispatch: any) => {
        dispatch(request(data));
        userAPI
            .login(data)
            .then(
                (response: any) => {
                    dispatch(success(response));
                    history.push('/home');
                },
                (error: any) => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            )
            .catch();
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

function register(data: IRegister) {
    return (dispatch: any) => {
        dispatch(request(data));

        userAPI.register(data).then(
            (response: any) => {
                dispatch(success(response));
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            },
            (error: any) => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
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
