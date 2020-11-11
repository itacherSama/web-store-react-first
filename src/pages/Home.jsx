import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock, PizzaLoader} from '../components';
import {setCategory, setSortBy} from "../redux/actions/filter";
import {fetchPizzas} from "../redux/thunks/pizza";
import {addItem} from "../redux/actions/cart";

import {categoriesNames, sortNames} from "../utils/addInfo";

const Home = () => {
    const dispatch = useDispatch();
    const pizzas = useSelector(({pizzaReducer}) => pizzaReducer.items);
    const {sortBy, sortCategory} = useSelector(({filterReducer}) => filterReducer);
    const isLoading = useSelector(({pizzaReducer}) => pizzaReducer.isLoading);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, sortCategory));
    }, [sortBy, sortCategory]);

    const onSelectCategory = React.useCallback((index) => {
        const isNewCategory = sortCategory !== index;
        if (isNewCategory) {
            dispatch(setCategory(index));
        }
    }, [sortCategory]);

    const onSelectBySort = React.useCallback((index) => {
        const isNewSort = sortNames[index].type !== sortBy.type;
        if (isNewSort) {
            dispatch(setSortBy(sortNames[index].type));
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
            <h2 className='content__title'>все пиццы</h2>
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
