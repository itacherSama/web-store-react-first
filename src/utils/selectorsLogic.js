export function getCountItemsById(items) {
    return new Map(Object.keys(items).map(el => {
        return [parseInt(el), items[el].reduce((prev, cur) => {
            return prev + cur.totalItems;
        }, 0)];
    }));
}

export function getCountItemById(item) {
    if (!Array.isArray(item)) return false;
    return item.reduce((prev, cur) => {
        return prev + cur.totalItems;
    }, 0);
}