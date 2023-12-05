import PropTypes from 'prop-types';
import React from 'react';
import './star.css';

export const Star = ({ disabled = false, large = false, ...props }) => {
  const handleStarHover = () => {};

  const dim = large ? 'w-12 h-12' : 'w-3 h-3';

  return (
    <div className={`relative ${dim} star-group`}>
      <img
        className={`absolute ${dim} star ${
          disabled ? 'mix-blend-luminosity' : ''
        }`}
        {...props}
        src={`./assets/images/start.png`}
        alt="Star"
      />
    </div>
  );
};

Star.propTypes = {
  disabled: PropTypes.bool,
  large: PropTypes.bool,
};
