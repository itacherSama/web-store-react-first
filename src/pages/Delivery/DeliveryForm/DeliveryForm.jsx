import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input, Select } from '@components/anotherComponents/FormsControls';

/* import styles from './DeliveryForm.module.scss'; */

const dataCities = [
  { value: 'Ульяновск', label: 'Ульяновск' },
  { value: 'Улья2новск', label: 'Уль2яновск' },
];

const DeliveryForm = ({ submitForm }) => {
  const { register, handleSubmit, control } = useForm();
  const {
    city, street, house, flat, porch, floor, codeIntercom,
  } = useSelector((state) => state.formReducer);

  return (
    <form onSubmit={ handleSubmit(submitForm) }>
      <Grid container spacing={ 4 }>
        <Grid
          item xs={ 6 }
        >
          <Select
            control={ control } defaultValue={ city }
            label="Город" name="city" options={ dataCities }
            required
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
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ porch } label="Подъезд" name="porch"

            register={ register } required
          />
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ floor } label="Этаж" name="floor"
            register={ register } required
          />
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ codeIntercom } label="Код" name="codeIntercom"
            register={ register } required
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">Далее</Button>
    </form>
  );
};
export default DeliveryForm;
