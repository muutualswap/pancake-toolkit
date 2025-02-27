import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <circle cx="45" cy="45" r="45" fill="url(#paint0_linear_pancakeround)" />
      <image href="/logo.png" width="90"/>
    </Svg>
  );
};

export default Icon;
