import { Col, Grid, Row } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <h1>Account</h1>
                </Col>
            </Row>
        </Grid>
    );
};
Component.displayName = 'Account';

export default errorBoundary(Component);
