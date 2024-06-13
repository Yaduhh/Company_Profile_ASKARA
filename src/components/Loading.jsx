import React from "react";
import { HashLoader, PuffLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent 2xl:-mt-28 md:-mt-10">
      <PuffLoader size={50} color={"#0E185F"} loading={loading} />
    </div>
  );
};

export default Loading;
