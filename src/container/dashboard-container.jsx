import React from 'react';
import { Avatar } from '@mui/material';

import { 
  StyledDashboard, 
  StyledDashboardHeader,
  StyledDashboardMainContent,
  StyledDashboardSwitchMenu,
  StyledDashboardHeaderUser,
  StyledDashboardHeaderUserArea,
} from './dashboard-container-styles';

import { Button } from '../components/button';

export const DashboardContainer = ({ 
  children, 
}) => {
  return (
    <StyledDashboard>
      <StyledDashboardHeader>
        <h1>Smart Contracts</h1>

        <StyledDashboardHeaderUserArea>
          <StyledDashboardHeaderUser alt="Solar" src='' />
        </StyledDashboardHeaderUserArea>
      </StyledDashboardHeader>
      <StyledDashboardMainContent>
        <StyledDashboardSwitchMenu>
          <Button className="dashboard-switch-menu-button" variant="contained" color="primary">Contratos</Button>
          <Button className="dashboard-switch-menu-button" variant="text">Fornecedores</Button>
        </StyledDashboardSwitchMenu>

        {children}
      </StyledDashboardMainContent>
    </StyledDashboard>
  );
};