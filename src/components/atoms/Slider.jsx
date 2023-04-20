import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ccc;
`;

const SliderThumb = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #ccc;
  position: absolute;
  top: -6px;
  left: ${(props) => props.position}%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const Slider = ({ min, max, value, onChange }) => {
  const [thumbPosition, setThumbPosition] = useState(
    ((value - min) / (max - min)) * 100
  );

  const handleThumbDrag = (event) => {
    const trackWidth = event.currentTarget.offsetWidth;
    const trackLeft = event.currentTarget.getBoundingClientRect().left;
    const mousePosition = event.pageX - trackLeft;
    const positionPercentage = (mousePosition / trackWidth) * 100;
    const newValue = Math.round(min + ((max - min) * positionPercentage) / 100);
    const newThumbPosition = positionPercentage;
    setThumbPosition(newThumbPosition);
    onChange(newValue);
  };

  return (
    <SliderContainer>
      <SliderTrack />
      <SliderThumb position={thumbPosition} onMouseDown={handleThumbDrag} />
    </SliderContainer>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
