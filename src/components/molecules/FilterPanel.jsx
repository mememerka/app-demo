import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import Slider from "../atoms/Slider";
import Button from "../atoms/Button";

const FilterPanel = ({
  ageRange,
  distance,
  onAgeRangeChange,
  onDistanceChange,
  onApplyFilter
}) => {
  return (
    <Wrapper margin="0 0 24px 0">
      <Text text="Age range" size={14} color="#888" weight={600} />
      <Slider
        value={ageRange}
        min={18}
        max={100}
        step={1}
        onChange={onAgeRangeChange}
      />
      <Text text="Max distance (km)" size={14} color="#888" weight={600} />
      <Slider
        value={distance}
        min={1}
        max={100}
        step={1}
        onChange={onDistanceChange}
      />
      <Button text="Apply" onClick={onApplyFilter} />
    </Wrapper>
  );
};

FilterPanel.propTypes = {
  ageRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  distance: PropTypes.number.isRequired,
  onAgeRangeChange: PropTypes.func.isRequired,
  onDistanceChange: PropTypes.func.isRequired,
  onApplyFilter: PropTypes.func.isRequired
};

export default FilterPanel;
