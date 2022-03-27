import React from 'react';

import { 
  StyledContractStatus,
  StyledContractStatusLabel,
  StyledContractStatusTitle,
  StyledContractStatusTitleBlock,
  StyledContractStatusValue,
  StyledContractStatusWrap,
  StyledContractStatusList,
} from './contract-status-styles';

export const ContractStatus = () => {
  return (
    <StyledContractStatusWrap>
      <h2 className='section-title'>Overview</h2>

      <StyledContractStatusList>
        <StyledContractStatus variant="done-at-time">
          <StyledContractStatusValue variant="done-at-time">
           0 
          </StyledContractStatusValue>
          <StyledContractStatusTitleBlock>
            <StyledContractStatusLabel>contratos</StyledContractStatusLabel>
            <StyledContractStatusTitle>Concluídos</StyledContractStatusTitle>
          </StyledContractStatusTitleBlock>  
        </StyledContractStatus>
        <StyledContractStatus variant="blocked">
          <StyledContractStatusValue variant="blocked">
           0 
          </StyledContractStatusValue>
          <StyledContractStatusTitleBlock>
            <StyledContractStatusLabel>contratos</StyledContractStatusLabel>
            <StyledContractStatusTitle>Bloqueados</StyledContractStatusTitle>
          </StyledContractStatusTitleBlock>  
        </StyledContractStatus>
        <StyledContractStatus variant="terminate">
          <StyledContractStatusValue variant="terminate">
           0 
          </StyledContractStatusValue>
          <StyledContractStatusTitleBlock>
            <StyledContractStatusLabel>contratos</StyledContractStatusLabel>
            <StyledContractStatusTitle>Recisão</StyledContractStatusTitle>
          </StyledContractStatusTitleBlock>  
        </StyledContractStatus>
        <StyledContractStatus variant="done-with-delay">
          <StyledContractStatusValue variant="done-with-delay">
           0 
          </StyledContractStatusValue>
          <StyledContractStatusTitleBlock>
            <StyledContractStatusLabel>contratos</StyledContractStatusLabel>
            <StyledContractStatusTitle>Concluídos - Atrasados</StyledContractStatusTitle>
          </StyledContractStatusTitleBlock>  
        </StyledContractStatus>
      </StyledContractStatusList>
    </StyledContractStatusWrap>
  );  
};