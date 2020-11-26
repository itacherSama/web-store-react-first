import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUrlSearchParams } from 'use-url-search-params';

import { Categories, SortPopup, PizzaBlock } from '@components';
import { PizzaLoader } from '@shared/loaders';
import { setCategory, setSortBy } from '@redux/filter/actions';
import { fetchPizzas } from '@redux/pizza/operations';
import { addItem } from '@redux/cart/actions';

import { categoriesNames, sortNames } from '@shared/addInfo';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzaReducer }) => pizzaReducer.items);
  const { sortBy, sortCategory } = useSelector(({ filterReducer }) => filterReducer);
  const isLoading = useSelector(({ pizzaReducer }) => pizzaReducer.isLoading);
  const [params, setParams] = useUrlSearchParams({}, {
    category: String,
    sort: String
  });

  React.useEffect(() => {
    let category;
    if (params.category) {
      const checkRes = parseInt(params.category);
      category = isNaN(checkRes) ? params.category : checkRes;
    } else {
      category = 'all';
    }
    dispatch(setCategory(category))

  }, [params.category]);

  React.useEffect(() => {
    if (params.sort) dispatch(setSortBy(params.sort));
  }, [params.sort]);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, sortCategory));
  }, [sortBy, sortCategory]);

  const onSetParams = (data, value) => {
    setParams({ [data]: value });
  };

  const onSelectCategory = React.useCallback((index) => {
    const isNewCategory = sortCategory !== index;
    if (isNewCategory) {
      onSetParams('category', index);
    }
  }, [sortCategory]);

  const onSelectBySort = React.useCallback((index) => {
    const current = sortNames[index].type;
    const isNewSort = current !== sortBy.type;
    if (isNewSort) {
      onSetParams('sort', current);

    }
  }, [sortBy]);

  const onAddItem = (obj) => {
    dispatch(addItem(obj));
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories
          onSelectCategory={onSelectCategory}
          items={categoriesNames}
          sortCategory={sortCategory}
        />
        <SortPopup
          items={sortNames}
          onSelectBySort={onSelectBySort}
          sortBy={sortBy}
        />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {
          !isLoading ? pizzas.map((pizza, idx) => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
              onAddItem={onAddItem
              } />
          )) : Array(10).fill(0).map((_, idx) => (
            <PizzaLoader key={idx} />
          ))
        }
      </div>
    </div>

  )
}

export default Home;
