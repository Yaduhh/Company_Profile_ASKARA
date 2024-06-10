import React from "react";
import { HashLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent 2xl:-mt-20">
      <HashLoader size={40} color={"#0E185F"} loading={loading} />
    </div>
  );
};

export default Loading;
