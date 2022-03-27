import React from 'react';

import { UserContext } from './user-context';

export const UserProvider = ({ children }) => {
  const [userCompany, setUserCompany] = React.useState({
      "name": "Solar Coca-Cola",
      "cnpj": "21.237.701/0001-19",
      "endereço": "Rua 2, N: 02"
  });

  const [contracts, setContracts] = React.useState([]);

  const value = {
    userCompany,
    setUserCompany,
    contracts,
    setContracts,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};