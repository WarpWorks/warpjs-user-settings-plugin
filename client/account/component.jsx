import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

import AutoSaveField from './../auto-save-field';
import ChangePassword from './../change-password';
import errorBoundary from './../react-utils/error-boundary';
import * as shapes from './../shapes';

const Component = (props) => {
    return (
        <Grid fluid className="warpjs-user-settings-account">
            <Row>
                <Col xs={12}>
                    <h1>Account</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <form>
                        <AutoSaveField
                            label="Email"
                            field={props.email}
                            placeholder="Enter email address"
                        />
                    </form>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <ChangePassword url={props.changePasswordUrl} />
                </Col>
            </Row>

        </Grid>
    );
};
Component.displayName = 'Account';

Component.propTypes = {
    changePasswordUrl: PropTypes.string,
    email: shapes.field,
    oldPasswordChanged: PropTypes.func,
    newPasswordChanged: PropTypes.func,
    confirmNewPasswordChanged: PropTypes.func
};

export default errorBoundary(Component);
