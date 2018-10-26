import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';

import constants from './../constants';
import errorBoundary from './../react-utils/error-boundary';
import LoadingUserData from './../loading-user-data';
import PleaseLogIn from './../please-log-in';
import Profile from './../profile';

const MainBody = (props) => {
    if (props.initialized) {
        switch (props.selectedSection) {
            case constants.sections.profile:
                return <Profile />;

                // case constants.sections.account:
                //     return <Account />;

                // case constants.sections.documents:
                //     return <Documents />;

                // case constants.sections.groups:
                //     return <Groups />;

            default:
                return (
                    <div>
                        <Glyphicon glyph="exclamation-sign" />
                        &nbsp;
                        Invalid section <code>{props.selectedSection}</code>.
                    </div>
                );
        }
    } else if (props.loggedIn) {
        return <LoadingUserData />;
    } else {
        return <PleaseLogIn />;
    }
};

MainBody.propTypes = {
    initialized: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    selectedSection: PropTypes.string.isRequired
};

MainBody.displayName = 'MainBody';

export default errorBoundary(MainBody);
