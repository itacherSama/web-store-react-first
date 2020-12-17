import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUrlSearchParams } from 'use-url-search-params';

import { Categories, SortPopup, PizzaBlock } from '@components';
import { PizzaLoader } from '@shared/loaders';
import { fetchPizzas } from '@redux/pizza/operations';
import { addItem } from '@redux/cart/actions';
import { getItemsSelector, getLoadingSelector } from '@redux/pizza/selectors';
import { getSortBySelector, getSortCategorySelector } from '@redux/filter/selectors';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(getItemsSelector);
  const sortBy = useSelector(getSortBySelector);
  const sortCategory = useSelector(getSortCategorySelector);
  const isLoading = useSelector(getLoadingSelector);

  const [params, setParams] = useUrlSearchParams({}, {
    category: String,
    sort: String,
  });

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, sortCategory));
  }, [sortBy, sortCategory]);

  const onSetParams = (data, value) => {
    setParams({ [data]: value });
  };

  const onAddItem = (pizzaObj) => {
    dispatch(addItem(pizzaObj));
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.top }>
        <Categories
          onSetParams={ onSetParams }
          params={ params }
          sortCategory={ sortCategory }
        />
        <SortPopup
          onSetParams={ onSetParams }
          params={ params }
          sortBy={ sortBy }

        />
      </div>
      <h2 className={ styles.title }>Все пиццы</h2>
      <div className={ styles.items }>
        {
          !isLoading ? pizzas.map((pizza) => (
            <PizzaBlock
              key={ pizza.id }
              { ...pizza }
              onAddItem={ onAddItem
              }
            />
          )) : Array(10).fill(0).map((_, idx) => (
            <PizzaLoader key={ idx } />
          ))
        }
      </div>
    </div>

  );
};

export default Home;
