const {
    BUY_CAKE, BUY_ICECREAM, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} = require('../constants/constants');

const initialCakeState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return state;
    }
}

// .......................................................................

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
        default:
            return state;
    }
}

// .......................................................................

const intialUserState = {
    loading: false,
    users: [],
    error: ""
}

const usersReducer = (state = intialUserState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            return { loading: false, users: action.payload, error: "" };
        case FETCH_USERS_FAILURE:
            return { loading: false, users: [], error: action.payload };
        default:
            return state;
    }
}

module.exports = {
    cakeReducer,
    iceCreamReducer,
    usersReducer
}