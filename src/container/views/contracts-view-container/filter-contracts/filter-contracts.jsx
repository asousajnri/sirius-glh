import React from 'react';

import { 
  useAddContractModalContext 
} from '../../../../contexts/add-contract-modal-context';

import { 
  TextField, 
  FormControl, 
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  OutlinedInput,
  Button,
} from '@mui/material';

import {
  StyledFilterContracts,
  StyledFilterForm,
  StyledSectionTitle,
} from './filter-contracts-style';


export const FilterContracts = () => {
  const { setOpenModal } = useAddContractModalContext();
  const [contract, setContracts] = React.useState([]);

  const contractStatus = [
    'Concluído - Há tempo',
    'Concluído - atradado',
    'Cancelado',
    'Bloqueado',
    'Recisão',
    'Em Andamento',
    'Em espera',
    'Atrasado'
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setContracts(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <StyledFilterContracts>
      <StyledSectionTitle>
        <h2>Contratos</h2>

        <Button 
          variant='contained'
          onClick={() => setOpenModal(true)}
        >
          Criar contrato
        </Button>
      </StyledSectionTitle>

      <StyledFilterForm>
        <TextField 
          id="outlined-basic" 
          label="Pesquisar por: região, gerente, tipo e fornecedor" 
          variant="outlined" 
          className="filter-contracts-search"
        />

        <FormControl className='filter-contracts-status'>
          <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={contract}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {contractStatus.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={contract.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledFilterForm>
    </StyledFilterContracts>
  );
};