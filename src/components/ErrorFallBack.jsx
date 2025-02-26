import { Button, Typography, Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

function parseStackTrace(stack) {
  // This function extracts the first line of the stack trace
  const lines = stack.split("\n");
  if (lines.length > 0) {
    const [errorLocation] = lines; // Get the first line for location
    return errorLocation;
  }
  return "Unknown location";
}

function ErrorFallback({ error, resetErrorBoundary }) {
  const errorLocation = parseStackTrace(error.stack);

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Paper elevation={3} className="p-6 max-w-lg w-full">
        <div role="alert" className="text-center space-y-4">
          <Typography variant="h5" component="p" className="text-red-600">
            <div className="font-imprima">Something went wrong:</div>
          </Typography>

          {/* Display error message */}
          <pre className="bg-gray-200 p-4 rounded text-red-500 whitespace-pre-wrap">
            {error.message}
          </pre>

          {/* Display error location */}
          <div className="bg-yellow-100 p-4 rounded text-left text-sm text-gray-800">
            <Typography
              variant="body2"
              component="p"
              className="font-bold mb-2"
            >
              <div className="font-imprima font-bold">
                Where did this happen?:
              </div>
            </Typography>
            <pre className="text-gray-700 text-wrap font-muktaVaani">
              {errorLocation}
            </pre>
          </div>

          {/* Display stack trace */}
          <div className="bg-gray-100 p-4 rounded text-left text-sm text-gray-600 max-h-48 overflow-y-auto">
            <Typography
              variant="body2"
              component="p"
              className="text-gray-800 font-bold mb-2"
            >
              <div className="font-imprima font-bold">Stack Trace:</div>
            </Typography>

            <pre>
              <div className="font-yantramanav">{error.stack}</div>
            </pre>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={resetErrorBoundary}
            className="mt-4"
          >
            Try again
          </Button>
        </div>
      </Paper>
    </Box>
  );
}

// Prop validation (optional)
ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired, // Stack trace is required now
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
