import React from 'react';
import { DialogTitle, Checkbox, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import axios from 'axios';

import { format } from 'date-fns';

import { 
  useContractContext 
} from '../../contexts/contract-context/use-contract-context';

import {
  StyledViewContractContainer,
  StyledBasicInfosWrap,
  StyledBasicInfo,
  StyledChecklist,
  StyledSignature,
  StyledSignatures,
} from './view-contract-container-styles';

export const ViewContractContainer = () => {
  const [contract, setContract] = React.useState({});

  const { 
    openModal, 
    setOpenModal, 
    contractId, 
    setContractId,
  } = useContractContext();

  const getContract = React.useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:3006/contracts/${contractId}`);
      setContract(data);
    } catch (err) {
      return err;
    }
  }, [contractId]);

  React.useEffect(() => {
    getContract();
  }, [getContract])

  const handleCloseModal = React.useCallback(() => {
    setContract({});
    setContractId(null)
    setOpenModal(false);
  }, [setContract, setOpenModal, setContractId]);

  return (
    <StyledViewContractContainer
      onClose={handleCloseModal}
      aria-labelledby="customized-dialog-title"
      open={openModal}
    >
      <DialogTitle 
        id="customized-dialog-title" 
        onClose={handleCloseModal}
        style={{ 
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        {contract?.contract_type?.title} - {contract?.provider?.name}

        <IconButton 
          title='Fechar'
          onClick={handleCloseModal}
          style={{
            marginLeft: '20px'
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <StyledBasicInfosWrap>
          <StyledBasicInfo>
            <label className='label' htmlFor="">Data de início</label>
            <span className='info'>{format(new Date(contract.startDate), "dd-MM-yyyy")}</span>
          </StyledBasicInfo>
          <StyledBasicInfo>
            <label className='label' htmlFor="">Data de termino</label>
            <span className='info'>{format(new Date(contract.startDate), "dd-MM-yyyy")}</span>
          </StyledBasicInfo>
          <StyledBasicInfo>
            <label className='label' htmlFor="">Fornecedor</label>
            <span className='info'>{contract.provider.name}</span>
          </StyledBasicInfo>
        </StyledBasicInfosWrap>
        <StyledChecklist>
          {contract.checklist_contract.map(checklist => (
            <StyledSignatures>
              <h3>{checklist.item}</h3>
            </StyledSignatures>
          ))}
        </StyledChecklist>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </StyledViewContractContainer>
  );
};