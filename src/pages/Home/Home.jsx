import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {Categories, SortPopup, PizzaBlock, PizzaLoader} from './../../components';
import {setCategory, setSortBy} from "./../../redux/actions/filter";
import {fetchPizzas} from "./../../redux/thunks/pizza";
import {addItem} from "./../../redux/actions/cart";

import {categoriesNames, sortNames} from "./../../utils/addInfo";
import {addSearchParamsUrl} from './../../utils/utils';

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzaReducer}) => pizzaReducer.items);
    const {sortBy, sortCategory} = useSelector(({filterReducer}) => filterReducer);
    const isLoading = useSelector(({pizzaReducer}) => pizzaReducer.isLoading);
    let history = useHistory();
    let location = useLocation();


    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, sortCategory));
    }, [sortBy, sortCategory]);

    const onSelectCategory = React.useCallback((index) => {
        const isNewCategory = sortCategory !== index;
        if (isNewCategory) {
            dispatch(setCategory(index));
            addSearchParamsUrl('category', index, location, history);

        }
    }, [sortCategory]);

    React.useEffect(() => {
        console.log(123);
    }, [location]);

    const onSelectBySort = React.useCallback((index) => {
        const current = sortNames[index].type;
        const isNewSort = current !== sortBy.type;
        if (isNewSort) {
            dispatch(setSortBy(current));
            addSearchParamsUrl('type', current, location, history);

        }
    }, [sortBy]);

    const onAddItem = (obj) => {
        dispatch(addItem(obj));
    }

    return (
        <div className='container'>
            <div className='content__top'>
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
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {
                    !isLoading ? pizzas.map((pizza, idx) => (
                        <PizzaBlock
                            key={pizza.id}
                            {...pizza}
                            onAddItem={onAddItem
                            }/>
                    )) : Array(10).fill(0).map((_, idx) => (
                        <PizzaLoader key={idx} />
                    ))
                }
            </div>
        </div>

    )
}

export default Home;
