import { Component, ErrorInfo, ReactNode } from "react";
import { Error } from "../index";

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
      // You can also log error messages to an error reporting service here
    }

    public render(): ReactNode {
      if (this.state.errorInfo) {
        // Error path
        return (
            <Error  errorHeading="Something went wrong" errorsubText={this.state.errorInfo} />
        );
      }
      // Normally, just render children
      return this.props.children;
    }
}

export interface ErrorBoundaryState{
    error: any,
    errorInfo: any
}

interface ErrorBoundaryProps{

}
