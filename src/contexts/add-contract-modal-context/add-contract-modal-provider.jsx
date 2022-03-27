import React from 'react';

import { AddContractContext } from './add-contract-modal-context';

export const AddContractProvider = ({ children }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const value = {
    openModal,
    setOpenModal
  };

  return (
    <AddContractContext.Provider value={value}>{children}</AddContractContext.Provider>
  )
};