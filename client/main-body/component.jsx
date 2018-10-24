import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const MainBody = (props) => {
    const body = props.initialized
        ? <div>Initialized...</div>
        : (
            <div>
                <span className="glyphicon glyphicon-time" />
                Loading user data...
            </div>
        )
    ;

    return (
        <Row>
            <Col>
                {body}
            </Col>
        </Row>
    );
};

MainBody.propTypes = {
    initialized: PropTypes.bool.isRequired
};

MainBody.displayName = 'MainBody';

export default errorBoundary(MainBody);
