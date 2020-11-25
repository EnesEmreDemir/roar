import Axios from 'axios';
import { ILogin, IRegister } from '../types/userInterfaces';
export const userAPI = {
    login,
    logout,
    register,
    getAll,
    getById,
    remove,
};

// POST: localhost:44376/user/authenticate
function login(data: ILogin) {
    return Axios.post('https://localhost:44376/user/authenticate', data)
        .then(function (response) {
            console.log(response);
        })
        .then(user => {
            localStorage.setItem('userCredentials', JSON.stringify(user));
            return user;
        })
        .catch(function (error) {
            console.log(error.headers);
            console.log(error);
        });
}

function logout() {
    localStorage.removeItem('userCredentials');
}

// GET: localhost:44376/user
function getAll() {
    return Axios.get('https://localhost:44376/user')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// GET: localhost:44376/user/${id}
function getById(id: string) {
    return Axios.get(`https://localhost:44376/user/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// POST: localhost:44376/user/register
function register(data: IRegister) {
    data.date = new Date().toISOString();

    return Axios.post('https://localhost:44376/user/register', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// DELETE: localhost:44376/user/${id}
function remove(id: string) {
    return Axios.delete(`https://localhost:44376/user/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
