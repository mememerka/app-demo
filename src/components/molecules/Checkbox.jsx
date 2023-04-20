import React from "react";
import PropTypes from "prop-types";
import Icon from "../atoms/Icon";
import HiddenCheckbox from "../atoms/HiddenCheckbox";
import Wrapper from "../atoms/Wrapper";

const Checkbox = ({ className, checked, ...props }) => {
  return (
    <Wrapper display="inline-block" verticalAlign="middle">
      <HiddenCheckbox checked={checked} {...props} />
      <Wrapper
        display="inline-block"
        width="16px"
        height="16px"
        backgroundColor={checked ? "#ff6b6b" : "#fff"}
        borderRadius="3px"
        transition="all 150ms"
      >
        <Icon visibility={checked ? "visible" : "hidden"} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </Wrapper>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
