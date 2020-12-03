import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = React.memo(({
  className, outline, children, onClick,
}) => {
  const ownClassName = className.split(' ').map((el) => styles[el]).join(' ');

  return (
    <button
      className={ cn(styles.button,
        ownClassName,
        {
          [styles.buttonOutline]: outline,
        }) }
      onClick={ onClick }
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
