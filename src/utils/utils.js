export const performOpItem = (items = [], item, operation) => {
  const isFindedElement = hasItemInArray(items, item);

  if (isFindedElement) {
    return calcItem(items, item, operation);
  } else {
    return addItem(items, item);
  }
}

export const hasItemInArray = (array, item) => {
  const res = findIndexInArray(array, item);
  return res !== -1;
}

const findIndexInArray = (array, item) => {
  const keysOfItem = Object.keys(item);

  const idx = array.findIndex((arrayFromBlock) => {
    const areEqual = comparisonObjByKeys(keysOfItem, item, arrayFromBlock.item);
    return areEqual;
  });

  return idx;
}

const comparisonObjByKeys = (keys, firstObj, secondObj) => {
  const areEqual = keys.every(key => firstObj[key] === secondObj[key]);
  return areEqual;
}

export const calcItem = (array, item, operation) => {
  const newArr = copyFullArrayWithObj(array);
  const idxItem = findIndexInArray(newArr, item);

  if (idxItem !== -1) {
    const currentItem = newArr[idxItem];
    const { totalItems, totalPrice } = currentItem;

    if (operation === '+') {
      newArr[idxItem] = {
        ...currentItem,
        totalItems: totalItems + 1,
        totalPrice: totalPrice + item.price
      }
    } else if (operation === '-' && currentItem.totalItems > 1) {
      newArr[idxItem] = {
        ...currentItem,
        totalItems: totalItems - 1,
        totalPrice: totalPrice - item.price
      }
    }

  }

  return newArr;
}

export const copyFullArrayWithObj = (arr) => {
  const copiedArrOfObj = arr.map(el => ({ ...el }));

  return copiedArrOfObj;
}

export const addItem = (arr, item) => {
  const upgradedItem = [
    ...arr,
    {
      item: item,
      totalItems: 1,
      totalPrice: item.price
    }
  ];

  return upgradedItem;
}

export const deleteItem = (arr, item) => {
  const idx = findIndexInArray(arr, item);
  const filteredArray = arr.filter((el, index) => {
    return idx !== index;
  });

  return filteredArray;
}

export const findTotalByProps = (items, findProps) => {
  const isArray = Array.isArray(findProps);

  if (isArray) {
    const resultsByProps = findProps.map((el) => {
      const resultByProp = findTotalByProps(items, el);
      return resultByProp;
    });

    return resultsByProps;
  }

  const arraysByIdPizza = Object.values(items);
  const totalSum = arraysByIdPizza.reduce((sumById, pizzasById) => {
    const arrayByTypesPizza = Object.values(pizzasById);
    const sumPizzasById = arrayByTypesPizza.reduce((sum, pizzasByTypes) => {
      const result = sum + pizzasByTypes[findProps];
      return result;
    }, 0);

    return sumById + sumPizzasById;
  }, 0);

  return totalSum;
}

export const createArrayWithObjsByProperty = (obj, prop) => {
  const arrWithObjsByProperty = [];

  const findObjByProp = (object, prop) => {
    const hasPropertyInObj = object.hasOwnProperty(prop);

    if (hasPropertyInObj) {
      arrWithObjsByProperty.push(object);
    } else {
      for (const elem in object) {
        findObjByProp(object[elem], prop);
      }
    }
  }

  findObjByProp(obj, prop);

  return arrWithObjsByProperty;
}

export const getCountItemById = (item) => {
  if (!Array.isArray(item)) return false;

  const countItemById = item.reduce((prev, cur) => {
    const result = prev + cur.totalItems;

    return result;
  }, 0);

  return countItemById;
}
