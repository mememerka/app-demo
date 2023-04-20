import PropTypes from "prop-types";
import styled from "styled-components";

const Avatar = styled.img`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border-radius: 50%;
`;

Avatar.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
