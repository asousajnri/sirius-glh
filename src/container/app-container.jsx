import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { UserProvider } from '../contexts/user-context';
import { AddContractProvider } from '../contexts/add-contract-modal-context';

import { GlobalStyled } from '../assets/global';

import { ContractsViewContainer } from '../container/views/contracts-view-container';
import { ProvidersViewContainer } from '../container/views/providers-view-container';
import { AddContractContainer } from './modals/add-contract-container'

export const AppContainer = () => {
  return (
    <UserProvider>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/dashboard/contracts" 
            element={
              <AddContractProvider>
                <ContractsViewContainer />
                <AddContractContainer />
              </AddContractProvider>
            }
          />
          <Route path="/dashboard/providers" element={<ProvidersViewContainer />}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};