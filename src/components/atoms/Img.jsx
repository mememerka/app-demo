import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIcon = styled.i`
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size }) => size || "1rem"};
`;

const Icon = ({ name, color, size }) => {
  return (
    <StyledIcon className="material-icons" color={color} size={size}>
      {name}
    </StyledIcon>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
