import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import Button from "../Button";
import {useSelector} from "react-redux";
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
        <div className="pizza-block">
            <img
                className='pizza-block_img'
                src={imageUrl}
                alt='pizza'
            />
            <h3 className="pizza-block_name">{name}</h3>
            <div className="pizza-block_section">
                <ul>
                    {selectTypeOfItem(availableTypes, selectedType, types, setSelectedType, true)}
                </ul>
                <ul>
                    {selectTypeOfItem(availableSizes.map(el => `${el} см.`), selectedSize, sizes, setSelectedSize, false)}
                </ul>
            </div>
            <div className="pizza-block__bot">
                <div className="pizza-block__bot_price">
                    от {pricePizza} ₽
                </div>
                <Button class="button button--add" outline onClick={handleAddItem}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"/>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"/>
                    </svg>

                    <span>Добавить</span>
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