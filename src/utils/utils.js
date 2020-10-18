export function findItemIncOrDeс(array, item, operation = '+') {
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

export function addItem(arr, item) {
    return arr = [
        ...arr,
        {
            item: item,
            totalItems: 1,
            totalPrice: item.price
        }
    ]
}

export function findTotalItems(items, findProp) {
    return Object.values(items).reduce((sum, pizzasById) => {
        const sumPizzasById = Object.values(pizzasById).reduce((sum,pizzasByTypes) => {
            return sum + pizzasByTypes[findProp];
        }, 0);
        return sum + sumPizzasById;
    }, 0);
}
