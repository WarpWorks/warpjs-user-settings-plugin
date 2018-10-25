import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>

            <form>
                <FormGroup controlId="formName">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={props.user.name}
                        placeholder="Enter name"
                    />
                </FormGroup>
            </form>
        </div>
    );
};

Profile.displayName = 'Profile';

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string
    })
};

export default errorBoundary(Profile);
