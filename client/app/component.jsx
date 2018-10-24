import debug from 'debug';
import { Row, Col } from 'react-bootstrap';

import LeftRightMargin from './../shared/left-right-margin';
import MainBody from './../main-body';
import Sidebar from './../sidebar';
import errorBoundary from './../react-utils/error-boundary';

const log = debug('W2:plugin:user-settings:client/app/component');

const App = (props) => {
    log("component: props=", props);
    return (
        <Row>
            <LeftRightMargin />
            <Col xs={12} sm={10} className="warpjs-user-settings-plugin">
                <Row>
                    <Col xs={12} sm={4} className="warpjs-user-settings-sidebar">
                        <Sidebar />
                    </Col>
                    <Col xs={12} sm={8} className="warpjs-user-settings-main-body">
                        <MainBody />
                    </Col>
                </Row>
            </Col>
            <LeftRightMargin />
        </Row>
    );
};

App.displayName = 'App';

export default errorBoundary(App);
