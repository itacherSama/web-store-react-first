import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputUI from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '@material-ui/core/Button';

import { setDelivery } from '@redux/form/actions';

import styles from './DeliveryForm.module.scss';

const dataCities = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Ульян1овск', label: 'Улья1новск' },
  { value: 'Улья2новск', label: 'Уль2яновск' },
];

const Input = ({
  label, register, required, defaultValue, name,
}) => (
  <FormControl fullWidth>

    <InputLabel>{label}</InputLabel>

    <InputUI
      defaultValue={ defaultValue } fullWidth inputRef={ register({ required }) }
      name={ name }
    />
  </FormControl>

);

const Select = ({
  label, name, register, options,
}) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <SelectUI
      MenuProps={ {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      } }
      defaultValue={ '' }
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
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const {
    city, street, house, flat, porch, floor, codeIntercom,
  } = useSelector((state) => state.formReducer);

  /*   const onSubmit = (data) => dispatch(setDelivery(data)); */

  return (
    <form onSubmit={ handleSubmit(submitForm) }>
      <Grid container spacing={ 4 }>
        <Grid
          item xs={ 6 }
        >
          <Select
            defaultValue={ city } label="Город"
            name="city" options={ dataCities } register={ register }
          />
        </Grid>
        <Grid
          item xs={ 6 }
        >
          <Input
            defaultValue={ street } label="Улица" name="street"
            register={ register } required
          />
        </Grid>

        <Grid item xs={ 3 }>
          <Input
            defaultValue={ house } label="Дом" name="house"

            register={ register } required
          />
        </Grid>
        <Grid item xs={ 3 }>
          <Input
            defaultValue={ flat } label="Квартира" name="flat"

            register={ register } required
          />
        </Grid><Grid item xs={ 2 }><Input
          defaultValue={ porch } label="Подъезд" name="porch"

          register={ register } required
                                   /></Grid>
        <Grid item xs={ 2 }><Input
          defaultValue={ floor } label="Этаж" name="floor"
          register={ register } required
                            /></Grid>
        <Grid item xs={ 2 }><Input
          defaultValue={ codeIntercom } label="Код" name="codeIntercom"
          register={ register } required
                            /></Grid>
      </Grid>
      <Button type="submit" variant="contained">Default</Button>
    </form>
  );
};
export default DeliveryForm;
