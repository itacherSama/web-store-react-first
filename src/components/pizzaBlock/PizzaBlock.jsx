import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Button } from '@components';
import PizzaBlockSelector from './PizzaBlockSelector';
import { availableTypes, availableSizes } from "@shared/addInfo";
import { getCountItemById } from "@utils/utils";
import styles from './PizzaBlock.module.scss';

const PizzaBlock = ({ id, name, types, imageUrl, sizes, price, onAddItem }) => {
  const [selectedType, setSelectedType] = React.useState(types[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
  const countPizza = useSelector(({ cartReducer }) => getCountItemById(cartReducer.items[id]));
  const pricePizza = price[availableSizes.indexOf(selectedSize)];

  const availableSizesWithText = availableSizes.map(el => `${el} см.`);


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

  return (
    <div className={styles.pizzaBlock}>
      <img
        className={styles.image}
        src={imageUrl}
        alt='pizza'
      />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.selector}>
        <PizzaBlockSelector 
          availableTypes={availableTypes}
          selectedItem={selectedType}
          activeTypes={types}
          onChangeType={setSelectedType}
          view={'types'}

        />
        <PizzaBlockSelector 
          availableTypes={availableSizesWithText}
          selectedItem={selectedSize}
          activeTypes={sizes}
          onChangeType={setSelectedSize}
          view={'sizes'}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>от {pricePizza} ₽</div>
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