import PropTypes from 'prop-types';
import { Button, Col, Grid, Row } from 'react-bootstrap';

// import debug from './../debug';
import constants from './../constants';
import errorBoundary from './../react-utils/error-boundary';

// const log = debug('client/sidebar/component');

const SIDEBAR_ITEMS = [
    { key: constants.sections.profile, label: 'Profile' },
    { key: constants.sections.account, label: 'Account' },
    { key: constants.sections.documents, label: 'Documents' },
    { key: constants.sections.groups, label: 'Groups' }
];

const Sidebar = (props) => {
    // log("Sidebar: props=", props);

    const buttons = SIDEBAR_ITEMS.map((sidebarItem) => {
        const selectedClassName = (sidebarItem.key === props.selectedSection) ? 'warpjs-user-settings-sidebar-item-selected' : '';

        return (
            <Button key={sidebarItem.key} bsStyle="default" className={`warpjs-user-settings-sidebar-item ${selectedClassName}`}
                onClick={() => props.selectSection(sidebarItem.key)}
                disabled={!props.loggedIn}
            >{sidebarItem.label}</Button>
        );
    });

    return (
        <Grid fluid className="warpjs-user-settings-sidebar">
            <Row className="warpjs-user-settings-content">
                <Col xs={12} className="warpjs-title">
                    Personal Settings
                </Col>
                <Col xs={12} className="warpjs-user-settings-sidebar-items">
                    {buttons}
                </Col>
            </Row>
        </Grid>
    );
};

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    selectSection: PropTypes.func.isRequired,
    selectedSection: PropTypes.string
};

export default errorBoundary(Sidebar);
