import React from 'react';
import cn from 'classnames';
// import PropTypes from "prop-types";

import styles from './PizzaSelector.module.scss';

const PizzaSelector = React.memo(({ availableTypes, selectedItem, activeTypes, onChangeType, view }) => {

  const generateValueByView = (index) => {
    switch(view) {
      case 'types':
        return index;

      case 'sizes':
        return activeTypes[index];
    }
  }

  return (
    <ul>
      { availableTypes.map((type, index) => {
        const value = generateValueByView(index);
        
        return (
          <li
            className={cn({
              [styles.active]: selectedItem === value,
              [styles.disabled]: !activeTypes.includes(value),
            })}
            onClick={() => onChangeType(value) }
            key={type}
          > {type} </li>
      )})
      }
    </ul>
    )
});

export default PizzaSelector;