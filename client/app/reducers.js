import reduxConcatenateReducers from 'redux-concatenate-reducers';

const noop = (state = {}, action) => {
    return state;
};

const noop2 = (state = {}, action) => {
    return state;
};

export default reduxConcatenateReducers([
    noop,
    noop2
]);
