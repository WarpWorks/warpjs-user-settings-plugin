import debug from 'debug';

const log = debug('W2:plugin:user-settings:client/react-utils/error-boundary');

export default (Component) => {
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            log("getDerivedStateFromError(): error=", error);
            return { hasError: true };
        }

        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            log("Got error:", error, info);
            // eslint-disable-next-line no-console
            console.error(`${Component.displayName}.componentDidCatch(): info=`, (info && info.componentStack) ? info.componentStack : info);
        }

        render() {
            if (this.state.hasError) {
                return <h1>Something went wrong.</h1>;
            }

            return <Component {...this.props} />;
        }
    };

    return ErrorBoundary;
};