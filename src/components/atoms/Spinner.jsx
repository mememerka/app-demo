import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size || "20px"};
  width: ${({ size }) => size || "20px"};
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size }) => size || "20px"};
  animation: ${rotate} 1s ease-in-out infinite;
`;

const Spinner = ({ ...props }) => {
  return (
    <StyledSpinner className="material-icons" {...props}>
      cached
    </StyledSpinner>
  );
};

export default Spinner;
