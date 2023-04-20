import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
`;

const Badge = ({ children, color = "#fff", backgroundColor = "#6c757d" }) => {
  return (
    <StyledBadge color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Badge;
