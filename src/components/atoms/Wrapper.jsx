import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
`;

const Wrapper = ({ children, padding, margin, backgroundColor }) => {
  return (
    <StyledWrapper
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledWrapper>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Wrapper;
