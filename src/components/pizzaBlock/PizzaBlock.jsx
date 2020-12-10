import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '@components';
import { availableTypes, availableSizes } from '@shared/addInfo';
import { getCountItemByIdSelector } from '@redux/cart/selectors';
import Icon from '@components/Icon';
import plusSvg from '@assets/img/plus.svg';
import PizzaBlockSelector from './PizzaBlockSelector';

import styles from './PizzaBlock.module.scss';

const PizzaBlock = ({
  id, name, types, imageUrl, sizes, price, onAddItem,
}) => {
  const [selectedType, setSelectedType] = React.useState(types[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
  const countPizza = useSelector((state) => getCountItemByIdSelector(state, id));

  const pricePizza = price[availableSizes.indexOf(selectedSize)];

  const availableSizesWithText = availableSizes.map((el) => `${el} см.`);

  const handleAddItem = () => {
    const objPizza = {
      id,
      name,
      imageUrl,
      price: pricePizza,
      size: selectedSize,
      type: availableTypes[selectedType],
    };
    onAddItem(objPizza);
  };

  return (
    <div className={ styles.pizzaBlock }>
      <img
        alt='pizza'
        className={ styles.image }
        src={ imageUrl }
      />
      <h4 className={ styles.title }>{name}</h4>
      <div className={ styles.selector }>
        <PizzaBlockSelector
          activeTypes={ types }
          availableTypes={ availableTypes }
          onChangeType={ setSelectedType }
          selectedItem={ selectedType }
          view={ 'types' }

        />
        <PizzaBlockSelector
          activeTypes={ sizes }
          availableTypes={ availableSizesWithText }
          onChangeType={ setSelectedSize }
          selectedItem={ selectedSize }
          view={ 'sizes' }
        />
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.price }>от {pricePizza} ₽</div>
        <Button className={ 'buttonAdd' } onClick={ handleAddItem } outline>
          <Icon src={ plusSvg } />
          <span>Добавить</span>
          {countPizza && <i>{countPizza}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  imageUrl: PropTypes.string,
  price: PropTypes.arrayOf(PropTypes.number),
  onAddItem: PropTypes.func,
};

export default PizzaBlock;
