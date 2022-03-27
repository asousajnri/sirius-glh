import { useContext } from 'react';

import { ContractContext } from './contract-context';

export const useContractContext = () => useContext(ContractContext);