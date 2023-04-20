import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
