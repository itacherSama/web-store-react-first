import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";


import styles from './PizzaBlock.module.scss';
import {Button} from "../index";
import {getCountItemById} from "../../utils/selectorsLogic";

const PizzaBlock = ({id, name, types, imageUrl, sizes, price, onAddItem}) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
    const [selectedType, setSelectedType] = React.useState(types[0]);
    const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
    const pricePizza = price[availableSizes.indexOf(selectedSize)];
    const countPizza = useSelector(({cartReducer}) => getCountItemById(cartReducer.items[id]));

    const handleAddItem = () => {
        const objPizza = {
            id,
            name,
            imageUrl,
            price: pricePizza,
            size: selectedSize,
            type: availableTypes[selectedType]
        };
        onAddItem(objPizza);
    }


    const selectTypeOfItem = (items, selectedItem, availableTypes, changeTypeFunc, idx) => {
        return (
            items.map((type, index) => (
                <li
                    className={cn({
                        [styles.active]:
                            (idx && selectedItem === index)
                            ||
                            (!idx && selectedItem === availableTypes[index]),
                        [styles.disabled]:
                            (idx && !availableTypes.includes(index))
                            ||
                            (!idx && !availableTypes.includes(availableTypes[index])),
                    })}
                    onClick={() => {
                        if (idx) changeTypeFunc(index)
                        else changeTypeFunc(availableTypes[index])
                    }}
                    key={type}
                > {type} </li>
            )));
    }

    return (
        <div className={styles.pizzaBlock}>
            <img
                className={styles.pizzaBlockImage}
                src={imageUrl}
                alt='pizza'
            />
            <h4 className={styles.pizzaBlockTitle}>{name}</h4>
            <div className={styles.pizzaBlockSelector}>
                <ul>
                    {selectTypeOfItem(availableTypes, selectedType, types, setSelectedType, true)}
                </ul>
                <ul>
                    {selectTypeOfItem(availableSizes, selectedSize, sizes, setSelectedSize, false)}
                </ul>
            </div>
            <div className={styles.pizzaBlockBottom}>
                <div className={styles.pizzaBlockPrice}>от {pricePizza} ₽</div>
                <Button className={'buttonAdd'} outline onClick={handleAddItem}>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='m10.8 4.8h7.2v1.2c7.2 0.5373 6.6627 0 6 0c5.3373 0 4.8 0.5373 4.8 1.2v4.8h1.2c0.5373 4.8 0 5.3373 0 6c0 6.6627 0.5373 7.2 1.2 7.2h4.8v10.8c4.8 11.4627 5.3373 12 6 12c6.6627 12 7.2 11.4627 7.2 10.8v7.2h10.8c11.4627 7.2 12 6.6627 12 6c12 5.3373 11.4627 4.8 10.8 4.8z'
                            fill='white'
                        />
                    </svg>
                    <span>добавить</span>
                    {countPizza && <i>{countPizza}</i>}
                </Button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    imageUrl: PropTypes.string,
    price: PropTypes.arrayOf(PropTypes.number),
    onAddItem: PropTypes.func
}

export default PizzaBlock;