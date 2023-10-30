import React, { ReactNode } from 'react';
import { ErrorInfo } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: info,
    });
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="container main__container">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
