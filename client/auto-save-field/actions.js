import extend from 'lodash/extend';

import namespace from './../namespace';

const NAMESPACE = 'AutoSaveField';

export default Object.freeze(
    [
        'SAVED_FIELD',
        'SAVING_FIELD',
        'UPDATE_FIELD',
        'RESET_FIELD'
    ].reduce((map, key) => extend(map, { [key]: namespace(`${NAMESPACE}.${key}`) }), {})
);
