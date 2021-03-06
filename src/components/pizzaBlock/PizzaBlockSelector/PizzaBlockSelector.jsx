import React from 'react';
import cn from 'classnames';
// import PropTypes from "prop-types";

import styles from './PizzaBlockSelector.module.scss';

const PizzaBlockSelector = React.memo(({
  availableTypes, selectedItem, activeTypes, onChangeType, view,
}) => {
  const generateValueByView = (index) => {
    switch (view) {
      case 'types':
        return index;

      case 'sizes':
        return activeTypes[index];
    }
  };

  return (
    <ul className={ styles.selector }>
      { availableTypes.map((type, index) => {
        const value = generateValueByView(index);

        return (
          <li
            className={ cn({
              [styles.active]: selectedItem === value,
              [styles.disabled]: !activeTypes.includes(value),
            }) }
            key={ type }
            onClick={ () => onChangeType(value) }
          > {type} </li>
        );
      })
      }
    </ul>
  );
});

export default PizzaBlockSelector;
