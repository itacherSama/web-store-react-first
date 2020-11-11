import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";
import CartItem from "./CartItem";

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

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    onSelectCategory: PropTypes.func,
    sortCategory: PropTypes.number
};

export default Categories;