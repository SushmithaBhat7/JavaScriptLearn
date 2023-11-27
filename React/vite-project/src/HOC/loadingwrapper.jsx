import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingWrapper = ({ isLoading, data, message, children }) => {
  if (isLoading) {
    return <ClimbingBoxLoader />;
  }

  if (data.length === 0) {
    return <p>{message}</p>;
  }

  return children;
};

export default LoadingWrapper;
