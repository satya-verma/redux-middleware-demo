const {
    BUY_CAKE, BUY_ICECREAM, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} = require('../constants/constants');
const axios = require('axios');

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "buying cake"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "buying ice cream"
    }
}

function fetchUserRequest() {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

function fetchUserSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetchUserFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => dispatch(fetchUserFailure(error.message)));
    }
}

module.exports = {
    buyCake,
    buyIceCream,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchUsers
};