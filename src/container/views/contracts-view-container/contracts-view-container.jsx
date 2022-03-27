import React from 'react';
import axios from 'axios';

import { useUserContext } from '../../../contexts/user-context';

import {
  Paper,
  TableContainer, 
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableBody,
} from '@mui/material';

import { DashboardContainer } from '../../dashboard-container';

import { ContractStatus } from './contract-status';
import { FilterContracts } from './filter-contracts';
import { Button } from '../../../components/button';

export const ContractsViewContainer = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { setContracts, contracts } = useUserContext();

  const columns = [
    { id: 'code', label: 'Código', minWidth: 170 },
    { id: 'contract', label: 'Contrato', minWidth: 100 },
    {
      id: 'provider',
      label: 'Fornecedor',
      minWidth: 170,
    },
    {
      id: 'contractValue',
      label: 'Valor do contrato',
      minWidth: 170,
    },
    {
      id: 'startDate',
      label: 'Data de início',
      minWidth: 170,
    },
    {
      id: 'endDate',
      label: 'Data de encerramento',
      minWidth: 170,
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
    },
    {
      id: 'contractView',
      label: 'Ações',
      minWidth: 170,
    },
  ];

  function createData(
    code, 
    contract, 
    provider, 
    contractValue,
    startDate, 
    endDate,
    status,
    contractView,
  ) {
    return {
      code,
      contract,
      provider,
      contractValue,
      startDate,
      endDate,
      status,
      contractView,
    };
  }

  const rows = React.useMemo(() => contracts.map(contractData => ({
    code: contractData.id,
    contract: contractData.contract_type.title,
    provider: contractData.provider.name,
    contractValue: contractData.contract_value,
    startDate: contractData.startDate,
    endDate: contractData.endDate,
    status: contractData.status,
    contractViews: 'Visualizar'
  })), [contracts]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getContracts = React.useCallback(async () => {
    const { data } = await axios.get('http://localhost:3006/contracts');
    setContracts(data);
  }, [setContracts])

  React.useEffect(() => {
    getContracts();
  }, [])

  return (<DashboardContainer>
    <ContractStatus />
    <FilterContracts />

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'contractView' ? (
                            <Button variant="contained">Visualizar</Button>
                          ) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </DashboardContainer>);
};