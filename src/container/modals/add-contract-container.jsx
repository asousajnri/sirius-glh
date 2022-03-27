import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '../../components/button';

import { useAddContractModalContext } from '../../contexts/add-contract-modal-context';
import { useUserContext } from '../../contexts/user-context/use-user-context';

import {
  StylecCheckListContractList,
  StyledCheckListContract,
  StyledCheckListContractForm,
  StyledDates,
} from './add-contract-container-styles';
;

export const AddContractContainer = () => {
  const { setOpenModal, openModal } = useAddContractModalContext();
  const { userCompany, setContracts } = useUserContext();

  const [contractType, setContractType] = React.useState('')
  const [contractsType, setContractsType] = React.useState([]);

  const [provider, setProvider] = React.useState('');
  const [providers, setProviders] = React.useState([]);

  const [recipient, setRecipient] = React.useState('');
  const [recipients, setRecipients] = React.useState([]);

  const [newCheckListItem, setNewCheckListItem] = React.useState('');
  const [checkListContract, setCheckListContract] = React.useState([]);

  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const [contractValue, setContractValue] = React.useState(0);

  React.useEffect(() => {
    setRecipient('');
    setCheckListContract([]);
    setProvider('');
    setContractType('');
    setStartDate('');
    setEndDate('');
    setContractValue('');
  }, [openModal])

  const getContractsType = React.useCallback(async () => {
    setContractType('');

    try {
      const { data }= await axios.get('http://localhost:3006/contracts_type');
      setContractsType(data);
    } catch (err) {
      return err;
    }
  }, [])

  React.useEffect(() => {
    getContractsType();
  }, [])

  const getProviders = React.useCallback(async () => {
    setProvider('');

    try {
      if(!contractType) return;

      const { data }= await axios.get('http://localhost:3006/providers');

      const providersFiltered = data.filter(providerItem => {
        return providerItem.contracts_type.includes(contractType.id)
      });

      setProviders(providersFiltered);
    } catch (err) {
      return err;
    }
  }, [contractType])

  React.useEffect(() => {
    getProviders();
  }, [getProviders])

  const getRecipients = React.useCallback(async () => {
    setRecipient('');

    try {
      if(!provider) return;
      const { data }= await axios.get('http://localhost:3006/recipients');
      setRecipients(data);
    } catch (err) {
      return err;
    }
  }, [provider])

  React.useEffect(() => {
    getRecipients();
  }, [getRecipients])

  const handleAddNewChecklistItem = React.useCallback(() => {
    if(!provider) return;
    if(!recipient) return;
    if(!newCheckListItem.trim()) return;

    setCheckListContract(prevState => [
      ...prevState,
      {
        "id": uuidv4(),
        "item": newCheckListItem,
        "provider": {
          "id": provider.id,
          "isChecked": false,
        },
        "recipient": {
          "id": recipient.id,
          "isChecked": false
        } 
      }
    ])

    setNewCheckListItem('');
  }, [newCheckListItem, provider, recipient]); 

  const handleCreateContract = React.useCallback(async () => {
    if(!contractType) return;
    if(!provider) return;
    if(!userCompany) return;
    if(!checkListContract) return;
    if(!recipient) return;

    const { data } = await axios.post('http://localhost:3006/contracts', {
      contract_type: contractType,
      provider: provider,
      recipient: recipient,
      checklist_contract: checkListContract,
      endDate,
      startDate,
      status: 'pending',
      user_company: userCompany,
      contract_value: String(contractValue),
    });

    setOpenModal(false);
    setContracts(prevState => [...prevState, data]);
  }, [
    contractType,
    provider,
    userCompany,
    recipient,
    checkListContract,
    startDate,
    endDate,
    setOpenModal,
    setContracts,
    contractValue,
  ]);

  return (
    <Dialog
      onClose={() => setOpenModal(false)}
      aria-labelledby="customized-dialog-title"
      open={openModal}
    >
      <DialogTitle 
        id="customized-dialog-title" 
        onClose={() => setOpenModal(false)}
        style={{ 
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        Criação de um novo contrato

        <IconButton 
          title='Fechar'
          onClick={() => setOpenModal(false)}
          style={{
            marginLeft: '20px'
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers >
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel id="demo-simple-select-label">
            Tipo de contrato
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={contractType}
            label="Tipo de contrato"
            onChange={({ target }) => setContractType(target.value)}
          >
            {contractsType.map(contractTypeItem => (
              <MenuItem 
                key={contractTypeItem.id}
                value={contractTypeItem}
              >
                {contractTypeItem.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {(providers.length > 0 && contractType) && (
          <FormControl fullWidth style={{ marginBottom: '10px' }}>
            <InputLabel id="demo-simple-select-label">
              Fornecedor
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={provider}
              label="Tipo de contrato"
              onChange={({ target }) => setProvider(target.value)}
            >
              {providers.map(providerItem => (
                <MenuItem 
                  key={providerItem.id}
                  value={providerItem}
                >
                  {providerItem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {(recipients.length > 0 && 
        providers.length > 0 &&
        provider) && (
          <FormControl fullWidth style={{ marginBottom: '10px' }}>
            <InputLabel id="demo-simple-select-label">
              Beneficiário 
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={recipient}
              label="Tipo de contrato"
              onChange={({ target }) => setRecipient(target.value)}
            >
              {recipients.map(recipientItem => (
                <MenuItem 
                  key={recipientItem.id}
                  value={recipientItem}
                >
                  {recipientItem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {(contractType && provider && recipient) && (
          <StyledCheckListContract>
            <h3>Checklist</h3>
            <StyledCheckListContractForm>
              <TextField 
                value={newCheckListItem}
                id="outlined-basic" 
                label="Item" 
                variant="outlined"
                className="textarea"
                onChange={({ target }) => setNewCheckListItem(target.value)}
              />
              <StylecCheckListContractList>
                {checkListContract.map((checklistItem, index) => (
                  <li className='checklist-item'>
                    {index}: {checklistItem.item}
                  </li>
                ))}
              </StylecCheckListContractList>
              <Button 
                className="checklist-add-item-button" 
                variant="contained"
                onClick={handleAddNewChecklistItem}
              >
                Adicionar
              </Button>
            </StyledCheckListContractForm>
          </StyledCheckListContract>
        )}

        {checkListContract.length > 0 && (
          <StyledDates>
            <span className='dates-label'>Data Inicial</span>
            <DatePicker
              className='date-picker'
              selected={startDate} 
              onChange={date => setStartDate(date)}   
            />
            <span className='dates-label'> Data Final</span>
            <DatePicker
              className='date-picker'
              selected={endDate} 
              onChange={date => setEndDate(date)}   
            />
          </StyledDates>
        )}

        {(startDate && endDate) && (
          <TextField 
            value={contractValue}
            id="outlined-basic" 
            label="Valor do contrato" 
            variant="outlined"
            className="contract-value-field"
            onChange={({ target }) => setContractValue(target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button 
          variant="contained" 
          autoFocus 
          onClick={handleCreateContract}>
          Criar contrato
        </Button>
      </DialogActions>
    </Dialog>
  );
};