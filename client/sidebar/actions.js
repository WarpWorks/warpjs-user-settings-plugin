import extend from 'lodash/extend';

import namespace from './../namespace';

export default Object.freeze(
    [
        'UPDATE_SELECTED_KEY'
    ].reduce((map, key) => extend(map, { [key]: namespace(`SIDEBAR.${key}`) }), {})
);
