import extend from 'lodash/extend';

import namespace from './../namespace';

const NAMESPACE = 'PROFILE';

export default Object.freeze(
    [
        'UPDATE_NAME'
    ].reduce((map, key) => extend(map, { [key]: namespace(`${NAMESPACE}.${key}`) }), {})
);
