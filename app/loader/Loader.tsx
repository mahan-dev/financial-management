import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface LoaderProps {
  boolean?: boolean;
}
const Loader = ({ boolean }: LoaderProps) => {
  return (
    <div className="flex justify-center">
      <ThreeDots
        visible={true}
        height={boolean ? "40" : "80"}
        width={boolean ? "40" : "80"}
        color="#2563eb"
        radius="9"
        ariaLabel="three-dots-loading"
      ></ThreeDots>
    </div>
  );
};

export default Loader;
