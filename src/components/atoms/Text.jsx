import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledText = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0;
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
