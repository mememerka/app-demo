import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../atoms/Wrapper";
import FilterPanel from "../molecules/FilterPanel";
import GroupInfoModal from "../molecules/GroupInfoModal";

const UniverseMap = ({ groups }) => {
  // Lógica para generar el mapa utilizando D3.js o Vis.js

  const handleFilterChange = () => {
    // Lógica para aplicar los filtros de edad y distancia
  };

  const handleGroupClick = () => {
    // Lógica para mostrar el modal de información del grupo
  };

  const handleSendProposal = () => {
    // Lógica para enviar una propuesta de chat al grupo seleccionado
  };

  return (
    <Wrapper padding="16px" borderRadius="8px">
      {/* Aquí iría el código para renderizar el mapa generado con D3.js o Vis.js */}
      <FilterPanel onFilterChange={handleFilterChange} />
      <GroupInfoModal onSendProposal={handleSendProposal} />
    </Wrapper>
  );
};

UniverseMap.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ).isRequired
};

export default UniverseMap;
