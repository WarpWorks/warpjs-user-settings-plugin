import PropTypes from 'prop-types';

import AutoSaveField from './../auto-save-field';
import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    return (
        <div>
            <h1>Profile</h1>

            <form>
                <AutoSaveField
                    label="Name"
                    field={props.name}
                    placeholder="Enter name"
                />
            </form>
        </div>
    );
};

Component.displayName = 'Profile';

Component.propTypes = {
    name: PropTypes.shape({
        field: PropTypes.string,
        value: PropTypes.string,
        dirty: PropTypes.bool
    })
};

export default errorBoundary(Component);
