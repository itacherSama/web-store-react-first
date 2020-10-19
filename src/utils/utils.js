export const findItemIncOrDeс = (array, item, operation = '+') => {
    return array.some((pizzaBlock) => {
        const isHasPizzaInState = Object.keys(item).every(key => item[key] === pizzaBlock.item[key]);
        if (isHasPizzaInState) {
            if (operation === '+') {
                pizzaBlock.totalItems += 1;
                pizzaBlock.totalPrice += item.price;
            } else if (operation === '+' && pizzaBlock.totalItems >= 1) {
                pizzaBlock.totalItems -= 1;
                pizzaBlock.totalPrice -= item.price;
            }

        }
        return isHasPizzaInState;
    });
}

export const addItem = (arr, item) => {
    return arr = [
        ...arr,
        {
            item: item,
            totalItems: 1,
            totalPrice: item.price
        }
    ]
}

export const findTotalItems = (items, findProp) => {
    return Object.values(items).reduce((sum, pizzasById) => {
        const sumPizzasById = Object.values(pizzasById).reduce((sum,pizzasByTypes) => {
            return sum + pizzasByTypes[findProp];
        }, 0);
        return sum + sumPizzasById;
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