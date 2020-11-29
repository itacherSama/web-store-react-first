import React from 'react';
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Button } from '@components';
import PizzaBlockSelector from './PizzaBlockSelector';
import { availableTypes, availableSizes } from "@shared/addInfo";
import { getCountItemById } from "@utils/utils";
import { IconPlus } from '@components/Icons';

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
          <IconPlus />
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