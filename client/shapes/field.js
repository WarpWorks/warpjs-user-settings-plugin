import PropTypes from 'prop-types';

export default PropTypes.shape({
    field: PropTypes.string.isRequired, // Name of the field.
    type: PropTypes.string, // Type of field.
    value: PropTypes.string, // Value
    dirty: PropTypes.bool, // Has the user made any changes?
    saving: PropTypes.bool, // Are the changes in process of being saved
    saved: PropTypes.bool, // Has the saving been successful?
    error: PropTypes.string // If failed saving, what is the error
});
