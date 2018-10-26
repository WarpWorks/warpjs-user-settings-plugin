import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import AutoSaveField from './../auto-save-field';
import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    return (
        <Grid fluid className="warpj-user-settings-profile">
            <Row>
                <Col xs={12}>
                    <h1>Profile</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <form>
                        <AutoSaveField
                            label="Name"
                            field={props.name}
                            placeholder="Enter name"
                        />
                    </form>
                </Col>
            </Row>
        </Grid>
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
