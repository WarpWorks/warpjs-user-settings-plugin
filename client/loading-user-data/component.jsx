import errorBoundary from './../react-utils/error-boundary';

const LoadingUserData = (props) => {
    return (
        <h1><span className="glyphicon glyphicon-time" /> Loading user data...</h1>
    );
};

LoadingUserData.displayName = 'LoadingUserData';

export default errorBoundary(LoadingUserData);
