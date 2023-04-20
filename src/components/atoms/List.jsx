import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = ({ children, ...props }) => {
  return (
    <StyledList {...props}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...props });
      })}
    </StyledList>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
