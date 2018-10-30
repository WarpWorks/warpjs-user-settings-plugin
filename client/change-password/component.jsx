import errorBoundary from './../react-utils/error-boundary';

const Component = (props) => {
    return (
        <Grid fluid className="warpjs-user-settings-change-password">
            <Row>
                <Col xs={12}>
                    <h1>Change Password</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <form className="warpjs-user-settings-password">
                        <FormGroup>
                            <ControlLabel>Old password</ControlLabel>
                            <FormControl type="password"
                                placeholder="Enter your current password"
                                onChange={props.oldPasswordChanged}
                                className={`warpjs-user-settings-old-password`}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>New password</ControlLabel>
                            <FormControl type="password"
                                placeholder="Enter your current password"
                                onChange={props.newPasswordChanged}
                                className={`warpjs-user-settings-old-password`}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Confirm new password</ControlLabel>
                            <FormControl type="password"
                                placeholder="Enter your current password"
                                onChange={props.confirmNewPasswordChanged}
                                className={`warpjs-user-settings-old-password`}
                            />
                        </FormGroup>

                        <Button type="button" bsStyle="primary">Update Password</Button>
                    </form>
                </Col>
            </Row>
        </Grid>
    );
};

export default errorBoundary(Component);
