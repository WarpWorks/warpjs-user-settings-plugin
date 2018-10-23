import { combineReducers } from 'redux';

const noop = (state = {}, action) => {
    return state;
};

const noop2 = (state = {}, action) => {
    return state;
};

export default combineReducers({
    noop,
    noop2
});
