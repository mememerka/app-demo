import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";
import useUsers from "../data/useUsers"; // Importa el hook useUsersData

const GroupInfoModal = ({ onCloseModal, onSendProposal }) => {
  const users = useUsersData(); // Utiliza el hook para obtener los datos de los usuarios

  return (
    <Wrapper backgroundColor="#fff" borderRadius="8px" padding="32px">
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <Avatar src={user.image} size={120} />
          <Text text={user.name} size={24} weight={600} margin="16px 0 0 0" />
          <Text text={user.description} size={16} margin="8px 0 0 0" />
          <Text text={user.location} size={14} margin="8px 0 0 0" />
          <Text text={user.phone} size={14} margin="8px 0 0 0" />
          <Button
            text="Send proposal"
            onClick={() => onSendProposal(user)}
            margin="24px 0 0 0"
          />
        </React.Fragment>
      ))}
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
  onCloseModal: PropTypes.func.isRequired,
  onSendProposal: PropTypes.func.isRequired,
};

export default GroupInfoModal;
