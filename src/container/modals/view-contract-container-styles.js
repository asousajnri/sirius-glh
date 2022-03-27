import styled from 'styled-components';
import {  Dialog } from '@mui/material'

export const StyledViewContractContainer = styled(Dialog)`
`;

export const StyledBasicInfosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
`;

export const StyledBasicInfo = styled.span`
  display: flex;
  flex-direction: column;

  .label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .info {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const StyledChecklist = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const StyledSignatures = styled.li`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StyledSignature = styled.div`
  display: flex;
  padding: 10px;
  background: #ccc;
`;