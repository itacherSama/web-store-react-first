import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setSortBy } from '@redux/filter/actions';
import { sortNames } from '@shared/addInfo';
import Icon from '@components/Icon';
import ArrowTopSvg from '@assets/img/arrow-top.svg';

import styles from './SortPopup.module.scss';

const SortPopup = React.memo(({ onSetParams, sortBy, params }) => {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortPopupItem = React.useRef();
  const sortByName = sortNames.find((obj) => obj.type === sortBy.type).name;

  const onSelectBySort = React.useCallback((index) => {
    const current = sortNames[index].type;
    const isNewSort = current !== sortBy.type;
    if (isNewSort) {
      onSetParams('sort', current);
    }
  }, [sortBy]);

  React.useEffect(() => {
    if (params.sort) dispatch(setSortBy(params.sort));
  }, [params.sort]);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const hideVisiblePopup = (e) => {
    const checkedItem = e.path.includes(sortPopupItem.current);
    if (!checkedItem) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', hideVisiblePopup);
    return () => {
      window.removeEventListener('click', hideVisiblePopup);
    };
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
        <div className={ styles.sortPopup } >
          <ul>
            {sortNames && sortNames.map((item, index) => (
              <li
                className={ cn({
                  [styles.active]: sortBy.type === sortNames[index].type,
                }) }
                key={ `${item.type}_${index}` }
                onClick={ () => onSelectBySort(index) }
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
  onSetParams: PropTypes.func,
  params: PropTypes.object,
  sortBy: PropTypes.object,
};

export default SortPopup;
