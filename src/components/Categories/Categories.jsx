import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Categories.module.scss';

const Categories = React.memo(({ items, onSelectCategory, sortCategory }) => {
  const onSelectItem = (index) => {
    onSelectCategory(index);
  };

  return (
    <div className={ styles.categories }>
      <ul>
        <li
          className={ cn({
            [styles.active]: sortCategory === 'all',
          }) }
          onClick={ () => onSelectItem('all') }
        >Все</li>
        {
          items && items.map((name, index) => (
            <li
              className={ cn({
                [styles.active]: sortCategory === index,
              }) }
              key={ `${name}_${index}` }
              onClick={ () => onSelectItem(index) }
            >
              {name}</li>
          ))
        }
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onSelectCategory: PropTypes.func,
  sortCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Categories.displayName = 'Categories';

export default Categories;
