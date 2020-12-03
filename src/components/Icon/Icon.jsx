import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ src: IconSvg, className }) {
  return (
    <IconSvg className={ className } />
  );
}

Icon.propTypes = {
  src: PropTypes.func,
  className: PropTypes.string,
};
