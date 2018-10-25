import extend from 'lodash/extend';

import namespace from './../namespace';

const NAMESPACE = 'APP';

export default Object.freeze(
    [
        'LOGGED_STATE',
        'SELECT_SECTION',
        'SET_USER'
    ].reduce((map, key) => extend(map, { [key]: namespace(`${NAMESPACE}.${key}`) }), {})
);
