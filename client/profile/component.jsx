import { Col, Grid, Row } from 'react-bootstrap';

import * as shapes from './../shapes';
import AutoSaveField from './../auto-save-field';
import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    return (
        <Grid fluid className="warpj-user-settings-profile">
            <form>
                <Row>
                    <Col xs={12}>
                        <h1>Profile</h1>

                        <div>
                            All of the fields on this page are optional and can
                            be deleted at any time, and by filling them out,
                            you are giving us consent to share this data
                            wherever your user profile appears. Please see
                            our <a href="#">privacy statement</a> to learn more
                            about how we use this information.
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <AutoSaveField
                            label="Name"
                            field={props.name}
                            placeholder="Enter name"
                        />

                        <div>TODO: Profile picture</div>

                        <AutoSaveField
                            label="Title / Position"
                            field={props.position}
                            placeholder="Enter your title / position"
                        />

                        <div>TODO: organization</div>

                        <AutoSaveField
                            label="Location"
                            field={props.location}
                            placeholder="Enter your location"
                        />

                        <AutoSaveField
                            label="Bio"
                            field={props.bio}
                            placeholder="Enter your bio"
                        />
                    </Col>
                </Row>
            </form>
        </Grid>
    );
};

Component.displayName = 'Profile';

Component.propTypes = {
    name: shapes.field,
    position: shapes.field,
    location: shapes.field,
    bio: shapes.field
};

export default errorBoundary(Component);
