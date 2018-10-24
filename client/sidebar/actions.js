import extend from 'lodash/extend';

import NAMESPACE from './../namespace';

const KEYS = [
    'NOT_LOGGED',
    'UPDATE_SELECTED_KEY'
];

export default Object.freeze(KEYS.reduce((map, key) => extend(map, { [key]: `${NAMESPACE}.${key}` }), {}));
