import React from 'react';
import { Controller } from 'react-hook-form';

import FormControlUI from '@material-ui/core/FormControl';
import InputUI from '@material-ui/core/Input';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export const Input = ({
  label, register, defaultValue, name, errors,
}) => {
  const error = errors ? !!errors[name] : false;
  return (
    <FormControlUI fullWidth>

      <InputLabel>{label}</InputLabel>

      <InputUI
        defaultValue={ defaultValue }
        error={ error } fullWidth inputRef={ register }
        name={ name }
      />
    </FormControlUI>

  );
};

export const Select = ({
  label, name, control, options, required, defaultValue,
}) => (
  <FormControlUI fullWidth>
    <InputLabel>{label}</InputLabel>

    <Controller
      as={ SelectUI }
      control={ control }
      defaultValue={ defaultValue || options[0].value }
      name={ name }
      rules={ { required } }
    >
      {options.map((data) => (
        <MenuItem key={ data.label } value={ data.value }>{data.label}</MenuItem>
      )) }
    </Controller>
  </FormControlUI>
);
