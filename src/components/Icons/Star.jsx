import PropTypes from 'prop-types';
import React from 'react';

export const Star = ({ disabled = false, large = false }) => {
  const dim = large ? 'w-12 h-12`' : 'w-3 h-3';
  return (
    <img
      className={`${dim} ${disabled ? 'mix-blend-luminosity' : ''}`}
      src={`./assets/images/start.png`}
    />
  );
};

Star.propTypes = {
  disabled: PropTypes.bool,
  large: PropTypes.bool,
};
