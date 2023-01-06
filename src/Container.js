import React from "react";
import LeftNav from "./components/LeftNav/LeftNav";
import MiddleNav from "./components/MiddleNav/MiddleNav";
import RightNav from "./components/RightNav/RightNav";

function Container() {
  return (
    <div style={{ display: "flex" }}>
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </div>
  );
}

export default Container;
