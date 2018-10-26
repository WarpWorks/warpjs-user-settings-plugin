import PropTypes from 'prop-types';
import { Col, Glyphicon, Grid, Row } from 'react-bootstrap';

import Account from './../account';
import constants from './../constants';
import errorBoundary from './../react-utils/error-boundary';
import LoadingUserData from './../loading-user-data';
import PleaseLogIn from './../please-log-in';
import Profile from './../profile';

const MainBody = (props) => {
    const body = () => {
        if (props.initialized) {
            switch (props.selectedSection) {
                case constants.sections.profile:
                    return <Profile />;

                case constants.sections.account:
                    return <Account />;

                    // case constants.sections.documents:
                    //     return <Documents />;

                    // case constants.sections.groups:
                    //     return <Groups />;

                default:
                    return (
                        <h1>
                            <Glyphicon glyph="exclamation-sign" />
                            &nbsp;
                            Invalid section <code>{props.selectedSection}</code>.
                        </h1>
                    );
            }
        } else if (props.loggedIn) {
            return <LoadingUserData />;
        } else {
            return <PleaseLogIn />;
        }
    };

    return (
        <Grid fluid className="warpjs-user-settings-main-body">
            <Row>
                <Col xs={12}>
                    {body()}
                </Col>
            </Row>
        </Grid>
    );
};

MainBody.propTypes = {
    initialized: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    selectedSection: PropTypes.string.isRequired
};

MainBody.displayName = 'MainBody';

export default errorBoundary(MainBody);
