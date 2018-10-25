import reduxConcatenateReducers from 'redux-concatenate-reducers';

// import * as actions from './actions';
// import * as reactUtils from './../react-utils';

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
