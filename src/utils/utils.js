export const performOpItem = (items = [], item, operation) => {
    const isFindedElement = hasItemInArray(items, item);

    if (isFindedElement) {
        return incOrDeсItem(items, item, operation);
    } else {
        return addItem(items, item);
    }
}

export const hasItemInArray = (array, item) => {
    const res = findIndexInArray(array, item);
    return res !== -1;
}

const findIndexInArray = (array, item) => {
    return array.findIndex((arrayFromBlock) => {
        return Object.keys(item).every(key => item[key] === arrayFromBlock.item[key]);
    });
}


export const incOrDeсItem = (array, item, operation = '+') => {
    const newArr = copyFullArrayWithObj(array);
    newArr.some((arrayFromBlock) => {
        const isHasPizzaInState = Object.keys(item).every(key => item[key] === arrayFromBlock.item[key]);
        if (isHasPizzaInState) {
            if (operation === '+') {
                arrayFromBlock.totalItems += 1;
                arrayFromBlock.totalPrice += item.price;
            } else if (operation === '-' && arrayFromBlock.totalItems > 1) {
                arrayFromBlock.totalItems -= 1;
                arrayFromBlock.totalPrice -= item.price;
            }

        }
        return isHasPizzaInState;
    });
    return newArr;
}

export const copyFullArrayWithObj = (arr) => {
    return arr.map(el => ({ ...el }));
}

export const addItem = (arr, item) => {
    return [
        ...arr,
        {
            item: item,
            totalItems: 1,
            totalPrice: item.price
        }
    ]
}

export const deleteItem = (arr, item) => {
    const idx = findIndexInArray(arr, item);
    return arr.filter((el, index) => {
        return idx !== index;
    });
}

export const findTotalByProps = (items, findProps) => {
    const isArray = Array.isArray(findProps);

    if (isArray) {
        return findProps.map((el) => {
            return findTotalByProps(items, el);
        });
    }

    return Object.values(items).reduce((sumById, pizzasById) => {
        const sumPizzasById = Object.values(pizzasById).reduce((sum, pizzasByTypes) => {
            return sum + pizzasByTypes[findProps];
        }, 0);
        return sumById + sumPizzasById;
    }, 0);
}

export const createArrayWithObjsByProperty = (Obj, prop) => {
    let newArr = [];

    const checkPropertyInObj = (Obj, prop) => {
        const firstItemInObj = Obj[(Object.keys(Obj)[0])];
        let res = firstItemInObj.hasOwnProperty(prop) ? Obj : false;
        return res;
    }

    const findObjByProp = (Obj, prop) => {

        let res = checkPropertyInObj(Obj, prop);
        if (!!res) {
            newArr.push(...res);
        }
        if (!res) {
            for (let elem in Obj) {
                findObjByProp(Obj[elem], prop);;
            }
        }
    }
    try {
        findObjByProp(Obj, prop);
    } catch (error) {
        return newArr;
    }

    return newArr;
}

export function getCountItemById(item) {
    if (!Array.isArray(item)) return false;
    return item.reduce((prev, cur) => {
        return prev + cur.totalItems;
    }, 0);
}