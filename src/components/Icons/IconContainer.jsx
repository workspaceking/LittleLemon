import PropTypes from 'prop-types';
import React from 'react';

export const IconContainer = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${className} w-10 h-10 p-1.5 bg-surface rounded-lg justify-center items-center gap-3 flex`}
    >
      {children}
    </div>
  );
};

IconContainer.propTypes = {};
