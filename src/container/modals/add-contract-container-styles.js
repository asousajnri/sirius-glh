import styled from 'styled-components';

export const StyledCheckListContract = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .contract-value-field {
    width: 100%;
  }
`;

export const StyledCheckListContractForm = styled.div`
  display: flex;
  flex-direction: column;

  .textarea {
    margin-bottom: 20px;
  }

  .checklist-add-item-button {
    margin-left: auto;
  }

`;

export const StylecCheckListContractList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  margin-bottom: 30px;

  .checklist-item {
    padding: 10px;
    background: #ccc;
    display: flex;
    align-items: left;
    justify-content: space-between;
    margin-bottom: 2px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;

  .dates-label {
    margin-bottom: 2px;
  }

  .date-picker {
    margin: 8px 0;
    height: 56px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px 15px;
  }
`;