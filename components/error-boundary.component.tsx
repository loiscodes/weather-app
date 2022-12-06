import {
  ComponentChildrenProps,
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "@models/weather.models";
import { Typography } from "@mui/material";
import { logError } from "@reducers/root";
import React from "react";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ComponentChildrenProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    logError(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography variant="h1">Something went wrong!</Typography>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
