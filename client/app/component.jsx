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
        <Grid>
            <Row>
                <LeftRightMargin />
                <Col xs={12} sm={10} className="warpjs-user-settings-plugin">
                    <Row>
                        <Col xs={12} sm={4} className="warpjs-user-settings-sidebar">
                            <Sidebar loggedIn={props.loggedIn} initialized={props.initialized} selectSection={props.selectSection} />
                        </Col>
                        <Col xs={12} sm={8} className="warpjs-user-settings-main-body">
                            <Grid fluid>
                                <Row>
                                    <Col xs={12}>
                                        <MainBody />
                                    </Col>
                                </Row>
                            </Grid>
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
    loggedIn: PropTypes.bool.isRequired,
    selectSection: PropTypes.func.isRequired
};

export default errorBoundary(App);
