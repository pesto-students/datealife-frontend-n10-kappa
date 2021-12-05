import { Component, ErrorInfo, ReactNode } from "react";
import { Boxed, Error } from "../index";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void{
    this.setState({hasError: true, error, errorInfo});

  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
          <Boxed type="textField2">
              <>
                <Error  errorHeading={this.state.error?.name || "Error" } errorsubText={this.state.error?.message || "Unexpected it was"} />;
              </>
          </Boxed>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
