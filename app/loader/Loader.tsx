import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#2563eb"
        radius="9"
        ariaLabel="three-dots-loading"
      ></ThreeDots>
    </div>
  );
};

export default Loader;
