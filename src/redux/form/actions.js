import actionTypes from './types';

export const setDelivery = (formData) => ({
  type: actionTypes.SET_DELIVERY,
  payload: formData,
});
