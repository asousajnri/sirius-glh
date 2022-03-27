import React from 'react';
import { DialogTitle, Checkbox, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { isEmpty } from 'ramda';

import { format } from 'date-fns';

import { 
  useContractContext 
} from '../../contexts/contract-context/use-contract-context';

import { SplitButton } from '../../components/split-button';

import {
  StyledViewContractContainer,
  StyledBasicInfosWrap,
  StyledBasicInfo,
  StyledChecklist,
  StyledSignature,
  StyledSignatures,
  StyledSignaturesWrap,
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
    console.log(contractId);

    try {
      if(!contractId) return;

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
          alignItems: 'center',
        }}
      >
        {contract?.contract_type?.title} - {contract?.provider?.name}

        <IconButton
          style={{
            width: "40px",
            height: "40px",
            marginLeft: '20px'
          }} 
          title='Fechar'
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
        
      <DialogContent dividers>
        {!isEmpty(contract) && (
          <>
            <StyledBasicInfosWrap>
              <StyledBasicInfo>
                <label className='label' htmlFor="">Data de início</label>
                <span className='info'>{format(new Date(contract?.startDate), "dd-MM-yyyy")}</span>
              </StyledBasicInfo>
              <StyledBasicInfo>
                <label className='label' htmlFor="">Data de termino</label>
                <span className='info'>{format(new Date(contract?.endDate), "dd-MM-yyyy")}</span>
              </StyledBasicInfo>
              <StyledBasicInfo>
                <label className='label' htmlFor="">Fornecedor</label>
                <span className='info'>{contract?.provider?.name}</span>
              </StyledBasicInfo>
            </StyledBasicInfosWrap>

            <h2 className='checklist-section'>Checklist</h2>

            <StyledChecklist>
              {contract?.checklist_contract.map((checklist, index) => (
                <StyledSignatures>
                  <h3>Check {index} - {checklist?.item}</h3>
                  <StyledSignaturesWrap>
                    <StyledSignature>
                      <Checkbox 
                        checked={checklist.provider.isChecked}
                        onChange={() => {}}
                      />
                      Fornecedor
                    </StyledSignature>
                    <StyledSignature>
                      <Checkbox 
                        checked={checklist.recipient.isChecked}
                        onChange={() => {}}
                      />
                      Beneficiário 
                    </StyledSignature>
                  </StyledSignaturesWrap>
                </StyledSignatures>
              ))}
            </StyledChecklist>
          </>
        )}
      </DialogContent>
      <DialogActions
        className="dialog-actions"
      >
          <SplitButton 
            options={[
              'Pendente',
              'Em Andamento',
              'Concluído - Há tempo',
              'Concluído - Atrasado',
              'Pausado',
              'Cancelado',
              'Bloqueado',
              'Recisão'
            ]}
            disabled={[
              'Pendente'
            ]}
          />
      </DialogActions>
    </StyledViewContractContainer>
  );
};