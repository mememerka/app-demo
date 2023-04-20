import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ zIndex }) => zIndex};
`;

const Overlay = ({
  backgroundColor = "rgba(0, 0, 0, 0.4)",
  opacity = 1,
  zIndex = 100,
  ...rest
}) => {
  return (
    <StyledOverlay
      backgroundColor={backgroundColor}
      opacity={opacity}
      zIndex={zIndex}
      {...rest}
    />
  );
};

Overlay.propTypes = {
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  zIndex: PropTypes.number,
};

export default Overlay;
