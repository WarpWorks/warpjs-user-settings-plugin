import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    const formControl = (
        <FormControl type="text"
            value={props.field.value}
            placeholder={props.placeholder}
            onChange={props.changed}
            onBlur={props.save}
        />
    );

    const addon = () => {
        if (props.field.saved) {
            return <Glyphicon glyph="ok" />;
        } else if (props.field.saving) {
            return <Glyphicon glyph="time" />;
        } else if (props.field.dirty) {
            return <Glyphicon glyph="pencil" />;
        } else {
            return <Glyphicon glyph="pencil" />;
        }
    };

    return (
        <FormGroup className="warpjs-user-settings-auto-save-field">
            <ControlLabel>{props.label}</ControlLabel>
            <InputGroup className={`warpjs-field-status-${props.status}`}>
                {formControl}
                <InputGroup.Addon>
                    {addon()}
                </InputGroup.Addon>
            </InputGroup>
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
        saved: PropTypes.bool
    }),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changed: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
};

export default errorBoundary(Component);
