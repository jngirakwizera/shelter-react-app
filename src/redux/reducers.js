import { combineReducers } from 'redux';

const token = (state = null, action) => {
    switch(action.type) {
        case "SET_TOKEN":
            return action.value;
        case "UNSET_TOKEN":
            return null;
    }
    return state;
}

const user = (state = null, action) => {
    switch(action.type) {
        case "SET_USER":
            return action.value;
        case "UNSET_USER":
            return null;
    }
    return state;
}

export default combineReducers({ token, user });