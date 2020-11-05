import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import Button from "../Button";

const PizzaBlock = ({id, name, types, imageUrl, sizes, price, onAddItem, countPizzas}) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
    const [selectedType, setSelectedType] = React.useState(types[0]);
    const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
    const pricePizza = price[availableSizes.indexOf(selectedSize)];

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
                        active:
                            (idx && selectedItem === index)
                            ||
                            (!idx && selectedItem === availableTypes[index]),
                        disabled:
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
        <div className='pizza-block'>
            <img
                className='pizza-block__image'
                src={imageUrl}
                alt='pizza'
            />
            <h4 className='pizza-block__title'>{name}</h4>
            <div className='pizza-block__selector'>
                <ul>
                    {selectTypeOfItem(availableTypes, selectedType, types, setSelectedType, true)}
                </ul>
                <ul>
                    {selectTypeOfItem(availableSizes, selectedSize, sizes, setSelectedSize, false)}
                </ul>
            </div>
            <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>от {pricePizza} ₽</div>
                <Button className='button button--add' outline onClick={handleAddItem}>
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
                    <i>{countPizzas}</i>
                </Button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    imageUrl: PropTypes.string,
    price: PropTypes.arrayOf(PropTypes.number),
}

PizzaBlock.defaultProps = {
    name: '',
    types: [],
    sizes: [],
    price: 0,
}

export default PizzaBlock;