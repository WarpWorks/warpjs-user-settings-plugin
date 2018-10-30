import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';
import * as shapes from './../shapes';

const Component = (props) => {
    const DEFAULT_FEEDBACK = <Glyphicon glyph="pencil" />;

    const feedback = () => {
        if (props.field) {
            if (props.field.error) {
                return <Glyphicon glyph="floppy-remove" />;
            } else if (props.field.saved) {
                return <Glyphicon glyph="floppy-saved" />;
            } else if (props.field.saving) {
                return <Glyphicon glyph="floppy-disk" />;
            } else if (props.field.dirty) {
                return DEFAULT_FEEDBACK;
            } else {
                return DEFAULT_FEEDBACK;
            }
        } else {
            return DEFAULT_FEEDBACK;
        }
    };

    return (
        <FormGroup className={`warpjs-user-settings-auto-save-field warpjs-field-status-${props.status}`}
            validationState={props.validationState}
        >
            <ControlLabel>{props.label}</ControlLabel>
            <FormControl type="text"
                value={props.field ? props.field.value : ''}
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
    field: shapes.field,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changed: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    validationState: PropTypes.string
};

export default errorBoundary(Component);
