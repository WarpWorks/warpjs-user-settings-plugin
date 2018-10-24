import debug from 'debug';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';

import errorBoundary from './../react-utils/error-boundary';

const log = debug('W2:plugin:user-settings:client/sidebar/component');

const Sidebar = (props) => {
    log("Sidebar: props=", props);

    const buttons = (props.sidebarItems || []).map((sidebarItem) => {
        const selectedClassName = (sidebarItem.key === props.selectedItem) ? 'warpjs-user-settings-sidebar-item-selected' : '';

        return (
            <Button key={sidebarItem.key} bsStyle="default" className={`warpjs-user-settings-sidebar-item ${selectedClassName}`}
                onClick={() => props.updateSelectedKey(sidebarItem.key)}
            >{sidebarItem.label}</Button>
        );
    });

    return (
        <Row className="warpjs-user-settings-content">
            <Col xs={12} className="warpjs-title">
                Personal Settings
            </Col>
            <Col xs={12} className="warpjs-user-settings-sidebar-items">
                {buttons}
            </Col>
        </Row>
    );
};

Sidebar.propTypes = {
    selectedItem: PropTypes.string,
    sidebarItems: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    updateSelectedKey: PropTypes.func.isRequired
};

Sidebar.displayName = 'Sidebar';

export default errorBoundary(Sidebar);
