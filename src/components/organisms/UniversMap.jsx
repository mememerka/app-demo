import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Wrapper from "../atoms/Wrapper";
import FilterPanel from "../molecules/FilterPanel";
import GroupInfoModal from "../molecules/GroupInfoModal";
import { Network } from "vis-network/peer/esm/vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data";

const UniverseMap = ({ groups }) => {
  let nodes, edges;
  const networkRef = useRef();

  try {
    nodes = new DataSet(
      groups.map((group) => ({ id: group.id, label: group.name }))
    );

    edges = new DataSet(
      groups.flatMap((group) =>
        group.connections.map((connectionId) => ({
          from: group.id,
          to: connectionId,
        }))
      )
    );
  } catch (error) {
    console.error(error);
    nodes = new DataSet([]);
    edges = new DataSet([]);
  }

  const options = {
    layout: {
      improvedLayout: true,
    },
  };

  useEffect(() => {
    if (networkRef.current) {
      new Network(networkRef.current, { nodes, edges }, options);
    }
  }, [networkRef, nodes, edges, options]);

  const handleFilterChange = () => {
    // Lógica para aplicar los filtros de edad y distancia
  };

  /*   const handleGroupClick = () => {
  // Lógica para mostrar el modal de información del grupo
  }; */

  const handleSendProposal = () => {
    // Lógica para enviar una propuesta de chat al grupo seleccionado
  };

  return (
    <Wrapper padding="16px" borderRadius="8px">
      <div ref={networkRef} style={{ height: "500px" }}></div>
      <FilterPanel onFilterChange={handleFilterChange} />
      <GroupInfoModal onSendProposal={handleSendProposal} />
    </Wrapper>
  );
};

UniverseMap.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      connections: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    })
  ).isRequired,
};

export default UniverseMap;
