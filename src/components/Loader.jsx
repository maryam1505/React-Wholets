import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[80vh]">
        <CircularProgress disableShrink />
      </div>
    </>
  );
};

export default Loader;
