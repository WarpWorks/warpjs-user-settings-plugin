import { Row, Col } from 'react-bootstrap';

import LeftRightMargin from './../shared/left-right-margin';

const App = (props) => {
    // eslint-disable-next-line no-console
    console.log("component: props=", props);
    return (
        <Row>
            <LeftRightMargin />
            <Col xs={12} sm={10} className="warpjs-user-settings-plugin">
                <Row>
                    <Col xs={12} sm={4} className="warpjs-user-settings-sidebar">
                    </Col>
                    <Col xs={12} sm={8} className="warpjs-user-settings-content">
                    </Col>
                </Row>
            </Col>
            <LeftRightMargin />
        </Row>
    );
};

export default App;
