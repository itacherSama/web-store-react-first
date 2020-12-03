import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '@components/Icon';
import ArrowTopSvg from '@assets/img/arrow-top.svg';

import styles from './SortPopup.module.scss';

const SortPopup = React.memo(({ items, onSelectBySort, sortBy }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortPopupItem = React.useRef();
  const sortByName = items.find((obj) => obj.type === sortBy.type).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index) => {
    onSelectBySort(index);
  };

  const hideVisiblePopup = (e) => {
    const checkedItem = e.path.includes(sortPopupItem.current);
    if (!checkedItem) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', hideVisiblePopup);

    return window.removeEventListener('click', hideVisiblePopup);
  }, []);

  return (
    <div
      className={ styles.sort }
      onClick={ toggleVisiblePopup }
      ref={ sortPopupItem }
    >
      <div className={ styles.sortLabel }>
        <Icon className={ visiblePopup ? styles.rotated : '' } src={ ArrowTopSvg } />

        <b>сортировка по:</b>
        <span>{sortByName}</span>
      </div>
      {visiblePopup && (
        <div className={ styles.sortPopup }>
          <ul>
            {items && items.map((item, index) => (
              <li
                className={ cn({
                  [styles.active]: sortBy.type === items[index].type,
                }) }
                key={ `${item.type}_${index}` }
                onClick={ () => onSelectItem(index) }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onSelectBySort: PropTypes.func,
  sortBy: PropTypes.object,
};

export default SortPopup;
