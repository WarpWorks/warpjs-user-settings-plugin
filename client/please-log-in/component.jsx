import errorBoundary from './../react-utils/error-boundary';

const PleaseLogIn = (props) => (
    <h1>Please log in to continue</h1>
);

PleaseLogIn.displayName = 'PleaseLogIn';

export default errorBoundary(PleaseLogIn);
