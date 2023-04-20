import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Overlay } from "../Atoms";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>{children}</Wrapper>
    </Overlay>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
