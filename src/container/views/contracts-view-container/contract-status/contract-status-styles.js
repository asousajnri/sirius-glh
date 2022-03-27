import styled, { css } from 'styled-components';

const statusColors = css`
  ${props => props.variant === 'done-at-time' && css`
    color: #9FC131;
    border-color: #9FC131;
  `};

  ${props => props.variant === 'done-with-delay' && css`
    color: #11468F;
    border-color: #11468F;
  `};

  ${props => props.variant === 'terminate' && css`
    color: #005D5D;
    border-color: #005D5D;
  `};

  ${props => props.variant === 'blocked' && css`
    color: #E83A14;
    border-color: #E83A14;
  `};

  ${props => props.variant === 'in-progress' && css`
    color: #9C51E0;
    border-color: #9FC131;
  `};

  ${props => props.variant === 'pending' && css`
    color: #C1A3A3;
    border-color: #9FC131;
  `};
`;

export const StyledContractStatusWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  .section-title {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 40px;
  }
`;

export const StyledContractStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 30px 20px;
  background: #fff;

  ${statusColors}
`;

export const StyledContractStatusList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  margin-bottom: 40px;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledContractStatusTitleBlock = styled.h3`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  line-height: 1;
`;

export const StyledContractStatusLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
`;

export const StyledContractStatusTitle = styled.span`
  font-size: 20px;
  line-height: 25px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledContractStatusValue = styled.span`
  font-size: 80px;
  font-weight: 900;
  line-height: 50px;
  margin-bottom: 20px;

  ${statusColors}
`;