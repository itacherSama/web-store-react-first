import React from 'react';
import cn from 'classnames'

const Categories = React.memo(({items, onSelectCategory, sortCategory}) => {

    const onSelectItem = (index) => {
        onSelectCategory(index);
    }
    return (
        <div className="categories">
            <ul>
                <li
                    className={cn({
                        active: sortCategory === null,
                    })}
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {
                    items && items.map((name, index) => (
                        <li
                            className={cn({
                                active: sortCategory === index,
                            })}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}</li>
                    ))
                }
            </ul>
        </div>
    );
});

export default Categories;