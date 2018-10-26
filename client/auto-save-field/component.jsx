import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    const feedback = () => {
        if (props.field.error) {
            return <Glyphicon glyph="floppy-remove" />;
        } else if (props.field.saved) {
            return <Glyphicon glyph="floppy-saved" />;
        } else if (props.field.saving) {
            return <Glyphicon glyph="floppy-disk" />;
        } else if (props.field.dirty) {
            return <Glyphicon glyph="pencil" />;
        } else {
            return <Glyphicon glyph="pencil" />;
        }
    };

    return (
        <FormGroup className={`warpjs-user-settings-auto-save-field warpjs-field-status-${props.status}`}
            validationState={props.validationState}
        >
            <ControlLabel>{props.label}</ControlLabel>
            <FormControl type="text"
                value={props.field.value}
                placeholder={props.placeholder}
                onChange={props.changed}
                onBlur={props.save}
                className={``}
            />
            <FormControl.Feedback>
                {feedback()}
            </FormControl.Feedback>
        </FormGroup>
    );
};

Component.displayName = 'AutoSaveField';

Component.propTypes = {
    field: PropTypes.shape({
        field: PropTypes.string.isRequired,
        value: PropTypes.string,
        dirty: PropTypes.bool,
        saving: PropTypes.bool,
        saved: PropTypes.bool,
        error: PropTypes.string
    }),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changed: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    validationState: PropTypes.string
};

export default errorBoundary(Component);
