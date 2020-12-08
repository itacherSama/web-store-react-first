import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputUI from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';

import { setDelivery } from '@redux/form/actions';

import styles from './DeliveryForm.module.scss';

const dataCities = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Саранск', label: 'Саранс2к' },
  { value: 'Саранск', label: 'Саран23ск' },
  { value: 'Саранск', label: 'Сар4анск' },
  { value: 'Саранск', label: 'С5аранск' },
  { value: 'Саранск', label: 'Са6ранск' },
  { value: 'Саранск', label: 'Сара7нск' },
  { value: 'Саранск', label: 'Саран8ск' },
  { value: 'Саранск', label: 'Саран3ск' },
];

const Input = ({
  label, register, required, defaultValue, name, placeholder,
}) => (
  <div className={ styles.container }>
    <label className={ styles.inputLabel }>{label}</label>
    <InputUI
      defaultValue={ defaultValue } fullWidth inputRef={ register({ required }) }
      name={ name } placeholder={ placeholder }
    />
  </div>
);

const Select = ({
  label, name, register, options,
}) => (
  <FormControl>
    <label className={ styles.inputLabel }>{label}</label>
    <SelectUI
      defaultValue={ options[0].value }
      inputRef={ register }
      name={ name }
    >
      { options.map((data) => (
        <MenuItem key={ data.label } value={ data.value }>{data.label}</MenuItem>
      ))}
    </SelectUI>
  </FormControl>
);

const DeliveryForm = ({ submitForm }) => {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const { city, street } = useSelector((state) => state.formReducer);

  /*   const onSubmit = (data) => dispatch(setDelivery(data)); */

  return (
    <form onSubmit={ handleSubmit(submitForm) }>
      <Grid container spacing={ 4 }>
        <Grid
          item md={ 6 }
          xs={ 12 }
        >
          <Select
            control={ control } defaultValue={ city } label="Город"
            name="city" options={ dataCities } register={ register }
          />
        </Grid>
        <Grid
          item md={ 6 }
          xs={ 12 }
        >
          <Input
            defaultValue={ street } label="Улица" name="street"
            placeholder="Введите улицу" register={ register } required
          />
        </Grid>

      </Grid>
      <Button type="submit" variant="contained">Default</Button>
    </form>
  );
};
export default DeliveryForm;
