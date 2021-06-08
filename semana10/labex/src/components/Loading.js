import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading type={"spin"} color={"black"} height={50} width={100} />
);

export default Loading;
