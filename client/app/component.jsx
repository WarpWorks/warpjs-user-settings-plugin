import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

// import debug from './../debug';
import errorBoundary from './../react-utils/error-boundary';
import LeftRightMargin from './../shared/left-right-margin';
import MainBody from './../main-body';
import Sidebar from './../sidebar';

// const log = debug('client/app/component');

const App = (props) => {
    return (
        <Grid fluid className="warpjs-user-settings-plugin">
            <Row>
                <LeftRightMargin />
                <Col xs={12} sm={10}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Sidebar loggedIn={props.loggedIn} initialized={props.initialized} />
                        </Col>
                        <Col xs={12} sm={8}>
                            <MainBody />
                        </Col>
                    </Row>
                </Col>
                <LeftRightMargin />
            </Row>
        </Grid>
    );
};

App.displayName = 'App';

App.propTypes = {
    initialized: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
};

export default errorBoundary(App);
