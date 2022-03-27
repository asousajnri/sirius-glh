import styled from 'styled-components';

export const StyledFilterContracts = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;

export const StyledSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    
    @media (min-width: 600px) {
      margin-bottom: 0;
    }
  }

'`;

export const StyledFilterForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 5px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
  
  .filter-contracts-search {
    margin-bottom: 20px;
    flex: 1;

    @media (min-width: 600px) {
      margin-bottom: 0;
      margin-right: 20px;
      flex: 2;
    }
  }

  .filter-contracts-status {
    margin: 0;
    flex: 1;
  }
`;