import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDashboardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 30px;
    color: #000;

    @media (min-width: 900px) {
      margin-bottom: 0;
    }
  }
`;

export const StyledDashboardHeaderUserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
  }
`;

export const StyledDashboardHeaderUser = styled(Avatar)`
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.1);
  }
  
  @media (min-width: 900px) {
    margin-bottom: 0;
    margin-left: 20px;
  }
`;

export const StyledDashboardMainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StyledDashboardSwitchMenu = styled.div`
  background: #0000000f;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  @media (min-width: 600px) {
    flex-direction: row;
  }

  .dashboard-switch-menu-button {
    flex: 1;
    margin: 5px 0;
    font-weight: bold;

    @media (min-width: 600px) {
      margin: 0 5px;
    }
  }
`;