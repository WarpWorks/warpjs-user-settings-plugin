import extend from 'lodash/extend';

import namespace from './../namespace';

const NAMESPACE = 'APP';

export default Object.freeze(
    [
        'NOT_LOGGED'
    ].reduce((map, key) => extend(map, { [key]: namespace(`${NAMESPACE}.${key}`) }), {})
);
