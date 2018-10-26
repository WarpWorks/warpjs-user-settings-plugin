import extend from 'lodash/extend';

import namespace from './../namespace';

export default Object.freeze(
    [
        'SELECT_SECTION'
    ].reduce((map, key) => extend(map, { [key]: namespace(`SIDEBAR.${key}`) }), {})
);
