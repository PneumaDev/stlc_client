// CenteredSpinner.js
import React from "react";
import { Spinner } from "@material-tailwind/react";

const CenteredSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner className="h-12 w-12" color="blue"/>
    </div>
  );
};

export default CenteredSpinner;
