import Axios from 'axios';

export const userAPI = {
    login,
    logout,
    register,
    getAll,
    getById,
    remove,
};

// POST: localhost:44376/user/authenticate
function login(data: any) {
    Axios.post('https://localhost:44376/user/authenticate', data)
        .then(function (response) {
            console.log(data);
            console.log(response);
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
        .catch(function (error) {
            console.log(data);
            console.log(error.headers);
            console.log(error);
        });
}

function logout() {
    localStorage.removeItem('user');
}

// GET: localhost:44376/user
function getAll() {
    Axios.get('https://localhost:44376/user')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// GET: localhost:44376/user/${id}
function getById(id: string) {
    Axios.get(`https://localhost:44376/user/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// POST: localhost:44376/user/register
function register(data: any) {
    let today = new Date().toISOString();
    data['date'] = today;

    Axios.post('https://localhost:44376/user/register', data)
        .then(function (response) {
            console.log(data);
            console.log(response);
        })
        .catch(function (error) {
            console.log(data);
            console.log(error);
        });
}

// DELETE: localhost:44376/user/${id}
function remove(id: string) {
    Axios.delete(`https://localhost:44376/user/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
