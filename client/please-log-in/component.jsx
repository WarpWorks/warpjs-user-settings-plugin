import { Alert, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const PleaseLogIn = (props) => (
    <Alert bsStyle="danger">
        <h1>
            <Glyphicon glyph="exclamation-sign" />
            &nbsp;
            Please log in to continue
        </h1>
    </Alert>
);

PleaseLogIn.displayName = 'PleaseLogIn';

export default errorBoundary(PleaseLogIn);
