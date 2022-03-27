import { useContext } from 'react';

import { AddContractContext } from './add-contract-modal-context';

export const useAddContractModalContext = () => useContext(AddContractContext)