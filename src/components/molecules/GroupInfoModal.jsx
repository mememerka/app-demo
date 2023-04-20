import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";

const GroupInfoModal = ({ group, onCloseModal, onSendProposal }) => {
  const { image, name, description } = group;

  return (
    <Wrapper backgroundColor="#fff" borderRadius="8px" padding="32px">
      <Avatar src={image} size={120} />
      <Text text={name} size={24} weight={600} margin="16px 0 0 0" />
      <Text text={description} size={16} margin="8px 0 0 0" />
      <Button
        text="Send proposal"
        onClick={onSendProposal}
        margin="24px 0 0 0"
      />
      <Button
        text="Close"
        onClick={onCloseModal}
        variant="secondary"
        margin="8px 0 0 0"
      />
    </Wrapper>
  );
};

GroupInfoModal.propTypes = {
  group: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onSendProposal: PropTypes.func.isRequired
};

export default GroupInfoModal;
