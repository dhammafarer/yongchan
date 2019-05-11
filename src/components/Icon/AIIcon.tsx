import * as React from "react";
import styled from "styled-components";
import { color } from "src/theme";

interface Props {
  fill?: string;
  opacity?: number;
  size?: number;
}

const Svg = styled.svg<Props>`
  opacity: ${props => props.opacity};
  & path {
    stroke: none;
    fill-rule: nonzero;
    fill-opacity: 1;
    fill: ${props => props.fill && color(props.fill)} !important;
  }
`;

export const AIIcon: React.SFC<Props> = ({ opacity, fill, size }) => (
  <Svg
    width={size || "100%"}
    height={size || "100%"}
    fill={fill}
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 234"
  >
    <g>
      <path fill="#261300" d="M10,10h220v214H10V10z" />
      <path fill="#FF7C00" d="M0,0v234h240V0H0z M10,10h220v214H10V10z" />
      <path
        fill="#FF7C00"
        d="M83.3,132.5l-7.9,30c-0.2,0.8-0.5,1-1.5,1H59.2c-1,0-1.2-0.3-1-1.5l28.4-99.4c0.5-1.8,0.8-3.4,1-8.3	c0-0.7,0.3-1,0.8-1h21c0.7,0,1,0.2,1.2,1l31.8,107.9c0.2,0.8,0,1.3-0.8,1.3H125c-0.8,0-1.3-0.2-1.5-0.9l-8.3-30.1L83.3,132.5
		L83.3,132.5z M111.1,116.3c-2.8-11.1-9.4-35.3-11.9-47h-0.2c-2.1,11.7-7.4,31.5-11.6,47H111.1z M156.1,60.7
		c0-6.4,4.5-10.2,10.2-10.2c6.1,0,10.2,4.1,10.2,10.2c0,6.6-4.3,10.2-10.4,10.2C160.3,70.9,156.1,67.3,156.1,60.7L156.1,60.7z
		 M157.3,83.4c0-0.8,0.3-1.2,1.2-1.2h15.7c0.8,0,1.2,0.3,1.2,1.2v78.9c0,0.8-0.2,1.2-1.2,1.2h-15.5c-1,0-1.3-0.5-1.3-1.3V83.4z"
      />
    </g>
  </Svg>
);