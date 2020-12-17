import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCategory } from '@redux/filter/actions';
import { categoriesNames } from '@shared/addInfo';

import styles from './Categories.module.scss';

const Categories = React.memo(({ onSetParams, sortCategory, params }) => {
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    const isNewCategory = sortCategory !== index;
    if (isNewCategory) {
      onSetParams('category', index);
    }
  }, [sortCategory]);

  React.useEffect(() => {
    let category;
    if (params.category) {
      const checkRes = parseInt(params.category);
      category = Number.isNaN(checkRes) ? params.category : checkRes;
    } else {
      category = 'all';
    }
    dispatch(setCategory(category));
  }, [params.category]);

  return (
    <div className={ styles.categories }>
      <ul>
        <li
          className={ cn({
            [styles.active]: sortCategory === 'all',
          }) }
          onClick={ () => onSelectCategory('all') }
        >Все</li>
        {
          categoriesNames && categoriesNames.map((name, index) => (
            <li
              className={ cn({
                [styles.active]: sortCategory === index,
              }) }
              key={ `${name}_${index}` }
              onClick={ () => onSelectCategory(index) }
            >
              {name}</li>
          ))
        }
      </ul>
    </div>
  );
});

Categories.propTypes = {
  onSetParams: PropTypes.func,
  sortCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  params: PropTypes.object,
};

export default Categories;
