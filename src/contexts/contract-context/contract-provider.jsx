import React from 'react';

import { ContractContext } from './contract-context';

export const ContractProvider = ({ children }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [contractId, setContractId] = React.useState(null);

  const value = {
    openModal,
    setOpenModal,
    contractId,
    setContractId
  };

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};