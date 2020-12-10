import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import Grid from '@material-ui/core/Grid';
import { Input, Select } from '@components/anotherComponents/FormsControls';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@components/Button';

import styles from './DeliveryForm.module.scss';

const dataCities = [
  { value: 'Ульяновск', label: 'Ульяновск' },
];

const schema = yup.object().shape({
  city: yup.string().required(),
  street: yup.string().required(),
  house: yup.string().required(),
  flat: yup.number().required(),
  porch: yup.number().required(),
  floor: yup.number().required(),
  codeIntercom: yup.number().required(),
});

const DeliveryForm = ({ submitForm }) => {
  const {
    register, handleSubmit, control, errors,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
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
            label='Город' name='locality' options={ dataCities }
            required
          />
        </Grid>
        <Grid
          item xs={ 6 }
        >
          <Input
            defaultValue={ street } errors={ errors } label='Улица'
            name='street' register={ register }
          />
        </Grid>

        <Grid item xs={ 3 }>
          <Input
            defaultValue={ house } errors={ errors } label='Дом'
            name='house'
            register={ register }
          />
        </Grid>
        <Grid item xs={ 3 }>
          <Input
            defaultValue={ flat } errors={ errors } label='Квартира'
            name='flat'
            register={ register }
          />
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ porch } errors={ errors } label='Подъезд'
            name='porch'
            register={ register }
          />
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ floor } errors={ errors } label='Этаж'
            name='floor' register={ register }
          />
        </Grid>
        <Grid item xs={ 2 }>
          <Input
            defaultValue={ codeIntercom } errors={ errors } label='Код'
            name='codeIntercom' register={ register }
          />
        </Grid>
      </Grid>
      <div className={ styles.formSubmit }>

        <Button className={ 'buttonNext' } type='submit'>
          <span>Далее</span>
        </Button>
      </div>

    </form>
  );
};
export default DeliveryForm;
