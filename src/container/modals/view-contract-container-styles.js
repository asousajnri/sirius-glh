import styled from 'styled-components';
import {  Dialog } from '@mui/material'

export const StyledViewContractContainer = styled(Dialog)`
  .checklist-section {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const StyledBasicInfosWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  background: #ded;
  padding: 20px;
  margin-bottom: 30px;
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
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const StyledSignaturesWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledSignature = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #ccc;
  flex: 1;
  font-weight: bold;

  &:nth-child(even) {
    background: #eec;
  }
`;