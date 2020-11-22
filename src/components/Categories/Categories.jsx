import React from 'react';
import cn from 'classnames'
import PropTypes from "prop-types";

import styles from './Categories.module.scss';

const Categories = React.memo(({items, onSelectCategory, sortCategory}) => {

    const onSelectItem = (index) => {
        onSelectCategory(index);
        
    }

    return (
        <div className={styles.categories}>
            <ul>
                <li
                    className={cn({
                        [styles.active]: sortCategory === null,
                    })}
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {
                    items && items.map((name, index) => (
                        <li
                            className={cn({
                                [styles.active]: sortCategory === index,
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